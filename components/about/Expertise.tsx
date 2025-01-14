'use client';

import { motion } from 'framer-motion';
import { aboutContent } from '@/lib/content';

export function Expertise() {
  return (
    <section className="py-20 px-4 bg-neutral-100 dark:bg-neutral-800">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12">{aboutContent.expertise.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutContent.expertise.skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}