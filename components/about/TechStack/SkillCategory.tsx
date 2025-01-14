'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { SkillCard } from './SkillCard';

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
    >
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-6 h-6" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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