import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://axonstream.ai'),
  title: {
    default: 'AxonStream Technologies - Complete Enterprise IT: Software, Platforms, Hardware & Managed AI',
    template: '%s | AxonStream Technologies'
  },
  description: 'We deliver end-to-end enterprise solutions — platform licensing, custom SaaS, hardware procurement, network & CCTV integration, and managed AI automation & DevOps.',
  keywords: [
    'enterprise IT solutions',
    'platform licensing',
    'custom software development',
    'hardware procurement',
    'network integration',
    'CCTV systems',
    'managed AI services',
    'systems integration',
    'enterprise software',
    'business automation'
  ],
  authors: [{ name: 'AxonStream Technologies' }],
  creator: 'AxonStream Technologies',
  publisher: 'AxonStream Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://axonstream.ai',
    siteName: 'AxonStream Technologies',
    title: 'AxonStream Technologies - Complete Enterprise IT Solutions',
    description: 'End-to-end enterprise IT solutions including platform licensing, custom software, hardware procurement, and managed AI services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AxonStream Technologies - Enterprise IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AxonStream Technologies - Complete Enterprise IT Solutions',
    description: 'End-to-end enterprise IT solutions including platform licensing, custom software, hardware procurement, and managed AI services.',
    images: ['/twitter-image.jpg'],
    creator: '@axonstream',
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
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://axonstream.ai',
    languages: {
      'en': 'https://axonstream.ai/en',
      'ar': 'https://axonstream.ai/ar',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://axonstream.ai" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#09203f" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'AxonStream Technologies',
              url: 'https://axonstream.ai',
              logo: 'https://axonstream.ai/logo.png',
              description: 'Complete enterprise IT solutions including platform licensing, custom software development, hardware procurement, and managed AI services.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'UAE',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'hello@axonstream.ai',
                contactType: 'sales',
              },
              sameAs: [
                'https://linkedin.com/company/axonstream-technologies',
              ],
              areaServed: ['UAE', 'Middle East', 'Global'],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Enterprise IT Solutions',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Platform Licensing',
                      description: 'Microsoft, Oracle, SAP platform licensing and integration'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Custom Software Development',
                      description: 'End-to-end custom SaaS and enterprise software development'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Managed AI Services',
                      description: 'AI automation, RAG systems, and intelligent workflow orchestration'
                    }
                  }
                ]
              }
            }),
          }}
        />
      </head>
      <body 
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <div id="root" className="relative">
          {children}
        </div>
        
        {/* Performance and Analytics Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance observer for Core Web Vitals
              if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (entry.entryType === 'largest-contentful-paint') {
                      console.log('LCP:', entry.startTime);
                    }
                    if (entry.entryType === 'first-input') {
                      console.log('FID:', entry.processingStart - entry.startTime);
                    }
                    if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
                      console.log('CLS:', entry.value);
                    }
                  }
                });
                observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
