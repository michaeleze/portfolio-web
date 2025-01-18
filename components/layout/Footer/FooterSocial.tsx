'use client';

import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '@/lib/constants';

export function FooterSocial({socials = SOCIAL_LINKS }: { socials?: typeof SOCIAL_LINKS }) {
  return (
    <div className="flex space-x-6 basis-[15%]">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
          >
            <span className="sr-only">{social.name}</span>
            <Icon className="h-6 w-6" />
          </motion.a>
        );
      })}
    </div>
  );
}
