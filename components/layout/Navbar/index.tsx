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
      {
        !isMobileMenuOpen && (
          <nav className="">
            <div className="md:w-[calc(100%-2svw)] m-auto">
              <div className="mx-auto grid grid-cols-2 md:justify-around items-center">
                <Link href="/" className="text-2xl font-medium">
                  <MichaelLogo />
                </Link>

                <div className="hidden md:flex justify-between items-center">
                  {NAV_LINKS.map((link) => (
                    <motion.div
                      key={link.href}
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      <Link
                        href={link.href}
                        className="text-md font-medium text-black dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors before:content-[''] before:w-0 before:h-[2px] before:bg-neutral-900 dark:before:bg-neutral-100 before:transition-all before:duration-300 hover:before:w-full before:top-1/2 before:-translate-y-1/2 before:absolute"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden px-2 justify-self-end"
                  aria-label="Open menu"
                >
                  <div className="border border-neutral-900 dark:border-neutral-100 p-2">
                    <Menu size={24} />
                  </div>
                </button>
              </div>
            </div>
          </nav>
        )
      }
      {
        isMobileMenuOpen && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )
      }
    </>
  );
}
