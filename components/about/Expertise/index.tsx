'use client';

import { motion } from 'framer-motion';
import { aboutContent } from '@/lib/content/about';
import { ExpertiseTitle } from './ExpertiseTitle';
import { ExpertiseCategory } from './ExpertiseCategory';

export function Expertise() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-neutral-800 rounded-[2rem] my-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ExpertiseTitle title={aboutContent.expertise.title} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutContent.expertise.categories.map((category, index) => (
              <ExpertiseCategory
                key={category.title}
                title={category.title}
                items={category.items}
                icon={category.icon}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}