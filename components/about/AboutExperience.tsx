'use client';

import { motion } from 'framer-motion';
import { aboutContent } from '@/lib/content/about';

export function AboutExperience() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-neutral-800 rounded-[2rem] my-20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12">{aboutContent.experience.title}</h2>
          <div className="space-y-12">
            {aboutContent.experience.roles.map((role, index) => (
              <motion.div
                key={role.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-700"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-900 dark:bg-neutral-100" />
                <h3 className="text-xl font-semibold mb-2">{role.position}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-1">
                  {role.company}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-3">
                  {role.period}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {role.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}