"use client"
import { useState, useEffect } from "react"
import DesktopHomePage from "@/components/DesktopHomePage"
import MobileHomePage from "@/components/MobileHomePage"

export default function HomePage() {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    // Check on initial render if we're in browser
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768
    }
    return false // Default to desktop for SSR
  })

  useEffect(() => {
    // Handle window resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Render appropriate version based on screen size
  return isMobile ? <MobileHomePage /> : <DesktopHomePage />
}
