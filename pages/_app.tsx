import '../index.css';
import { ThemeProvider } from '../src/context/ThemeContext';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/next';
import { Sora } from 'next/font/google';
import Lenis from 'lenis';
import { useEffect } from 'react';

const sora = Sora({ subsets: ['latin'], weight: ['400', '600', '800'], display: 'swap' });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6, // ultra-smooth
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return (
    <ThemeProvider>
      <div className={sora.className}>
        <Component {...pageProps} />
        <Analytics />
      </div>
    </ThemeProvider>
  );
} 