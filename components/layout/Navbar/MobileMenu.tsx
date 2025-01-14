'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

import MichaelLogo from '@/components/Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-neutral-50 dark:bg-neutral-900 z-50"
        >
          <div className="flex justify-between items-center p-4">
            <Link href="/" className="text-2xl font-medium" onClick={onClose}>
            <MichaelLogo />
            </Link>
            <button
              onClick={onClose}
              className="p-2"
              aria-label="Close menu"
            >
              <div className="border border-neutral-900 dark:border-neutral-100 p-2">
                <X className="h-6 w-6" />
              </div>
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center h-[calc(100vh-88px)]">
            <div className="space-y-8 text-center">
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block text-3xl font-light hover:underline underline-offset-4 text-neutral-900 dark:text-neutral-100"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
