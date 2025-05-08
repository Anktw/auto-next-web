"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SettingsButton } from "./settings-button"
import LoggedUser from "./ui/loggeuser"


const webpages = ["Features", "Links", "Extension"].map((name) => ({
  name,
  path: `/${name.toLowerCase()}`,
}))


const HeaderComp = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [scrollingUp, setScrollingUp] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const [cachedUsername, setCachedUsername] = useState<string | null>(null)
  const maxRetries = 3;
  const retryDelay = 2000; // 2 seconds

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset
    const currentScrollY = window.scrollY

    const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10
    const isScrolled = currentScrollY > 10
    const isScrollingUp = currentScrollY < lastScrollY

    setVisible(isVisible)
    setScrolled(isScrolled)
    setScrollingUp(isScrollingUp)

    setPrevScrollPos(currentScrollPos)
    setLastScrollY(currentScrollY)
  }, [prevScrollPos, lastScrollY])
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const closeMenuOnScroll = useCallback(() => {
    if (window.innerWidth < 768 && isOpen) {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 10) {
        setIsOpen(false);
      }
    }
  }, [isOpen]);

  const closeMenuOnResize = useCallback(() => {
    if (window.innerWidth >= 768 && isOpen) {
      setIsOpen(false)
    }
  }, [isOpen])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  useEffect(() => {
    window.addEventListener("scroll", closeMenuOnScroll)
    window.addEventListener("resize", closeMenuOnResize)

    return () => {
      window.removeEventListener("scroll", closeMenuOnScroll)
      window.removeEventListener("resize", closeMenuOnResize)
    }
  }, [closeMenuOnScroll, closeMenuOnResize])

  

  return (
    <header
      className={`fixed top-0 z-30 transition-all duration-300 ease-in-out ${visible ? "translate-y-0" : "-translate-y-full"
        } ${scrollingUp && scrolled ? "w-[90%] mx-auto left-0 right-0 rounded-b-xl shadow-lg" : "w-full shadow-md"}`}
    >
      <div
        className={`backdrop-blur-xl flex justify-between items-center px-6 py-4 md:px-12 ${scrolled ? "p-2 border-2 rounded-b-lg" : "p-4"
          }`}
      >
        {/* Logo */}
        <div
          className={`text-2xl md:text-3xl lg:text-4xl left-0 transition-all duration-400 font-medium ${scrolled ? "scale-90" : "scale-100"
            }`}
        >
          <Link href="/" className={`${pathname === "/" ? "cursor-auto" : ""}`}>
            Auto-Next
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex items-center gap-8 ${scrolled ? "space-x-2 md:space-x-2 lg:space-x-4" : "space-x-0 md:space-x-3 lg:space-x-6"
            }`}
        >
          {webpages.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className={`hover:text-secondary-foreground transition ${scrolled ? "text-base" : "text-lg"} ${pathname === path ? "opacity-80 cursor-pointer" : ""
                }`}
            >
              {name}
            </Link>
          ))}
        </nav>
        {/* User/Login Section */}
        <SettingsButton/>
        <LoggedUser/>
        {/* Burger Menu Button */}
        <button
          className="relative w-8 h-8 md:hidden z-50 animate-fadeInRight justify-center align-middle cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            toggleMenu()
          }}
          aria-label="Menu"
        >
          <span
            className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-2"
              }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
              }`}
          ></span>
          <span
            className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-2"
              }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="fixed top right-0 h-screen w-1/2 md:w-64 backdrop-blur-3xl z-50 transform transition-transform duration-300 ease-in-out translate-x-0"
        >
          {/* Menu Links */}
          <nav className="flex flex-col items-center mt-20 px-8 space-y-4">
            {webpages.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                className={`text-lg hover:opacity-80 ${pathname === path ? "opacity-80 cursor-pointer" : ""}`}
                onClick={toggleMenu}
              >
                {name}
              </Link>
            ))}
            <div className="flex md:hidden items-center gap-4">
          <LoggedUser/>
        </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default HeaderComp