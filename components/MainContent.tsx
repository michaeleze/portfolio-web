"use client"

import { CompanyName } from "./CompanyName"
import { ContentDescription } from "./ContentDescription"
import { ContentTabs } from "./ContentTabs"
import { motion, Variants, cubicBezier } from "framer-motion"

interface MainContentProps {
  companyName: string;
  title: string;
  description: string;
  tabs: {
    [key: string]: {
      title: string;
      content: string[];
    }
  }
}

const contentVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.2,
      delay: 0.5,
      ease: cubicBezier(0.6, 0.01, -0.05, 0.95)
    } 
  }
}

export function MainContent({ companyName, title, description, tabs }: MainContentProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[15%_55%_20%] md:gap-x-5 gap-y-8 my-12 md:my-20">
      <motion.div 
        className="md:pr-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          duration: 1.2, 
          delay: 0.2, 
          ease: cubicBezier(0.6, 0.01, -0.05, 0.95)
        }}
      >
        <CompanyName name={companyName} />
      </motion.div>
      <motion.div
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <ContentDescription title={title} description={description} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          duration: 1.2, 
          delay: 0.7, 
          ease: cubicBezier(0.6, 0.01, -0.05, 0.95)
        }}
      >
        <ContentTabs tabs={tabs} />
      </motion.div>
    </div>
  )
}

