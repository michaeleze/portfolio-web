"use client"

import { WhateverLogo } from "@/components/WhateverLogo"
import { motion } from "framer-motion"

export default function WhateverPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      <WhateverLogo />
    </motion.div>
  )
}
