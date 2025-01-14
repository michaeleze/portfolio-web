'use client';

import { motion } from 'framer-motion';

interface ExpertiseTitleProps {
  title: string;
}

export function ExpertiseTitle({ title }: ExpertiseTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-bold mb-12"
    >
      {title}
    </motion.h2>
  );
}