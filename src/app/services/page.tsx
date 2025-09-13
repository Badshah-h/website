'use client';

import * as React from 'react';
import Header from '@/components/layout/Header';
import ModernPageHero from '@/components/layout/ModernPageHero';
import Services from '@/components/sections/Services';
import HowItWorks from '@/components/sections/HowItWorks';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import {
  Shield,
  Users,
  Award,
  CheckCircle,
} from 'lucide-react';

export default function ServicesPage() {
  const heroStats = [
    { number: '500+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Success Rate', icon: Award },
    { number: '24/7', label: 'Global Support', icon: Shield },
    { number: '25+', label: 'Countries Served', icon: CheckCircle },
  ];

  return (
    <main className="relative">
      <Header />
      
      <ModernPageHero
        badge={{ icon: Shield, text: 'Enterprise IT Services' }}
        title="Complete Technology"
        highlight="Solutions"
        subtitle="Transforming Enterprise Operations"
        description="From platform licensing to AI automation, we deliver integrated enterprise IT services that transform operations, enhance efficiency, and drive sustainable competitive advantages."
        stats={heroStats}
        gradient="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700"
        backgroundPattern="mesh"
      />

      <Services />
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  );
}