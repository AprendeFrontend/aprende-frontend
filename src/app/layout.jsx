import Menu from '@/components/menu/menu';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata = {
  title: 'Aprende Frontend',
  description:
    'Explora desafíos interactivos y resuelve proyectos reales de frontend para mejorar tus habilidades en diseño web y desarrollo con HTML, CSS, y JavaScript.'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
