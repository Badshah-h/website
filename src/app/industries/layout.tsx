import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry Solutions - Healthcare, Finance, Retail & Manufacturing',
  description: 'Tailored enterprise technology solutions for healthcare, financial services, retail & e-commerce, and manufacturing industries. Industry-specific solutions that address unique challenges and drive results.',
  keywords: [
    'healthcare IT solutions',
    'financial services technology',
    'retail technology solutions',
    'manufacturing automation',
    'industry-specific solutions',
    'healthcare compliance',
    'HIPAA compliant systems',
    'financial compliance',
    'retail omnichannel',
    'smart manufacturing',
    'industrial IoT',
    'sector solutions'
  ],
  openGraph: {
    title: 'Industry Solutions - Healthcare, Finance, Retail & Manufacturing | AxonStream Technologies',
    description: 'Industry-specific enterprise technology solutions tailored for healthcare, finance, retail, and manufacturing sectors.',
    url: 'https://axonstream.ai/industries',
    images: [
      {
        url: '/og-industries.jpg',
        width: 1200,
        height: 630,
        alt: 'AxonStream Industry Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industry Solutions - AxonStream Technologies',
    description: 'Tailored enterprise solutions for healthcare, finance, retail, and manufacturing industries.',
    images: ['/twitter-industries.jpg'],
  },
  alternates: {
    canonical: 'https://axonstream.ai/industries',
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
