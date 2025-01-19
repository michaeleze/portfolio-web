'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/content/site';

export function ContactHero() {
  return (
    <section className="pt-20 pb-8 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Let's Connect
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-neutral-600 dark:text-neutral-400 mb-12"
        >
          I'm always interested in hearing about new projects and opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6 max-w-md mx-auto text-left"
        >
          <div className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-800 rounded-xl">
            <Mail className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-lg hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-800 rounded-xl">
            <Phone className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Phone</p>
              <p className="text-lg">{siteConfig.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-800 rounded-xl">
            <MapPin className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Location</p>
              <p className="text-lg">{siteConfig.location.city}, {siteConfig.location.state}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
