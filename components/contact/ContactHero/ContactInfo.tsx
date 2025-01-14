'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/content/site';

export function ContactInfo() {
  return (
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
  );
}