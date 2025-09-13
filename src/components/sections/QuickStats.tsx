'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { designSystem, getSectionHeaderClasses, getGridClasses } from '@/lib/design-system';
import {
  TrendingUp,
  Users,
  Award,
  Globe,
  Shield,
  Zap,
  Building2,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  BarChart3,
  Target,
  ShieldCheck,
  Search,
  Sparkles,
} from 'lucide-react';
import { Button } from '../ui/button';

const QuickStats: React.FC = () => {
  const achievements = [
    {
      icon: Building2,
      metric: '500+',
      label: 'Enterprise Clients',
      description: 'Fortune 500 and growing enterprises trust our solutions',
      color: 'from-brand-500 to-brand-700',
      highlight: 'Global Leaders',
      accent: '#1976d2',
    },
    {
      icon: TrendingUp,
      metric: '$500M+',
      label: 'Value Generated',
      description: 'Measurable ROI and cost savings delivered to clients',
      color: 'from-green-500 to-green-700',
      highlight: 'Proven Impact',
      accent: '#22c55e',
    },
    {
      icon: Globe,
      metric: '25+',
      label: 'Countries Served',
      description: 'Worldwide enterprise technology transformation',
      color: 'from-blue-500 to-blue-700',
      highlight: 'Global Reach',
      accent: '#3b82f6',
    },
    {
      icon: Award,
      metric: '99.9%',
      label: 'Client Satisfaction',
      description: 'Industry-leading client retention and satisfaction rates',
      color: 'from-accent to-orange-600',
      highlight: 'Excellence Standard',
      accent: '#f84000',
    },
  ];

  const capabilities = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols and compliance across all solutions',
      benefits: ['Zero-trust architecture', 'SOC 2 compliance', '24/7 monitoring'],
      gradient: 'from-blue-600 to-blue-800',
      accent: '#2563eb',
    },
    {
      icon: Zap,
      title: 'Performance Excellence',
      description: 'Industry-leading performance metrics with guaranteed SLAs',
      benefits: ['99.99% uptime', '10x performance boost', 'Real-time processing'],
      gradient: 'from-accent to-orange-600',
      accent: '#f84000',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers and consultants with decades of experience',
      benefits: ['Certified professionals', 'Industry expertise', 'Continuous support'],
      gradient: 'from-purple-600 to-purple-800',
      accent: '#7c3aed',
    },
    {
      icon: Target,
      title: 'Proven Methodology',
      description: 'Time-tested implementation processes ensuring project success',
      benefits: ['Agile delivery', 'Risk mitigation', 'Quality assurance'],
      gradient: 'from-brand-500 to-brand-700',
      accent: '#1976d2',
    },
  ];

  return (
    <section id="quick-stats" className={`${designSystem.spacing.sectionLarge} relative overflow-hidden`}>
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-brand-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(25,118,210,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(248,64,0,0.03),transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-500/20 to-accent/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-accent/15 to-brand-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className={`${designSystem.spacing.container} relative`}>
        {/* Modern Header */}
        <motion.div
          className={getSectionHeaderClasses()}
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow }}
          viewport={{ once: true }}
        >
          <div className={`${designSystem.elements.sectionBadge} ${designSystem.elements.glassMorphism}`}>
            <BarChart3 className={designSystem.elements.sectionBadgeIcon} />
            <span className={designSystem.elements.sectionBadgeText}>
              Performance Metrics
            </span>
          </div>

          <h2 className={`${designSystem.typography.sectionTitle} mb-4`}>
            Measurable
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent">
              {' '}Business Impact
            </span>
          </h2>
          <div className={`${designSystem.elements.sectionDivider} mb-6`} />
          <p className={`${designSystem.typography.sectionSubtitle} max-w-4xl mx-auto leading-relaxed font-medium`}>
            Our success is measured by the transformational results we deliver for enterprise clients worldwide, 
            creating sustainable value and competitive advantages.
          </p>
        </motion.div>

        {/* Modern Stats Grid - No Traditional Cards */}
        <div className="relative mb-32">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-500/5 to-transparent rounded-[4rem] blur-3xl" />
          
          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              
              return (
                <motion.div
                  key={achievement.label}
                  className="group relative"
                  initial={designSystem.animations.fadeInUp.hidden}
                  whileInView={designSystem.animations.fadeInUp.visible}
                  transition={{ 
                    duration: designSystem.animations.duration.slow, 
                    delay: index * 0.15 
                  }}
                  viewport={{ once: true }}
                >
                  {/* Modern Floating Design */}
                  <div className={`relative ${designSystem.elements.floatingElement} cursor-pointer`}>
                    {/* Glassmorphism Background */}
                    <div className={`${designSystem.elements.glassMorphism} rounded-3xl p-8 ${designSystem.elements.modernShadow}`}>
                      {/* Gradient Border Effect */}
                      <div 
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                        style={{
                          background: `linear-gradient(135deg, ${achievement.accent}20, transparent, ${achievement.accent}10)`
                        }}
                      />
                      
                      {/* Floating Icon */}
                      <div className="relative mb-6">
                        <div 
                          className={`${designSystem.elements.iconContainer} relative mx-auto transition-all duration-500 group-hover:scale-110`}
                          style={{
                            background: `linear-gradient(135deg, ${achievement.accent}, ${achievement.accent}cc)`
                          }}
                        >
                          <IconComponent className={designSystem.elements.iconSize} />
                          
                          {/* Icon Glow */}
                          <div 
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-lg"
                            style={{
                              background: `linear-gradient(135deg, ${achievement.accent}, ${achievement.accent}80)`
                            }}
                          />
                        </div>
                        
                        {/* Floating Badge */}
                        <div className="absolute -top-3 -right-3">
                          <div className={`${designSystem.elements.glassMorphism} px-3 py-1 rounded-full transform transition-all duration-500 group-hover:scale-110`}>
                            <span className="text-xs font-bold text-brand-700">{achievement.highlight}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center space-y-3">
                        <div className={`${designSystem.typography.sectionTitle} text-3xl bg-gradient-to-br from-brand-900 to-brand-700 bg-clip-text text-transparent`}>
                          {achievement.metric}
                        </div>
                        
                        <h4 className={`${designSystem.typography.cardTitle} group-hover:text-brand-700 transition-colors duration-300`}>
                          {achievement.label}
                        </h4>
                        
                        <p className={`${designSystem.typography.cardDescription} text-sm leading-relaxed`}>
                          {achievement.description}
                        </p>
                      </div>

                      {/* Interactive Element */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${achievement.accent}20` }}
                        >
                          <Sparkles className="h-4 w-4" style={{ color: achievement.accent }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Modern Capabilities Section */}
        <motion.div
          className="mb-24"
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className={getSectionHeaderClasses()}>
            <div className={`${designSystem.elements.sectionBadge} ${designSystem.elements.glassMorphism}`}>
              <ShieldCheck className={designSystem.elements.sectionBadgeIcon} />
              <span className={designSystem.elements.sectionBadgeText}>
                Core Enterprise Capabilities
              </span>
            </div>
            
            <h2 className={`${designSystem.typography.sectionTitle} mb-4`}>
              Enterprise 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent">
                {' '}Capabilities
              </span>
            </h2>
            <div className={`${designSystem.elements.sectionDivider} mb-6`} />
          </div>
          
          {/* Modern Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              
              return (
                <motion.div
                  key={capability.title}
                  className="group relative"
                  initial={designSystem.animations.fadeInUp.hidden}
                  whileInView={designSystem.animations.fadeInUp.visible}
                  transition={{ 
                    duration: designSystem.animations.duration.slow, 
                    delay: index * 0.1 
                  }}
                  viewport={{ once: true }}
                >
                  {/* Modern Floating Panel */}
                  <div className={`relative ${designSystem.elements.floatingElement}`}>
                    <div className={`${designSystem.elements.glassMorphism} rounded-3xl p-10 ${designSystem.elements.modernShadow}`}>
                      {/* Gradient Accent */}
                      <div 
                        className="absolute top-0 left-0 w-full h-1 rounded-t-3xl"
                        style={{ background: `linear-gradient(90deg, ${capability.accent}, ${capability.accent}80, transparent)` }}
                      />
                      
                      {/* Header */}
                      <div className="flex items-start space-x-6 mb-8">
                        <div 
                          className={`${designSystem.elements.iconContainerLarge} flex-shrink-0 transition-all duration-500 group-hover:scale-110`}
                          style={{ background: `linear-gradient(135deg, ${capability.accent}, ${capability.accent}cc)` }}
                        >
                          <IconComponent className={designSystem.elements.iconSizeLarge} />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className={`${designSystem.typography.cardTitle} text-xl group-hover:text-brand-700 transition-colors duration-300 mb-3`}>
                            {capability.title}
                          </h4>
                          <p className={`${designSystem.typography.cardDescription} leading-relaxed`}>
                            {capability.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Benefits - Modern List */}
                      <div className="space-y-4">
                        <h5 className="text-xs font-bold text-brand-900 uppercase tracking-wider flex items-center mb-4">
                          <CheckCircle className="h-4 w-4 text-brand-500 mr-2" />
                          Key Advantages
                        </h5>
                        
                        <div className="grid gap-3">
                          {capability.benefits.map((benefit, idx) => (
                            <motion.div 
                              key={benefit} 
                              className="flex items-center group/item"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + idx * 0.05 }}
                            >
                              <div 
                                className="w-2 h-2 rounded-full mr-4 flex-shrink-0 transition-all duration-300 group-hover/item:scale-125"
                                style={{ backgroundColor: capability.accent }}
                              />
                              <span className={`${designSystem.typography.cardDescription} font-medium`}>
                                {benefit}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Hover Accent */}
                      <div 
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-all duration-700 pointer-events-none"
                        style={{ background: `linear-gradient(135deg, ${capability.accent}, transparent)` }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Modern CTA Section */}
        <motion.div
          className="relative overflow-hidden"
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Modern Glassmorphism CTA */}
          <div className={`${designSystem.elements.gradientBorder} ${designSystem.elements.modernShadow}`}>
            <div className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 rounded-3xl overflow-hidden">
              {/* Modern Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.02)_50%,transparent_70%)] bg-[size:60px_60px]" />
              
              <div className="relative px-12 py-20 text-center">
                <div className="max-w-4xl mx-auto">
                  {/* Modern Badge */}
                  <motion.div 
                    className={`inline-flex items-center gap-3 ${designSystem.elements.glassMorphism} px-6 py-3 rounded-full text-sm font-bold mb-8 text-white`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span>Ready to Transform Your Enterprise</span>
                    <Sparkles className="h-4 w-4 animate-pulse" />
                  </motion.div>
                  
                  <h2 className={`${designSystem.typography.sectionTitle} text-4xl font-bold text-white mb-6 leading-tight`}>
                    Start Your
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent">
                      {' '}Transformation Journey
                    </span>
                  </h2>
                  
                  <div className="w-24 h-1 bg-gradient-to-r from-white to-white/40 rounded-full mx-auto mb-8" />
                  
                  <p className={`${designSystem.typography.sectionSubtitle} text-xl text-brand-100 mb-12 max-w-3xl mx-auto leading-relaxed font-medium`}>
                    Schedule a consultation to assess your current systems and design 
                    a comprehensive transformation roadmap tailored to your business needs.
                  </p>
                  
                  {/* Modern Button Group */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={() => {
                          const element = document.querySelector('#contact');
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`${designSystem.elements.glassMorphism} bg-white/20 text-white hover:bg-white/30 font-bold px-12 py-6 rounded-2xl transition-all duration-300 flex items-center group border-2 border-white/30 hover:border-white/50`}
                        variant="secondary"
                        size="lg"
                      >
                        <Search className="mr-3 h-5 w-5" />
                        <span className="text-lg font-bold">Start Assessment</span>
                        <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={() => {
                          const element = document.querySelector('#case-studies');
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`${designSystem.elements.glassMorphism} text-white border-2 border-white/20 hover:border-white/40 font-bold px-12 py-6 rounded-2xl transition-all duration-300 flex items-center group`}
                        variant="outline"
                        size="lg"
                      >
                        <span className="text-lg font-bold">View Success Stories</span>
                        <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickStats;