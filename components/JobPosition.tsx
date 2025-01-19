"use client"

import { motion } from "framer-motion"
import { Box, CircleDot } from 'lucide-react'

interface JobPositionProps {
  company: string
  role: string
  year: string
  location: string
  description: string
  isProduct?: boolean
  delay?: number
}

export function JobPosition({ 
  company, 
  role, 
  year, 
  location, 
  description, 
  isProduct = false,
  delay = 0 
}: JobPositionProps) {
  return (
    <motion.div
      className="max-w-4xl mx-auto mb-32"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.215, 0.61, 0.355, 1]
      }}
    >
      <div className="w-16 h-16 mb-8 rounded-full bg-neutral-100 flex items-center justify-center">
        {isProduct ? (
          <Box className="w-8 h-8" />
        ) : (
          <CircleDot className="w-8 h-8" />
        )}
      </div>
      <div className="space-y-4 w-full  bg-neutral-100 rounded-[1.2rem] p-8">
        <div className="space-y-1 w-full">
          <p className="text-3xl text-black">{company}</p>
          <h2 className="text-6xl md:text-[5rem] font-bold tracking-tight">
            {role}
          </h2>
        </div>
        <div className="flex gap-2 text-muted-foreground">
          <span>{year}</span>
          <span>{location}</span>
        </div>
        <p className="text-muted-foreground max-w-2xl">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

