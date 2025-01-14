import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
}