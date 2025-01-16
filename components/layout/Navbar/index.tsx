'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';
import MobileMenu from './MobileMenu';
import MichaelLogo from '@/components/Logo';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-white/40 dark:bg-neutral-900/80 backdrop-blur-lg">
      <div className="w-[calc(100%-2rem)] m-auto">
      <div className="mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-medium">
            <MichaelLogo />
          </Link>

          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  href={link.href}
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2"
            aria-label="Open menu"
          >
            <div className="border border-neutral-900 dark:border-neutral-100 p-2">
              <Menu size={24} />
            </div>
          </button>
        </div>
      </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
