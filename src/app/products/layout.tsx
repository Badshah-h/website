import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Platforms - AxonPulse & AxientOS Solutions',
  description: 'Discover AxonPulse real-time orchestration platform and AxientOS AI business system generator. Revolutionary enterprise platforms delivering unprecedented automation and intelligence.',
  keywords: [
    'AxonPulse',
    'AxientOS',
    'enterprise platforms',
    'real-time orchestration',
    'AI business systems',
    'enterprise automation',
    'intelligent workflows',
    'business system generator',
    'enterprise software platforms',
    'AI-powered solutions',
    'automation platforms',
    'enterprise technology'
  ],
  openGraph: {
    title: 'Enterprise Platforms - AxonPulse & AxientOS | AxonStream Technologies',
    description: 'Revolutionary enterprise platforms: AxonPulse for real-time orchestration and AxientOS for AI-powered business system generation.',
    url: 'https://axonstream.ai/products',
    images: [
      {
        url: '/og-products.jpg',
        width: 1200,
        height: 630,
        alt: 'AxonStream Enterprise Platforms - AxonPulse & AxientOS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Platforms - AxonPulse & AxientOS',
    description: 'Revolutionary enterprise platforms delivering unprecedented automation and AI-powered intelligence.',
    images: ['/twitter-products.jpg'],
  },
  alternates: {
    canonical: 'https://axonstream.ai/products',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
