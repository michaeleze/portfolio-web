'use client';

import { motion } from 'framer-motion';

interface SkillProgressProps {
  level: number;
  delay: number;
}

export function SkillProgress({ level, delay }: SkillProgressProps) {
  return (
    <div className="h-2 bg-neutral-200 dark:bg-neutral-600 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, delay }}
        className="h-full bg-neutral-900 dark:bg-neutral-100"
      />
    </div>
  );
}