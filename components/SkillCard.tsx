'use client';

import { SkillProgress } from '@/components/about/TechStack/SkillProgress';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-neutral-800 rounded-xl p-3 transition-all"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 bg-neutral-100 dark:bg-neutral-700 rounded-xl p-2">
          <Image
            src={icon}
            alt={name}
            fill
            className="object-contain p-2"
          />
        </div>
        <div>
          <h3 className="font-medium text-md">{name}</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Proficiency: {level}%
          </p>
        </div>
      </div>
      <SkillProgress level={level} delay={delay} />
    </motion.div>
  );
}
