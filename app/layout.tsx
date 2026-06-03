import type { Metadata } from 'next';
import { bitter, outfit } from '@/app/fonts';
import CustomCursor from '@/components/CustomCursor';
import '@/app/globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Mankeerat Singh — UX Designer',
  description: 'Portfolio of Mankeerat Singh, UX Designer based in Toronto, Canada.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bitter.variable} ${outfit.variable}`}>
      <body>
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
