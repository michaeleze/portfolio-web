import { Menu } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
        hello
        </Link>

        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
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

        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
