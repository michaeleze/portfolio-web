'use client';

import { motion } from 'framer-motion';
import { contactContent, siteConfig } from '@/lib/content';

export function ContactHero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          {contactContent.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-neutral-600 dark:text-neutral-400"
        >
          {contactContent.hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 space-y-2"
        >
          <p className="text-neutral-600 dark:text-neutral-400">
            <a href={`mailto:${siteConfig.email}`} className="underline">
              {siteConfig.email}
            </a>
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            {siteConfig.phone}
          </p>
        </motion.div>
      </div>
    </section>
  );
}