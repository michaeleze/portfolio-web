'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/content';
import { FooterLinks } from './FooterLinks';
import { FooterSocial } from './FooterSocial';
import { FooterContact } from './FooterContact';

export default function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl md:max-w-6xl mx-auto bg-white dark:bg-neutral-800 rounded-[2rem]"
        >
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Brand Section */}
              <div className="flex flex-col">
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md">
                  {siteConfig.description}
                </p>
                <FooterSocial />
              </div>
              <FooterLinks />
            </div>

            {/* Bottom Section */}
            <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-700">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <p className="text-neutral-600 dark:text-neutral-400">
                  © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
    </footer>
  );
}
