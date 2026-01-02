"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function DesktopHomePage() {
  const [itemsVisible, setItemsVisible] = useState(true)

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
      x: -520,
      y: 50,
      labelPosition: "left",
    },
    {
      name: "Industrial Design",
      image: "/images/laptop.png",
      href: "/industrial-design",
      label: "Industrial & Product design",
      x: 520,
      y: 50,
      labelPosition: "top",
    },
    {
      name: "Professional Photography",
      image: "/images/camera.png",
      href: "/professional-photography",
      label: "Professional Photography",
      x: 380,
      y: 230,
      labelPosition: "right",
    },
    {
      name: "About Me",
      image: "/images/glasses.png",
      href: "/about-me",
      label: "About Me",
      x: 380,
      y: -150,
      labelPosition: "right",
    },
    {
      name: "Skills",
      image: "/images/ticket.png",
      href: "/skills",
      label: "Skills",
      x: -380,
      y: -150,
      labelPosition: "bottom",
    },
    {
      name: "Contact",
      image: "/images/lipstick.png",
      href: "/contact",
      label: "Contact",
      x: -380,
      y: 230,
      labelPosition: "left",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f1f0ee] relative overflow-hidden scale-[1.15] origin-center pt-25">
      {/* Header and Bag - fixed container */}
      <div className="flex flex-col items-center justify-center w-full h-full pointer-events-none">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 pointer-events-auto"
        >
          <h1 className="font-serif text-6xl md:text-7xl tracking-wide text-[#5f6a61] mb-1 leading-tight">
            ANA FER DLT
          </h1>
          <p className="font-script text-8xl text-[#5f6a61] leading-none">
            Strategic designer specialist
          </p>
        </motion.header>

        {/* Handbag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center cursor-pointer pointer-events-auto"
          onClick={() => setItemsVisible(!itemsVisible)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/images/handbag.png"
            alt="Designer handbag"
            width={460}
            height={340}
            className="object-contain"
          />
        </motion.div>

        {/* Instruction text */}
        {!itemsVisible && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center text-[#5f6a61] font-sans mt-16 text-2xl md:text-2xl pointer-events-auto"
          >
            Click the bag to explore
          </motion.p>
        )}
      </div>

      {/* Floating Items */}
      <AnimatePresence>
        {itemsVisible && (
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
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative flex flex-col items-center cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative w-36 h-36">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Label below */}
                    <span className="mt-2 font-semibold text-xl text-[#5f6a61] text-center">
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

