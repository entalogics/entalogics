import '../index.css';
import { ThemeProvider } from '../src/context/ThemeContext';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/next';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
} 