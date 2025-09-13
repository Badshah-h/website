import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get Started with Enterprise Solutions',
  description: 'Contact AxonStream Technologies for enterprise IT solutions consultation. Schedule a demo, request information, or speak with our experts about transforming your business operations.',
  keywords: [
    'contact AxonStream Technologies',
    'enterprise consultation',
    'schedule demo',
    'contact sales',
    'enterprise solutions inquiry',
    'technology consultation',
    'business transformation',
    'get started',
    'request demo',
    'contact form',
    'enterprise support',
    'sales inquiry'
  ],
  openGraph: {
    title: 'Contact Us - Get Started with Enterprise Solutions | AxonStream Technologies',
    description: 'Ready to transform your enterprise operations? Contact our experts for consultation and discover how we can help.',
    url: 'https://axonstream.ai/contact',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact AxonStream Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact AxonStream Technologies',
    description: 'Get started with enterprise technology solutions. Contact our experts today.',
    images: ['/twitter-contact.jpg'],
  },
  alternates: {
    canonical: 'https://axonstream.ai/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
