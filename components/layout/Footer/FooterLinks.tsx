'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FOOTER_LINKS } from '@/lib/constants';

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-12">
      {FOOTER_LINKS.map((section) => (
        <div key={section.title}>
          <h3 className="font-semibold text-lg mb-4 text-neutral-900 dark:text-neutral-100">
            {section.title}
          </h3>
          <ul className="space-y-3">
            {section.links.map((link) => (
              <motion.li
                key={link.label}
                whileHover={{ x: 2 }}
                className="text-neutral-600 dark:text-neutral-400"
              >
                <Link
                  href={link.href}
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
