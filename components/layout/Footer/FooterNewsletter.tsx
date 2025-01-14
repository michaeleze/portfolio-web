'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="max-w-md">
      <h3 className="font-semibold text-lg mb-4 text-neutral-900 dark:text-neutral-100">
        Stay Updated
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
        Subscribe to my newsletter for the latest updates on projects and tech insights.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100"
          required
        />
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="px-4 py-2 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Send className="h-4 w-4" />
          <span className="hidden sm:inline">Subscribe</span>
        </motion.button>
      </form>
    </div>
  );
}