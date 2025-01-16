"use client"
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageAnimationProps {
  children: ReactNode;
}

const PageAnimation: React.FC<PageAnimationProps> = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
      className="h-full w-[calc(100%-9svw)] m-auto"
    >
      {children}
    </motion.main>
  );
};

export default PageAnimation;
