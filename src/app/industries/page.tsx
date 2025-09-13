'use client';

import * as React from 'react';
import Header from '@/components/layout/Header';
import ModernPageHero from '@/components/layout/ModernPageHero';
import Industries from '@/components/sections/Industries';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import {
  Heart,
  Banknote,
  ShoppingCart,
  Factory,
  Building2,
  TrendingUp,
  Award,
  Users,
} from 'lucide-react';

export default function IndustriesPage() {
  const heroStats = [
    { number: '15+', label: 'Industries Served', icon: Building2 },
    { number: '500+', label: 'Successful Projects', icon: TrendingUp },
    { number: '99.9%', label: 'Implementation Success', icon: Award },
    { number: '25+', label: 'Countries', icon: Users },
  ];

  return (
    <main className="relative">
      <Header />
      
      <ModernPageHero
        badge={{ icon: Factory, text: 'Industry Solutions' }}
        title="Tailored Solutions for"
        highlight="Every Industry"
        subtitle="Industry-Specific Technology Excellence"
        description="From healthcare to finance, retail to manufacturing, we deliver industry-specific technology solutions that address unique challenges and drive transformational results."
        stats={heroStats}
        gradient="bg-gradient-to-br from-purple-900 via-brand-900 to-blue-900"
        backgroundPattern="dots"
      />

      <Industries />

      <Contact />
      <Footer />
    </main>
  );
}