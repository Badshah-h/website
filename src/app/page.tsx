import * as React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import ServicesPreview from '@/components/sections/ServicesPreview';
import QuickStats from '@/components/sections/QuickStats';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import HowItWorks from '@/components/sections/HowItWorks';
import ProductSpotlight from '@/components/sections/ProductSpotlight';
import FAQ from '@/components/sections/FAQ';

export const metadata: Metadata = {
  title: 'AxonStream Technologies - Complete Enterprise IT: Software, Platforms, Hardware & Managed AI',
  description: 'We deliver end-to-end enterprise solutions — platform licensing, custom SaaS, hardware procurement, network & CCTV integration, and managed AI automation & DevOps.',
};

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
        <ServicesPreview />
        <ProductSpotlight />
      <HowItWorks />
      <QuickStats />
      <FAQ  />
      <Contact />
      <Footer />
    </main>
  );
}
