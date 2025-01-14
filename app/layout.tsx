'use client';

import '@/theme/globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar, Footer, ThemeSwitcher } from '@/components/layout';

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
          <div className="flex flex-col min-h-screen">
            <Navbar />
              {children}
            <Footer />
          </div>
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
