import { Skeleton } from "@/components/ui/skeleton"
import { fetchWithAuth } from "@/utils/fetchWithAuth";
import { useState, useEffect, useCallback } from "react"

type User = {
  email: string
  username: string
  first_name?: string
  last_name?: string
}

export default function LoggedUser(){
      const [signupHref, setSignupHref] = useState("https://accounts.unkit.site/auth/user/signup")
  const [loginHref, setLoginHref] = useState("https://accounts.unkit.site/auth/user/login")
     const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  });
  const [loading, setLoading] = useState(() => {
    if (typeof window !== "undefined") {
      return !localStorage.getItem("user");
    }
    return true;
  });
  const [cachedUsername, setCachedUsername] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false);
  const maxRetries = 3;
  const retryDelay = 2000; // 2 seconds

  useEffect(() => {
    setMounted(true);

    const cached = localStorage.getItem("cachedUsername")
    if (cached) {
      setCachedUsername(cached)
    }

    let cancelled = false;

    async function load(retryCount = 0) {
      try {
        const res = await fetchWithAuth("/api/user/me")
        if (!res.ok) {
          if (cached && retryCount < maxRetries) {
            setTimeout(() => {
              if (!cancelled) {
                load(retryCount + 1)
              }
            }, retryDelay)
            return
          }
          setCachedUsername(null)
          setUser(null)
          setLoading(false)
          return
        }
        const data = await res.json()
        setUser(data)
        setLoading(false)
      } catch {
        setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    const currentUrl = window.location.href
    const encodedRedirect = encodeURIComponent(currentUrl)
    setSignupHref(`https://accounts.unkit.site/auth/user/signup?redirect=${encodedRedirect}`)
    setLoginHref(`https://accounts.unkit.site/auth/user/login?redirect=${encodedRedirect}`)
  }, [])

  if (!mounted) {
    return (
      <div style={{ minHeight: 100 }}>
        <span><Skeleton className="h-6 w-24" /></span>
      </div>
    );
  }

  return(
    <div className="hidden md:flex items-center gap-4">
        {loading ? (
            cachedUsername ? (
              <span className="text-gray-300"><Skeleton className="h-6 w-24" /></span>
            ) : (
              <span><Skeleton className="h-6 w-24" /></span>
            )
          ) : user ? (
             <span className="text-gray-300">Hello {user.username}</span>
          ) : (
            <>
              <>
              <a href={loginHref} className="text-gray-300 hover:text-white transition">
                Login
              </a>
              <a
                href={signupHref}
                className="bg-yellow-400 text-black font-medium px-4 py-2 rounded-full hover:bg-yellow-300 transition"
              >
                Sign Up
              </a>
            </>
            </>
          )}
    </div>
  )
}