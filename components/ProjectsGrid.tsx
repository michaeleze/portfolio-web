"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { projects } from "@/lib/content"

export interface Project {
  name: string
  slug: string
  isActive?: boolean
}

interface ProjectsGridProps {
  currentSlug: string
}

export function ProjectsGrid({ currentSlug }: ProjectsGridProps) {
  return (
    <div className="flex flex-row flex-wrap gap-2 md:gap-4 p-5 md:p-10 max-w-screen-2xl mx-auto bg-[#f7f4ed] dark:bg-neutral-800 dark:text-neutral-100 rounded-[2rem] ">
      {projects.map((project) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1]
          }}
        >
          <Link href={`/${project.slug}`}>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-light hover:opacity-70 transition-opacity ${
                currentSlug === project.slug ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {project.name} |
            </h2>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
