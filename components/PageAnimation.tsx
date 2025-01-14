"use client"
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageAnimationProps {
  children: ReactNode;
}

const PageAnimation: React.FC<PageAnimationProps> = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-neutral-50 dark:bg-neutral-900 pt-20 flex-grow"
    >
      {children}
    </motion.main>
  );
};

export default PageAnimation;
