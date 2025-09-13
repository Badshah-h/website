import * as React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Contact Us - AxonStream Technologies',
  description: 'Get in touch with AxonStream Technologies for enterprise IT solutions. Contact our experts for consultation, demo requests, and custom quotes.',
};

export default function ContactPage() {
  return (
    <main className="relative">
      <Header />
      <Contact />
      <Footer />
    </main>
  );
}
