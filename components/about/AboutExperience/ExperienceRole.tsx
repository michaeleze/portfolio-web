'use client';

import { motion } from 'framer-motion';

interface ExperienceRoleProps {
  position: string;
  company: string;
  period: string;
  description: string;
  index: number;
}

export function ExperienceRole({ position, company, period, description, index }: ExperienceRoleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-700"
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-900 dark:bg-neutral-100" />
      <h3 className="text-xl font-semibold mb-2">{position}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 mb-1">
        {company}
      </p>
      <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-3">
        {period}
      </p>
      <p className="text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </motion.div>
  );
}