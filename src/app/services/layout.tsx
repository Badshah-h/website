import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise IT Services - Complete Technology Solutions',
  description: 'Comprehensive enterprise IT services including platform licensing, custom software development, hardware procurement, network & CCTV implementation, systems integration, and AI automation. Trusted by 500+ global enterprises.',
  keywords: [
    'enterprise IT services',
    'platform licensing',
    'Microsoft licensing',
    'Oracle licensing',
    'SAP integration',
    'custom software development',
    'hardware procurement',
    'network implementation',
    'CCTV systems',
    'systems integration',
    'AI automation',
    'managed services',
    'enterprise solutions'
  ],
  openGraph: {
    title: 'Enterprise IT Services - AxonStream Technologies',
    description: 'Complete enterprise technology solutions trusted by Fortune 500 companies worldwide. Platform licensing, custom development, and managed AI services.',
    url: 'https://axonstream.ai/services',
    images: [
      {
        url: '/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'AxonStream Enterprise IT Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise IT Services - AxonStream Technologies',
    description: 'Complete enterprise technology solutions trusted by Fortune 500 companies worldwide.',
    images: ['/twitter-services.jpg'],
  },
  alternates: {
    canonical: 'https://axonstream.ai/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
