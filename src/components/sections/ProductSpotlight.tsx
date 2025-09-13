'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Brain,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  BarChart3,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { designSystem, getSectionHeaderClasses } from '@/lib/design-system';

const ProductSpotlight: React.FC = () => {
  const products = [
    {
      name: 'AxonPulse',
      tagline: 'Real-Time Orchestration',
      description: 'Enterprise orchestration platform for complex business workflows with real-time monitoring and analytics.',
      icon: Zap,
      metrics: [
        { label: 'Uptime', value: '99.9%' },
        { label: 'Response', value: '<10ms' },
        { label: 'Scale', value: '1M+ ops/sec' },
      ],
      gradient: 'from-[#092031] via-[#074681] to-[#1976d1]',
      accentColor: '#1976d1',
    },
    {
      name: 'AxientOS',
      tagline: 'AI Business Generator',
      description: 'Intelligent platform that automatically generates and optimizes enterprise business systems using advanced AI.',
      icon: Brain,
      metrics: [
        { label: 'Automation', value: '95%' },
        { label: 'Generation', value: '10x faster' },
        { label: 'Intelligence', value: 'Neural AI' },
      ],
      gradient: 'from-[#f84000] via-[#ff6b35] to-[#ff8c42]',
      accentColor: '#f84000',
    },
  ];

  return (
    <section id="platforms" className="py-20 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(25,118,209,0.02)_50%,transparent_75%)] bg-[size:60px_60px]" />
        
      <div className={`${designSystem.spacing.container} relative`}>
       {/* Professional Header */}
       <motion.div
          className={getSectionHeaderClasses()}
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow }}
          viewport={{ once: true }}
        >
          <div className={designSystem.elements.sectionBadge}>
            <BarChart3 className={designSystem.elements.sectionBadgeIcon} />
            <span className={designSystem.elements.sectionBadgeText}>
              Flagship Enterprise Platforms
            </span>
          </div>

          <h2 className={`${designSystem.typography.sectionTitle} mb-4`}>
            Next-Generation Intelligence
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent">
              {' '}Platforms
            </span>
          </h2>
          <div className={`${designSystem.elements.sectionDivider} mb-6`} />
          <p className={`${designSystem.typography.sectionSubtitle} max-w-4xl mx-auto leading-relaxed font-medium`}>
            Proprietary platforms delivering unprecedented automation and intelligence to enterprise operations.
            creating sustainable value and competitive advantages.
          </p>
        </motion.div>
        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Modern Product Container */}
                <div className={`relative ${designSystem.elements.modernCard} ${designSystem.elements.floatingElement} ${designSystem.elements.modernShadow} p-8 overflow-hidden`}>
                  
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${product.gradient} opacity-5 rounded-bl-[4rem] transition-opacity group-hover:opacity-10`} />
                  
                  {/* Header */}
                  <div className="relative mb-6">
                    <div className={`${designSystem.elements.iconContainer} bg-gradient-to-br ${product.gradient} mb-4 shadow-lg`}>
                      <IconComponent className={designSystem.elements.iconSize} />
                    </div>
                    
                    <h3 className={`${designSystem.typography.cardTitle} mb-2`}>
                      {product.name}
                    </h3>
                    <p className="font-semibold mb-3" style={{ color: product.accentColor }}>
                      {product.tagline}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {product.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`${designSystem.typography.cardTitle} mb-1`}>
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button
                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group-hover:shadow-md`}
                    style={{ 
                      backgroundColor: `${product.accentColor}10`, 
                      color: product.accentColor 
                    }}
                  >
                    Explore Platform
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  {/* Status Indicator */}
                  <div className="absolute top-6 right-6">
                    <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-xs font-medium">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      Live
                    </div>
                  </div>
                </div>

                {/* Floating Enhancement */}
                <motion.div
                  className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${product.gradient} rounded-lg opacity-20`}
                  animate={{ rotate: [0, 90, 180, 270, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-brand-900 to-brand-700 rounded-2xl p-8 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.02)_50%,transparent_70%)] bg-[size:40px_40px]" />
          
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="h-4 w-4" />
              Ready to Transform
            </div>
            
            <h3 className="text-xl font-semibold mb-3">
              Experience Next-Generation Enterprise Platforms
            </h3>
            
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Schedule a personalized demo and discover how our platforms revolutionize enterprise operations.
            </p>
            
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-brand-900 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Shield className="mr-2 h-5 w-5" />
              Request Demo Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSpotlight;
