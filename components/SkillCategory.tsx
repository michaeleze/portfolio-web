'use client';

import { motion } from 'framer-motion';
import { SkillCard } from './SkillCard';
import { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
  index: number;
}

export function SkillCategory({ title, icon: Icon, skills, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl py-8"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-white dark:bg-neutral-800 rounded-xl">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, skillIndex) => (
          <SkillCard
            key={skill.name}
            {...skill}
            index={skillIndex}
            categoryIndex={index}
          />
        ))}
      </div>
    </motion.div>
  );
}
