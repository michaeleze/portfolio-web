'use client';

import { motion } from 'framer-motion';

interface ExpertiseItemProps {
  item: string;
  index: number;
  categoryIndex: number;
}

export function ExpertiseItem({ item, index, categoryIndex }: ExpertiseItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
      className="text-neutral-600 dark:text-neutral-400"
    >
      {item}
    </motion.li>
  );
}