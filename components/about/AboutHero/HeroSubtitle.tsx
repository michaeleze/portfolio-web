'use client';

import { motion } from 'framer-motion';

interface HeroSubtitleProps {
  subtitle: string;
}

export function HeroSubtitle({ subtitle }: HeroSubtitleProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl text-neutral-600 dark:text-neutral-400"
    >
      {subtitle}
    </motion.p>
  );
}