"use client"

import { cubicBezier, motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface PageAnimationProps {
  children: ReactNode;
}

export const pageVariants: Variants = {
  initial: { opacity: 0, filter: 'blur(10px)' },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: cubicBezier(0.43, 0.13, 0.23, 0.96)
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.43, 0.13, 0.23, 0.96)
    }
  }
}


const PageAnimation: React.FC<PageAnimationProps> = ({ children }) => {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      variants={pageVariants}
      exit="exit"
      className="h-full w-[calc(100%-9svw)] m-auto"
    >
      {children}
    </motion.main>
  );
};

export default PageAnimation;
