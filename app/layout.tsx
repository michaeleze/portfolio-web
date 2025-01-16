'use client';

import '@/theme/globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar, Footer } from '@/components/layout';
import PageAnimation from '@/components/PageAnimation';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-full flex flex-col bg-neutral-50 dark:bg-neutral-900">
            <Navbar />
            <PageAnimation>
              {children}
            </PageAnimation>
            <Footer />
          </div>
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
