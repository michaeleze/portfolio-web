'use client';

import { motion } from 'framer-motion';
import { homeContent, siteConfig } from '@/lib/content';
import { FooterLinks } from './FooterLinks';
import { FooterSocial } from './FooterSocial';
import { FooterContact } from './FooterContact';
import MichaelLogo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="w-[calc(100%-2rem)] m-auto pb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='mx-auto flex justify-between items-center flex lg:flex-row pt-4 border-t border-neutral-200 dark:border-neutral-700 justify-between'>
          <p className="text-neutral-600 dark:text-neutral-400 bg-gradient-to-r bg-clip-text from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 text-transparent">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <FooterSocial />
        </div>
      </motion.div>
    </footer>
  );
}
