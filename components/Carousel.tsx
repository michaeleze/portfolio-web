'use client'
import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CAROUSEL_CONTENT } from "@/lib/constants"

export function Carousel() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      className="max-h-[800px] overflow-x-auto md:overflow-y-auto rounded-2xl border-0 flex flex-row md:flex-col gap-4 scroll-smooth focus:scroll-auto scrollbar snap-mandatory snap-mandatory snap-both basis-[60%]"
    >
      {CAROUSEL_CONTENT.map((slide, index) => (
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
