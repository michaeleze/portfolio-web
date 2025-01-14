'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/content';

export function FooterContact() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Contact</h3>
      <div className="space-y-4">
        <motion.a
          href={`mailto:${siteConfig.email}`}
          whileHover={{ x: 2 }}
          className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          <Mail className="h-5 w-5" />
          <span>{siteConfig.email}</span>
        </motion.a>
        <motion.div
          whileHover={{ x: 2 }}
          className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400"
        >
          <Phone className="h-5 w-5" />
          <span>{siteConfig.phone}</span>
        </motion.div>
        <motion.div
          whileHover={{ x: 2 }}
          className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400"
        >
          <MapPin className="h-5 w-5" />
          <span>{siteConfig.location.city}, {siteConfig.location.state}</span>
        </motion.div>
      </div>
    </div>
  );
}