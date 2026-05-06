import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  title: {
    default: 'Ali ElGoual - Responsable Commercial Régional',
    template: '%s | Ali ElGoual',
  },
  description:
    "Portfolio professionnel de Ali ElGoual - Chef d'Équipe Commerciale avec 10+ ans d'expérience en vente, management et développement commercial au Maroc",
  generator: 'zeriouil_smail',
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      {
        url: '/favicons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicons/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    apple: '/favicons/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Ali ElGoual - Responsable Commercial Régional',
    description:
      "Portfolio professionnel de Ali ElGoual - Chef d'Équipe Commerciale avec 10+ ans d'expérience",
    url: siteUrl,
    siteName: 'Ali ElGoual',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Ali ElGoual - Responsable Commercial Régional',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali ElGoual - Responsable Commercial Régional',
    description:
      "Portfolio professionnel de Ali ElGoual - Chef d'Équipe Commerciale avec 10+ ans d'expérience",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="font-sans antialiased bg-background">
        {children}

        {/* JSON-LD structured data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ali ElGoual',
              jobTitle: 'Responsable Commercial Régional',
              url: siteUrl,
              image: `${siteUrl}/profile.jpeg`,
              description:
                "Professionnel expérimenté avec 10+ ans de carrière en vente, management d'équipe et développement de réseaux commerciaux.",
              sameAs: [
                'https://www.linkedin.com/in/elgoual-ali-9a6a8375'
              ],
            }),
          }}
        />

        {/* JSON-LD structured data for Organization (helps knowledge panels/search) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Ali ElGoual',
              url: siteUrl,
              logo: `${siteUrl}/favicons/android-chrome-512x512.png`,
              sameAs: [
                'https://www.linkedin.com/in/elgoual-ali-9a6a8375'
              ]
            }),
          }}
        />

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
