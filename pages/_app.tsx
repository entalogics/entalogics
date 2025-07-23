import '../index.css';
import { ThemeProvider } from '../src/context/ThemeContext';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/next';
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'], weight: ['400', '600', '800'], display: 'swap' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={sora.className}>
        <Component {...pageProps} />
        <Analytics />
      </div>
    </ThemeProvider>
  );
} 