import '../index.css';
import 'lenis/dist/lenis.css';
import { ThemeProvider } from '../src/context/ThemeContext';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/next';
import { Sora } from 'next/font/google';
import Lenis from 'lenis';
import { useEffect } from 'react';
import { registerServiceWorker } from '../src/lib/serviceWorker';

const sora = Sora({ subsets: ['latin'], weight: ['400', '600', '800'], display: 'swap' });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Register service worker for PWA functionality and cache busting
    registerServiceWorker();

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId: number;
    
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    
    rafId = requestAnimationFrame(raf);

    // Add lenis class to html for proper styling
    document.documentElement.classList.add('lenis');

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.documentElement.classList.remove('lenis');
    };
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