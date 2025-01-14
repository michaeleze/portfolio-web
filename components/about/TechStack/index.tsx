'use client';

import { motion } from 'framer-motion';
import { skillsContent } from '@/lib/content/skills';
import { SkillCategory } from './SkillCategory';

export function TechStack() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-neutral-800 rounded-[2rem] my-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">{skillsContent.title}</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl">
            {skillsContent.description}
          </p>

          <div className="space-y-16">
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
        </motion.div>
      </div>
    </section>
  );
}