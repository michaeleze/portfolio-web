"use client"

import { motion } from "framer-motion"

export function WhateverLogo() {
  return (
    <motion.div
      className="flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }}
    >
      <h1 className="text-8xl md:text-[20vw] lg:text-[22vw] font-light tracking-tight leading-none">
        Whatever.
        <span className="text-[0.15em] align-bottom relative bottom-[30px] right-[5px]">TM</span>
      </h1>
    </motion.div>
  )
}
