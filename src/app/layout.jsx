import { AuthProvider } from '@/providers/AuthProvider';
import './globals.css';

export const metadata = {
  title: 'Aprende Frontend',
  description:
    'Aprende frontend paso a paso. Aquí no solo aprendes, construyes. Mejora tus habilidades mientras creas proyectos para tu portfolio.',
  icons: '/favicon.svg'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
