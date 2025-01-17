'use client';

import { cubicBezier, motion, Variants } from 'framer-motion';
import { homeContent } from '@/lib/content';
import { FooterSocial } from '../layout/Footer/FooterSocial';

const variants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: cubicBezier(0.215, 0.61, 0.355, 1)
    }
  }
}

export default function Hero() {
  return (
    <section className="flex items-center align-center justify-center h-full">
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        className="flex flex-col gap-8"
      >
        <div>
          <span className="uppercase text-sm md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl">
            {homeContent.hero.caption}
          </span>
          <h1 className="font-bold leading-none capitalize text-[6rem] md:text-[8rem] bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
            {homeContent.hero.title}
          </h1>
        </div>
        <p className="font-light text-2xl pr-4 text-neutral-500 dark:text-neutral-400 max-w-xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
          {homeContent.hero.subtitle}
        </p>
        <FooterSocial />
      </motion.div>
    </section>
  );
}
