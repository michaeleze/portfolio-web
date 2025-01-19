"use client"

import { motion } from "framer-motion"

interface RoleContentProps {
  content: string
}

export function RoleContent({ content }: RoleContentProps) {
  return (
    <motion.div
      className="px-6 md:px-12 py-16 md:py-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight max-w-[25ch]">
        {content}
      </h1>
    </motion.div>
  )
}

