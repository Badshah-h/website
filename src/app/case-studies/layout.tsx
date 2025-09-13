import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Success Stories - Enterprise Transformation Case Studies',
  description: 'Discover how leading organizations worldwide have transformed their operations with AxonStream Technologies. Real client success stories with measurable results and ROI.',
  keywords: [
    'case studies',
    'success stories',
    'client testimonials',
    'enterprise transformation',
    'ROI case studies',
    'implementation success',
    'client results',
    'transformation stories',
    'business outcomes',
    'enterprise solutions results',
    'technology implementation',
    'digital transformation success'
  ],
  openGraph: {
    title: 'Success Stories - Enterprise Transformation Case Studies | AxonStream Technologies',
    description: 'Real client success stories showcasing measurable business transformation results across global enterprises.',
    url: 'https://axonstream.ai/case-studies',
    images: [
      {
        url: '/og-case-studies.jpg',
        width: 1200,
        height: 630,
        alt: 'AxonStream Client Success Stories',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Success Stories - AxonStream Technologies',
    description: 'Real client success stories showcasing measurable business transformation results.',
    images: ['/twitter-case-studies.jpg'],
  },
  alternates: {
    canonical: 'https://axonstream.ai/case-studies',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
