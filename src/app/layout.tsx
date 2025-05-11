import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Portfolio',
  icons: {
    icon: './favicon.ico',
  },
  description: 'Web site created with Next.js.',
};

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['cyrillic', 'greek', 'latin'],
  display: 'swap',
  variable: '--font-inter',
});

interface LayoutProps {
  children: React.ReactNode;
  ui: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en' className={inter.variable}>
      <body>
        <div id='root'>{children}</div>
      </body>
    </html>
  );
}
