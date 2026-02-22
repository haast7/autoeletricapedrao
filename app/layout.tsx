import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { ScrollAnimationObserver } from '@/components/ScrollAnimationObserver';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://autoeletricapedrao.vercel.app';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'Auto Elétrica Pedrão',
  image: `${siteUrl}/assets/assets/autoeletricapedraogoogle.png`,
  description: 'Auto elétrica em Caxambu – MG. Linha leve e pesada, motor de partida, alternador, baterias, instalação elétrica e socorro automotivo.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Ápio Cardoso, 812',
    addressLocality: 'Caxambu',
    addressRegion: 'MG',
    postalCode: '37440-000',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -21.9772,
    longitude: -44.9319,
  },
  telephone: '+553588108404',
  url: siteUrl,
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '12:00' },
  ],
  areaServed: { '@type': 'City', name: 'Caxambu', containedInPlace: { '@type': 'State', name: 'Minas Gerais' } },
  sameAs: [
    'https://www.instagram.com/autoeletricapedrao',
    'https://www.facebook.com/autoeletricapedrao',
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Auto Elétrica em Caxambu – Auto Elétrica Pedrão | Linha Leve e Pesada',
  description: 'Auto elétrica em Caxambu – MG. Motor de partida, alternador, baterias, instalação elétrica e socorro automotivo. Atendimento direto em Caxambu e região.',
  keywords: ['auto elétrica Caxambu', 'auto eletricista Caxambu', 'socorro automotivo Caxambu', 'bateria Caxambu', 'alternador Caxambu', 'motor de partida Caxambu', 'Auto Elétrica Pedrão'],
  openGraph: {
    title: 'Auto Elétrica em Caxambu – Auto Elétrica Pedrão',
    description: 'Elétrica automotiva para linha leve e pesada. Socorro automotivo em Caxambu e região.',
    url: siteUrl,
    siteName: 'Auto Elétrica Pedrão',
    locale: 'pt_BR',
    type: 'website',
    /** Imagem ao compartilhar link (WhatsApp, Facebook etc.). Dimensões recomendadas: 1200×630 px. */
    images: [{ url: '/assets/assets/autoeletricapedraogoogle.png', width: 1200, height: 630, alt: 'Auto Elétrica Pedrão - Caxambu MG' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Elétrica em Caxambu – Auto Elétrica Pedrão',
    description: 'Elétrica automotiva para linha leve e pesada. Socorro automotivo em Caxambu e região.',
    images: ['/assets/assets/autoeletricapedraogoogle.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  icons: { icon: '/assets/assets/favicon.png' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="icon" href="/assets/assets/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans relative">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NV4Y8MND10"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NV4Y8MND10');
          `}
        </Script>
        <div
          className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#e10600_100%)]"
          aria-hidden
        />
        <ScrollAnimationObserver />
        <Header />
        <main id="inicio" className="pb-8 lg:pb-0 relative">
          {children}
        </main>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
