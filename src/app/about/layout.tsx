import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Enterprise Technology Leadership & Innovation',
  description: 'Learn about AxonStream Technologies - founded in 2018, serving 500+ enterprise clients across 25+ countries. Meet our leadership team and discover our mission to transform enterprises worldwide.',
  keywords: [
    'about AxonStream Technologies',
    'company history',
    'leadership team',
    'enterprise technology company',
    'technology innovation',
    'global presence',
    'company mission',
    'technology leaders',
    'enterprise transformation',
    'company values',
    'technology expertise',
    'global offices'
  ],
  openGraph: {
    title: 'About Us - Enterprise Technology Leadership | AxonStream Technologies',
    description: 'Founded in 2018, AxonStream Technologies serves 500+ enterprise clients across 25+ countries with innovative technology solutions.',
    url: 'https://axonstream.ai/about',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'AxonStream Technologies - About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About AxonStream Technologies',
    description: 'Enterprise technology leadership serving 500+ clients across 25+ countries worldwide.',
    images: ['/twitter-about.jpg'],
  },
  alternates: {
    canonical: 'https://axonstream.ai/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
