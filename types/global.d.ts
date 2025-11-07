/// <reference types="react" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {};


export interface PortfolioItem {
  img: string;
  alt: string;
  slug: string;
  title: string;
  description: string;
}
