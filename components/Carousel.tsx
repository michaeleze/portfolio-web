'use client'
import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cubicBezier, motion, Variants } from "framer-motion";
import { CAROUSEL_CONTENT } from "@/lib/constants";

const galleryVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.2,
      delay:0.5,
      ease: cubicBezier(0.645, 0.045, 0.355, 1)
    }
  }
}

export function Carousel() {
  return (
    <motion.div
      variants={galleryVariants}
      initial="initial"
      animate="animate"
      className="flex text-bold capitalize before:content-['Projects and Companies >>>'] max-h-[800px] overflow-x-auto overflow-y-hidden md:overflow-y-auto rounded-xl border-0 scroll-smooth focus:scroll-auto scrollbar mask-gradient-to-b"
    >
      <div className="md:animate-scroll flex flex-row md:flex-col gap-6">
        {CAROUSEL_CONTENT.map((slide, index) => (
          <Card key={index} className="rounded-xl border-0 flex-shrink-0 snap-center shadow-none bg-blue-500 ">
            <CardContent className="p-0 overflow-hidden h-[450px] w-[400px] md:w-full overflow-hidden">
              <img
                src={slide?.src || "/placeholder.svg"}
                alt={slide?.alt}
                className="aspect-auto object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  )
}
