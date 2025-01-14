'use client';

import { useTheme } from 'next-themes';
import LogoDark from '@/public/logo2.svg';
import Logo from '@/public/logo-white.svg';

export default function MichaelLogo() {
  const { theme } = useTheme();

  return theme === 'dark' ? <Logo className="w-[150px] h-auto" /> : <LogoDark className="w-[150px] h-auto" />
}
