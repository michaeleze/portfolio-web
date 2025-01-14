'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/content';
import { FooterLinks } from './FooterLinks';
import { FooterSocial } from './FooterSocial';
import { FooterContact } from './FooterContact';
import MichaelLogo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 py-20 flex justify-center">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-neutral-800 rounded-[2rem] overflow-hidden shadow-sm"
        >
          <div className="p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Brand Section */}
              <div className="flex flex-col">
                <MichaelLogo />
                <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                  {siteConfig.description}
                </p>
              </div>
              <div className='flex lg:justify-end'>
                <FooterSocial />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700">
              <p className="text-neutral-600 dark:text-neutral-400 m-auto">
                © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
