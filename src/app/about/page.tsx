'use client';

import * as React from 'react';
import Header from '@/components/layout/Header';
import ModernPageHero from '@/components/layout/ModernPageHero';
import CompanyMission from '@/components/sections/CompanyMission';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import {
  Building,
  Users,
  Award,
  Globe,
  Target,
  Eye,
  Heart,
  Shield,
  Calendar,
} from 'lucide-react';

// Modern About page with consistent structure

export default function AboutPage() {
  const heroStats = [
    { number: '2018', label: 'Founded', icon: Calendar },
    { number: '500+', label: 'Enterprise Clients', icon: Users },
    { number: '25+', label: 'Countries', icon: Globe },
    { number: '99.9%', label: 'Success Rate', icon: Award },
  ];

  return (
    <main className="relative">
      <Header />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(25,118,210,0.03),transparent)] pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-brand-100/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl" />
      </div>

     
      <ModernPageHero
        badge={{ icon: Building, text: 'About AxonStream Technologies' }}
        title="Transforming Enterprises"
        highlight="Worldwide"
        subtitle="Global Technology Leadership Since 2018"
        description="Since 2018, AxonStream Technologies has been at the forefront of enterprise technology transformation, delivering innovative solutions that empower organizations to achieve unprecedented success."
        stats={heroStats}
        gradient="bg-gradient-to-br from-indigo-900 via-brand-900 to-purple-900"
        backgroundPattern="waves"
      />

     
      <CompanyMission />
      

      <Contact />
      <Footer />
    </main>
  );
}
