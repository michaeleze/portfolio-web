'use client';

import { motion } from 'framer-motion';
import { homeContent } from '@/lib/content';
import { FooterSocial } from '../layout/Footer/FooterSocial';

export default function Hero() {
  return (
    <section className="flex items-center align-center justify-center  h-full">
      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col gap-8"
      >
        <div>
          <span className="py-4 font-bold uppercase text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl">
            {homeContent.hero.caption}
          </span>
          <h1 className="font-bold leading-none capitalize text-[4rem] md:text-[7rem] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
            {homeContent.hero.title}
          </h1>
        </div>
        <p className="font-light text-3xl md:text-4xl text-neutral-500 dark:text-neutral-400 max-w-3xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
          {homeContent.hero.subtitle}
        </p>
        <FooterSocial />
      </motion.div>
    </section>
  );
}
