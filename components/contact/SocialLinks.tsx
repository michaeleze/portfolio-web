'use client';

import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '@/lib/constants';

export function SocialLinks() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Connect With Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SOCIAL_LINKS.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-white dark:bg-neutral-800 rounded-xl hover:scale-105 transition-transform"
              >
                <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{social.name}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Connect on {social.name}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
