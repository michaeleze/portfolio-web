'use client';

import { motion } from 'framer-motion';
import { skillsContent } from '@/lib/content/skills';
import { SkillCategory } from '../SkillCategory';

export function TechStack() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">{skillsContent.title}</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl">
            {skillsContent.description}
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillsContent.categories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
