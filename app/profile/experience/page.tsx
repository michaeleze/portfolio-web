"use client"

import { JobPosition } from "@/components/JobPosition"
import { motion } from "framer-motion"

const jobs = [
  {
    company: "Figma",
    role: "Product Designer",
    year: "Now",
    location: "Seattle",
    description: "Working on design systems products.",
    isProduct: true
  },
  {
    company: "Cocoon",
    role: "Director of Design",
    year: "2023",
    location: "Seattle",
    description: "I led and executed design across product and brand, built a team from the ground up, significantly increased conversion, and directed a company rebrand, as we worked to build the leave management platform our loved ones deserve.",
    isProduct: false
  }
]

export default function ExperiencePage() {
  return (
    <motion.div
      className="min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      <main className="px-6 md:px-12 py-16">
        {jobs.map((job, index) => (
          <JobPosition
            key={`${job.company}-${job.role}`}
            {...job}
            delay={index * 0.2}
          />
        ))}
      </main>
    </motion.div>
  )
}
