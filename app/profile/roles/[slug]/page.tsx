"use client"

import { TabNav } from "@/components/TabNav"
import { RoleContent } from "@/components/RoleContent"
import { motion } from "framer-motion"
import React, { Usable } from "react"

const roleContent: { [key: string]: string } = {
  "product-designers": "I'm a systems thinker with a high bar for quality. From process to pixels, I'll collaborate with you, learn from you, and help make something we're proud of."
}

export default function RolePage({ params }: { params: Usable<{ slug: string }>}) {
  const {slug} = React.use(params)
  const content = roleContent[slug] || "Content coming soon..."

  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      <TabNav currentTab={slug} />
      <RoleContent content={content} />
    </motion.div>
  )
}
