'use client';

import { motion } from 'framer-motion';

interface HeroTitleProps {
  title: string;
}

export function HeroTitle({ title }: HeroTitleProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-6xl font-bold mb-6"
    >
      {title}
    </motion.h1>
  );
}