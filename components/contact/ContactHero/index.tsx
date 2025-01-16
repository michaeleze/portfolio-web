'use client';

import { motion } from 'framer-motion';
import { contactContent } from '@/lib/content/contact';
import { ContactInfo } from './ContactInfo';

interface ContactHeroProps {
  title?: string;
  subtitle?: string;
}

export function ContactHero({
  title = contactContent.hero.title,
  subtitle = contactContent.hero.subtitle
}: ContactHeroProps) {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-neutral-600 dark:text-neutral-400"
        >
          {subtitle}
        </motion.p>
        <ContactInfo />
      </div>
    </section>
  );
}
