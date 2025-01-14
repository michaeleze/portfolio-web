'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ExpertiseCardProps {
  title: string;
  items: string[];
  icon: LucideIcon;
  index: number;
}

export function ExpertiseCard({ title, items, icon: Icon, index }: ExpertiseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-neutral-600 dark:text-neutral-400"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}