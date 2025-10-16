"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function HomePage() {
  const [itemsVisible, setItemsVisible] = useState(false)

  const items = [
    { name: "Graphic Design", image: "/images/ipad.png", href: "/graphic-design", label: "Graphic Design" },
    { name: "Industrial Design", image: "/images/laptop.png", href: "/industrial-design", label: "Industrial Design" },
    { name: "Professional Photography", image: "/images/camera.png", href: "/professional-photography", label: "Professional Photographyy" },
    { name: "About me", image: "/images/glasses.png", href: "/about-me", label: "About Me" },
    { name: "Skills", image: "/images/ticket.png", href: "/skills", label: "Skills" },
    
    { name: "Contact", image: "/images/glasses.png", href: "/contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-[#f5f1ed] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="font-serif text-6xl md:text-7xl tracking-wide text-[#3d3d3d] mb-3">ANA FER DLT</h1>
        <p className="font-serif italic text-xl text-[#6d6d6d]">Strategic designer specialist</p>
      </motion.header>

      {/* Handbag - Clickable */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full max-w-md aspect-[4/3] flex items-center justify-center cursor-pointer"
        onClick={() => setItemsVisible(!itemsVisible)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image src="/images/handbag.png" alt="Designer handbag" width={400} height={300} className="object-contain" />
      </motion.div>

      {/* Floating Items */}
      <AnimatePresence>
        {itemsVisible && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {items.map((item, index) => {
              const angle = (index * 360) / items.length
              const radius = 250
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <motion.div
                  key={item.name}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                  animate={{ x, y, opacity: 1, scale: 1 }}
                  exit={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="absolute pointer-events-auto"
                >
                  <Link href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex flex-col items-center bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg cursor-pointer"
                    >
                      <div className="relative w-20 h-20 mb-2">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-contain" />
                      </div>
                      <p className="text-xs text-[#6d6d6d] italic text-center">{item.label}</p>
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Instruction text */}
      {!itemsVisible && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-[#6d6d6d] italic mt-8"
        >
          Click the bag to explore
        </motion.p>
      )}
    </div>
  )
}
