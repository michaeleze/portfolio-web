"use client"

import Image from "next/image"
import { motion, Variants, cubicBezier } from "framer-motion"

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const galleryVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 1,
      ease: cubicBezier(0.645, 0.045, 0.355, 1)
    }
  }
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <motion.div
      className="w-full  overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth focus:scroll-auto scrollbar max-h-[450px] bg-inherit rounded-xl"
      variants={galleryVariants}
      initial="initial"
      animate="animate"
    >
      <div className="flex w-full rounded-xl">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-1/2 snap-start "
          >
            <div className="relative aspect-[4/3] m-2">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
