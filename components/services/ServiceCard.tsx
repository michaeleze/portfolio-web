'use client';

import { motion } from 'framer-motion';
import { Code, Palette, LineChart } from 'lucide-react';

const icons = {
  Code,
  Palette,
  LineChart,
} as const;

interface ServiceCardProps {
  title: string;
  description: string;
  icon: keyof typeof icons;
  index: number;
}

export function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  const Icon = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white dark:bg-neutral-800 rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-12 h-12 mb-6 text-neutral-900 dark:text-neutral-100">
        <Icon size={48} />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}