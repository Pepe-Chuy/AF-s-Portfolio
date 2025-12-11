"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function MobileHomePage() {
  const [itemsVisible, setItemsVisible] = useState(false)

  useEffect(() => {
    // Disable scroll on the whole page
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"
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
    },
    {
      name: "Industrial Design",
      image: "/images/laptop.png",
      href: "/industrial-design",
      label: "Industrial & Product design",
    },
    {
      name: "Professional Photography",
      image: "/images/camera.png",
      href: "/professional-photography",
      label: "Professional Photography",
    },
    {
      name: "About Me",
      image: "/images/glasses.png",
      href: "/about-me",
      label: "About Me",
    },
    {
      name: "Skills",
      image: "/images/ticket.png",
      href: "/skills",
      label: "Skills",
    },
    {
      name: "Contact",
      image: "/images/lipstick.png",
      href: "/contact",
      label: "Contact",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f1f0ee] relative overflow-hidden flex flex-col items-center justify-center px-4 py-8">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="font-serif text-3xl sm:text-4xl tracking-wide text-[#5f6a61] mb-1 leading-tight">
          ANA FER DLT
        </h1>
        <p className="font-script text-4xl sm:text-5xl text-[#5f6a61] leading-none">
          Strategic designer specialist
        </p>
      </motion.header>

      {/* Handbag */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full max-w-xs aspect-[4/3] flex items-center justify-center cursor-pointer mb-6"
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
      {!itemsVisible && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-[#5f6a61] font-sans text-lg sm:text-xl mb-8"
        >
          Tap the bag to explore
        </motion.p>
      )}

      {/* Mobile Grid Items */}
      <AnimatePresence>
        {itemsVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <Link href={item.href}>
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      className="relative flex flex-col items-center p-4 bg-white/50 rounded-lg backdrop-blur-sm touch-manipulation"
                    >
                      {/* Image */}
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-2">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* Label */}
                      <span className="font-semibold text-sm sm:text-base text-[#5f6a61] text-center leading-tight">
                        {item.label}
                      </span>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

