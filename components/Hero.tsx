import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
            Lead Software Engineer
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Crafting exceptional digital experiences through innovative solutions and user-centric design
          </p>
        </motion.div>
      </div>
    </section>
  );
}