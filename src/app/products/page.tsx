'use client';

import * as React from 'react';
import Header from '@/components/layout/Header';
import ModernPageHero from '@/components/layout/ModernPageHero';
import ProductsOverview from '@/components/sections/ProductsOverview';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import {
  Zap,
  Brain,
  Cpu,
  TrendingUp,
  Shield,
  BarChart3,
  Award,
} from 'lucide-react';

export default function ProductsPage() {
  const heroStats = [
    { number: '700+', label: 'Deployments', icon: TrendingUp },
    { number: '99.99%', label: 'Uptime', icon: Shield },
    { number: '10x', label: 'Performance', icon: BarChart3 },
    { number: '90%', label: 'Cost Savings', icon: Award },
  ];

  return (
    <main className="relative">
      <Header />
      
      <ModernPageHero
        badge={{ icon: Cpu, text: 'Proprietary Platform Suite' }}
        title="Revolutionary"
        highlight="Enterprise Platforms"
        subtitle="AI-Powered Business Transformation"
        description="Discover AxonPulse and AxientOS - our proprietary platforms that represent the cutting edge of enterprise technology, delivering unprecedented automation and AI-powered intelligence."
        stats={heroStats}
        gradient="bg-gradient-to-br from-brand-900 via-brand-800 to-accent/90"
        backgroundPattern="waves"
      />

      <ProductsOverview />

      <Contact />
      <Footer />
    </main>
  );
}