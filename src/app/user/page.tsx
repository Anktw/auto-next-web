"use client"

import { useEffect, useState } from "react"
import { fetchWithAuth } from "@/utils/fetchWithAuth"
import DashboardLoading from "./loading"

type User = {
  email: string
  username: string
  first_name?: string
  last_name?: string
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetchWithAuth("/api/user/me")
        if (!res.ok) throw new Error("Not authorized")
        const data = await res.json()
        setUser(data)
      } catch {
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div><DashboardLoading /></div>
  if (!user) return <div className="text-center">User not found...Please clear your cache and refresh this page</div>


  return (
    <div className="max-w-xl mx-auto mt-10 space-y-6">
      <h2 className="text-2xl font-semibold">Account Settings</h2>
      <div className="grid gap-4">
        Hello {user.username}
      </div>
    </div>
  )
}