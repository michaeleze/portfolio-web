'use client';

import { motion } from 'framer-motion';
import { aboutContent } from '@/lib/content/about';
import { ExperienceRole } from './ExperienceRole';

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
              <ExperienceRole
                key={role.company}
                {...role}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}