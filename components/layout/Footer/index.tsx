'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/content';
import { FooterLinks } from './FooterLinks';
import { FooterSocial } from './FooterSocial';
import { FooterContact } from './FooterContact';
import MichaelLogo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex lg:flex-row my-8 pt-8 border-t border-neutral-200 dark:border-neutral-700 justify-around">
          <p className="text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <FooterSocial />
        </div>
      </motion.div>
    </footer>
  );
}
