'use client';

import { motion } from 'framer-motion';
import { ContactHero } from '@/components/contact/ContactHero';
import { SocialLinks } from '@/components/contact/SocialLinks';

export default function ContactPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex justify-center align-center"
    >
      <div>
        <ContactHero />
        <SocialLinks />
      </div>
    </motion.main>
  );
}
