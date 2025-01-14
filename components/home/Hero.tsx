'use client';

import { motion } from 'framer-motion';
import { homeContent } from '@/lib/content';

export default function Hero() {
  return (
    <section className="flex items-center justify-center bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
            {homeContent.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            {homeContent.hero.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
