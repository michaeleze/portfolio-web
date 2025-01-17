"use client"

import { motion, Variants, cubicBezier } from "framer-motion"

interface ContentDescriptionProps {
  title: string;
  description: string;
}

const titleVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1,
      delay: 0.2,
      ease: cubicBezier(0.215, 0.61, 0.355, 1)
    } 
  }
}

const descriptionVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1,
      delay: 0.5,
      ease: cubicBezier(0.215, 0.61, 0.355, 1)
    } 
  }
}

export function ContentDescription({ title, description }: ContentDescriptionProps) {
  return (
    <div>
      <motion.h2 
        className="text-xl md:text-2xl lg:text-3xl font-medium mb-6"
        variants={titleVariants}
        initial="initial"
        animate="animate"
      >
        {title}
      </motion.h2>
      <motion.p 
        className="text-base md:text-lg leading-relaxed"
        variants={descriptionVariants}
        initial="initial"
        animate="animate"
      >
        {description}
      </motion.p>
    </div>
  );
}

