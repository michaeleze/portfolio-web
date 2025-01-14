'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SkillProgress } from './SkillProgress';

interface SkillCardProps {
  name: string;
  level: number;
  icon: string;
  index: number;
  categoryIndex: number;
}

export function SkillCard({ name, level, icon, index, categoryIndex }: SkillCardProps) {
  const delay = (categoryIndex * 0.2) + (index * 0.1);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="bg-neutral-50 dark:bg-neutral-700 rounded-xl p-4"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="relative w-6 h-6">
          <Image
            src={icon}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
        <span className="font-medium">{name}</span>
      </div>
      <SkillProgress level={level} delay={delay} />
    </motion.div>
  );
}