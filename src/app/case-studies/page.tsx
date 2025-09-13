'use client';

import * as React from 'react';
import Header from '@/components/layout/Header';
import ModernPageHero from '@/components/layout/ModernPageHero';
import CaseStudies from '@/components/sections/CaseStudies';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import {
  FileText,
  TrendingUp,
  Award,
  Users,
  DollarSign,
  Heart,
  Banknote,
  ShoppingCart,
  Factory,
} from 'lucide-react';

export default function CaseStudiesPage() {
  const heroStats = [
    { number: '500+', label: 'Success Stories', icon: FileText },
    { number: '$500M+', label: 'Value Generated', icon: DollarSign },
    { number: '99.9%', label: 'Success Rate', icon: Award },
    { number: '25+', label: 'Industries', icon: Users },
  ];

  return (
    <main className="relative">
      <Header />
      
      <ModernPageHero
        badge={{ icon: FileText, text: 'Client Success Stories' }}
        title="Proven Results Across"
        highlight="Global Enterprises"
        subtitle="Transformational Business Impact"
        description="Discover how leading organizations worldwide have transformed their operations, achieved measurable results, and gained competitive advantages through our solutions."
        stats={heroStats}
        gradient="bg-gradient-to-br from-emerald-900 via-brand-900 to-teal-900"
        backgroundPattern="mesh"
      />

      <CaseStudies />

      <Contact />
      <Footer />
    </main>
  );
}