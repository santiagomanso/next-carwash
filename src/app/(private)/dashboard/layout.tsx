// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Libre_Baskerville } from 'next/font/google';
import { Archivo } from 'next/font/google';
// import './styles.css';

const libre_baskerville = Libre_Baskerville({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre_baskerville',
  weight: '400', // Add this line
});

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
  weight: '400', // Add this line
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={libre_baskerville.variable + ' ' + archivo.variable}>
        {children}
      </body>
    </html>
  );
}
