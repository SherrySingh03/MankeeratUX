import { Bitter, Outfit } from 'next/font/google';

export const bitter = Bitter({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-bitter',
  display: 'swap',
});

// Castoro is not in next/font/google — use a local or fallback
// If not available, we'll load via @font-face in CSS
export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});
