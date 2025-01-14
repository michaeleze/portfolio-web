'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ExpertiseItem } from './ExpertiseItem';

interface ExpertiseCategoryProps {
  title: string;
  items: string[];
  icon: LucideIcon;
  index: number;
}

export function ExpertiseCategory({ title, items, icon: Icon, index }: ExpertiseCategoryProps) {
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
        {items.map((item, itemIndex) => (
          <ExpertiseItem
            key={item}
            item={item}
            index={itemIndex}
            categoryIndex={index}
          />
        ))}
      </ul>
    </motion.div>
  );
}