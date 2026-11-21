import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Tiziano Iriarte · Estratega y Creativo Digital',
  description:
    'Ayudo a profesionales creativos y founders a transformar su potencial en una identidad clara, un posicionamiento diferencial y una estrategia de contenido que genera oportunidades.',
  openGraph: {
    title: 'Tiziano Iriarte · Estratega y Creativo Digital',
    description:
      'No se trata de crear para llamar la atención, sino de comunicar algo que merezca ser atendido.',
    images: ['/assets/fondo-celeste.jpg'],
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1E1E1E',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Marca que hay JS antes de pintar, para que las animaciones de aparición no parpadeen */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');" }} />
        <link rel="preload" href="/assets/fonts/gloock-regular.woff" as="font" type="font/woff" crossOrigin="" />
        <link rel="preload" href="/assets/fonts/inter-400.woff" as="font" type="font/woff" crossOrigin="" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
