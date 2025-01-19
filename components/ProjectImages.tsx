"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectImage {
  src: string
  alt: string
}

interface ProjectImagesProps {
  images: ProjectImage[]
}

export function ProjectImages({ images }: ProjectImagesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 md:p-12 max-w-screen-2xl mx-auto">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative aspect-[4/3]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.2,
            ease: [0.215, 0.61, 0.355, 1]
          }}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>
      ))}
    </div>
  )
}

