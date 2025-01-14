'use client';

import { motion } from 'framer-motion';
import { aboutContent } from '@/lib/content/about';

export function AboutStory() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">{aboutContent.story.title}</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {aboutContent.story.content}
          </p>
        </motion.div>
      </div>
    </section>
  );
}