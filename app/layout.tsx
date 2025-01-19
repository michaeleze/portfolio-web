'use client';

import '@/theme/globals.css';
import { Syne } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar, Footer } from '@/components/layout';
import PageAnimation from '@/components/PageAnimation';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const syne = Syne({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={syne.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-full flex flex-col bg-neutral-50 dark:bg-neutral-900">
            <header className="px-4 sticky top-0 w-full z-50 bg-neutral-70 dark:bg-neutral-900/80 backdrop-blur-xl">
              {/* <ThemeToggle /> */}
              <Navbar />
            </header>
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
