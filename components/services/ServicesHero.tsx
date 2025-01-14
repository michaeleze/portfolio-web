'use client';

import { motion } from 'framer-motion';
import { servicesContent } from '@/lib/content';

export function ServicesHero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          {servicesContent.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-neutral-600 dark:text-neutral-400"
        >
          {servicesContent.hero.subtitle}
        </motion.p>
      </div>
    </section>
  );
}