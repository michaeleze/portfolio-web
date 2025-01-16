'use client'
import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const slides = [
  {
    src: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=500&q=80",
    alt: "Assorted small cactus plants in terra cotta pots"
  },
  {
    src: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500&q=80",
    alt: "Various succulents arranged on a wooden surface"
  },
  {
    src: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500&q=80",
    alt: "Close-up of a green succulent plant"
  },
  {
    src: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=500&q=80",
    alt: "Multiple cacti in different sizes and shapes"
  },
  {
    src: "https://images.unsplash.com/photo-1446071103084-c257b5f70672?w=500&q=80",
    alt: "Succulent plants in white pots on a windowsill"
  },
  {
    src: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80",
    alt: "Arrangement of various potted plants and cacti"
  }
]

export function Carousel() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="max-h-[800px] overflow-x-auto md:overflow-y-auto rounded-2xl border-0 flex flex-row md:flex-col gap-4 scroll-smooth focus:scroll-auto scrollbar snap-mandatory snap-mandatory snap-both basis-[60%]"
    >
      {slides.map((slide, index) => (
        <Card key={index} className="overflow-hidden rounded-2xl border-0 flex-shrink-0 snap-center shadow-md">
          <CardContent className="p-0 overflow-hidden h-[450px] w-[400px] md:w-full">
            <img
              src={slide.src || "/placeholder.svg"}
              alt={slide.alt}
              className="aspect-4/3 object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
            />
          </CardContent>
        </Card>
      ))}
    </motion.div>
  )
}
