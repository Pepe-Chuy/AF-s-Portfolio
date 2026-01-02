"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function MobileHomePage() {
  const [itemsVisible, setItemsVisible] = useState(true)
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    // Disable scroll on the whole page
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"

    // Ensure fonts are loaded before showing content
    const loadFonts = async () => {
      try {
        // Wait for fonts to be loaded
        if (document.fonts) {
          await document.fonts.ready
        }
        // Additional delay to ensure Safari renders properly
        setTimeout(() => {
          setFontsLoaded(true)
        }, 100)
      } catch (error) {
        console.warn('Font loading error:', error)
        setFontsLoaded(true)
      }
    }

    loadFonts()

    return () => {
      // Restore when leaving
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }
  }, [])

  const items = [
    {
      name: "Graphic Design",
      image: "/images/ipad.png",
      href: "/graphic-design",
      label: "Visual & Graphic Design",
      x: -120,
      y: 180,
      labelPosition: "left",
    },
    {
      name: "Industrial Design",
      image: "/images/laptop.png",
      href: "/industrial-design",
      label: "Industrial & Product design",
      x: 120,
      y: 180,
      labelPosition: "right",
    },
    {
      name: "Professional Photography",
      image: "/images/camera.png",
      href: "/professional-photography",
      label: "Professional Photography",
      x: -100,
      y: 0,
      labelPosition: "left",
    },
    {
      name: "About Me",
      image: "/images/glasses.png",
      href: "/about-me",
      label: "About Me",
      x: 100,
      y: 0,
      labelPosition: "right",
    },
    {
      name: "Skills",
      image: "/images/ticket.png",
      href: "/skills",
      label: "Skills",
      x: -60,
      y: 260,
      labelPosition: "bottom",
    },
    {
      name: "Contact",
      image: "/images/lipstick.png",
      href: "/contact",
      label: "Contact",
      x: 60,
      y: 260,
      labelPosition: "bottom",
    },
  ]

  return (
    <div
      className={`min-h-[100svh] bg-[#f1f0ee] relative overflow-hidden flex flex-col items-center justify-center px-4 ${
        !fontsLoaded ? 'opacity-0' : 'opacity-100'
      } transition-opacity duration-300`}
    >
      <div
        className="flex flex-col items-center justify-center w-full h-full pointer-events-none"
      >
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: fontsLoaded ? 1 : 0, y: fontsLoaded ? 0 : -20 }}
          transition={{ duration: 0.8, delay: fontsLoaded ? 0 : 0.2 }}
          className="text-center mb-8 pointer-events-auto"
        >
          <h1 
            className="font-serif text-3xl sm:text-4xl tracking-wide text-[#5f6a61] mb-1 leading-tight" 
            style={{ 
              fontFamily: 'var(--font-le-jour), Georgia, serif'
            }}
          >
            ANA FER DLT
          </h1>
          <p 
            className="font-script text-4xl sm:text-5xl text-[#5f6a61] leading-none"
            style={{ 
              fontFamily: 'var(--font-parfumiere), cursive'
            }}
          >
            Strategic designer specialist
          </p>
        </motion.header>

        {/* Handbag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: fontsLoaded ? 1 : 0, scale: fontsLoaded ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: fontsLoaded ? 0.3 : 0.5 }}
          className="relative w-full max-w-xs aspect-[4/3] flex items-center justify-center cursor-pointer pointer-events-auto mb-6"
          onClick={() => setItemsVisible(!itemsVisible)}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/images/handbag.png"
            alt="Designer handbag"
            width={300}
            height={225}
            className="object-contain"
          />
        </motion.div>

        {/* Instruction text */}
        {!itemsVisible && fontsLoaded && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center text-[#5f6a61] font-sans text-lg sm:text-xl pointer-events-auto"
          >
            Tap the bag to explore
          </motion.p>
        )}
      </div>

      {/* Floating Items */}
      <AnimatePresence>
        {itemsVisible && fontsLoaded && (
          <div className="absolute inset-0 pointer-events-none">
            {items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{ x: item.x, y: item.y, opacity: 1, scale: 1 }}
                exit={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              >
                <Link href={item.href}>
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="relative flex flex-col items-center cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Label */}
                    <span className="mt-1 font-semibold text-sm sm:text-base text-[#5f6a61] text-center">
                      {item.label}
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

