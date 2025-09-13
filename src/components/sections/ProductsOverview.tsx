'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { designSystem, getSectionHeaderClasses, getGridClasses } from '@/lib/design-system';
import {
  Zap,
  Brain,
  ArrowRight,
  ExternalLink,
  BarChart3,
  Layers,
  Cpu,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';

const ProductsOverview: React.FC = () => {
  const products = [
    {
      name: 'AxonPulse',
      tagline: 'Real-time Enterprise Orchestration Platform',
      description: 'Revolutionary real-time orchestration platform that unifies enterprise operations through intelligent automation, seamless integrations, and predictive analytics for unprecedented operational efficiency.',
      shortDescription: 'Real-time orchestration & enterprise automation',
      icon: Zap,
      gradient: 'from-brand-500 to-brand-700',
      href: '/products/axonpulse',
      features: [
        'Real-time Data Processing',
        'Intelligent Workflow Automation', 
        'Predictive Analytics Engine',
        'Enterprise Integration Hub',
        'Advanced Monitoring Dashboard'
      ],
      benefits: [
        '90% Faster Operations',
        '60% Cost Reduction',
        '99.9% Uptime Guarantee'
      ],
      industries: ['Finance', 'Healthcare', 'Manufacturing', 'Retail'],
      stats: {
        performance: '10x Performance Boost',
        clients: '500+ Enterprise Clients',
        uptime: '99.99% Uptime'
      }
    },
    {
      name: 'AxientOS',
      tagline: 'AI Business System Generator',
      description: 'Next-generation AI-powered business system generator that creates, deploys, and optimizes custom enterprise solutions through advanced machine learning and autonomous development capabilities.',
      shortDescription: 'AI-powered business system generation',
      icon: Brain,
      gradient: 'from-accent to-orange-600',
      href: '/products/axientos',
      features: [
        'AI-Powered System Generation',
        'Autonomous Code Development',
        'Intelligent Business Logic',
        'Self-Optimizing Architecture',
        'Natural Language Interface'
      ],
      benefits: [
        '80% Faster Development',
        'Zero-Code Solutions',
        'Self-Learning Systems'
      ],
      industries: ['Technology', 'Finance', 'Healthcare', 'E-commerce'],
      stats: {
        performance: '5x Development Speed',
        clients: '200+ Systems Generated',
        uptime: 'AI-Driven Optimization'
      }
    },
  ];

  return (
    <section id="products-overview" className={`${designSystem.spacing.sectionLarge} relative overflow-hidden`}>
      {/* Modern Background with Dynamic Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-brand-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(25,118,210,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(248,64,0,0.03),transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-brand-500/20 to-accent/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-accent/15 to-brand-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className={`${designSystem.spacing.container} relative`}>
        {/* Modern Header Section */}
        <motion.div
          className={getSectionHeaderClasses()}
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow }}
          viewport={{ once: true }}
        >
          <div className={`${designSystem.elements.sectionBadge} ${designSystem.elements.glassMorphism}`}>
            <Brain className={designSystem.elements.sectionBadgeIcon} />
            <span className={designSystem.elements.sectionBadgeText}>
              Proprietary Platform Suite
            </span>
          </div>
          
          <h2 className={`${designSystem.typography.sectionTitle} mb-4`}>
            Revolutionary
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-brand-500">
              {' '}Enterprise Platforms
            </span>
          </h2>
          <div className={`${designSystem.elements.sectionDivider} mb-6`} />
          <p className={`${designSystem.typography.sectionSubtitle} max-w-4xl mx-auto leading-relaxed font-medium`}>
            Our proprietary platforms represent the cutting edge of enterprise technology, 
            delivering unprecedented automation and intelligence powered by advanced AI and real-time processing.
          </p>
        </motion.div>

        {/* Modern Products Display */}
        <div className="space-y-20 mb-32">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={product.name}
                className={`relative ${designSystem.elements.modernCard} ${designSystem.elements.floatingElement} ${designSystem.elements.modernShadow} transition-all duration-700 overflow-hidden group`}
                initial={designSystem.animations.fadeInUp.hidden}
                whileInView={designSystem.animations.fadeInUp.visible}
                transition={{ 
                  duration: designSystem.animations.duration.slow, 
                  delay: index * 0.3 
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01, y: -12 }}
              >
                {/* Premium Gradient Effects */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`} />
                
                <div className={`grid lg:grid-cols-5 gap-0 min-h-[480px] ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content Side - 60% */}
                  <div className={`lg:col-span-3 p-16 flex flex-col justify-center ${!isEven ? 'lg:col-start-3' : ''}`}>
                    <div className="space-y-8">
                      {/* Premium Header */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-6">
                          <div className={`${designSystem.elements.iconContainerLarge} bg-gradient-to-br ${product.gradient} shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-700`}>
                            <IconComponent className={designSystem.elements.iconSizeLarge} />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className={`${designSystem.typography.cardTitle} mb-3 group-hover:text-brand-700 transition-colors duration-300`}>
                              {product.name}
                            </h3>
                            <p className="text-xl text-brand-600 font-bold">
                              {product.tagline}
                            </p>
                          </div>
                        </div>

                        {/* Modern Stats Grid */}
                        <div className="grid grid-cols-3 gap-6">
                          {Object.entries(product.stats).map(([key, value]) => (
                            <motion.div 
                              key={key} 
                              className="text-center group/stat"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className={`${designSystem.elements.glassMorphism} rounded-2xl p-4 transition-all duration-300 group-hover/stat:bg-white/20`}>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                                  {key}
                                </div>
                                <div className="text-lg font-bold text-brand-900 group-hover/stat:text-brand-700 transition-colors duration-300">
                                  {value}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Professional Description */}
                      <p className="text-lg text-gray-700 leading-relaxed font-medium">
                        {product.description}
                      </p>

                      {/* Modern Features Grid */}
                      <div className="space-y-6">
                        <h4 className="text-sm font-bold text-brand-900 uppercase tracking-wide flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-accent" />
                          Core Capabilities
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {product.features.map((feature, idx) => (
                            <motion.div 
                              key={feature} 
                              className="flex items-center group/feature"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + idx * 0.05 }}
                            >
                              <div 
                                className={`w-2 h-2 rounded-full mr-4 flex-shrink-0 transition-all duration-300 group-hover/feature:scale-125`}
                                style={{
                                  background: `linear-gradient(135deg, ${product.gradient.includes('brand') ? '#1976d2' : '#f84000'}, ${product.gradient.includes('brand') ? '#1976d2' : '#f84000'}80)`
                                }}
                              />
                              <span className="text-gray-700 font-medium text-sm group-hover/feature:text-brand-700 transition-colors duration-300">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Modern Benefits */}
                      <div className="space-y-6">
                        <h4 className="text-sm font-bold text-brand-900 uppercase tracking-wide flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
                          Business Impact
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {product.benefits.map((benefit) => (
                            <motion.div 
                              key={benefit}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${product.gradient} text-white rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300`}
                            >
                              {benefit}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Modern CTA */}
                      <div className="pt-6">
                        <Link href={product.href}>
                          <motion.button 
                            className="inline-flex items-center text-brand-500 font-bold hover:text-brand-600 transition-colors duration-200 group/link text-lg"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span>Explore {product.name}</span>
                            <ArrowRight className="ml-4 h-6 w-6 transition-transform group-hover/link:translate-x-2" />
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Visual Side - 40% */}
                  <div className={`lg:col-span-2 relative bg-gradient-to-br ${product.gradient} ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    {/* Modern Background Pattern */}
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-1/4 -right-12 w-40 h-40 bg-white rounded-full animate-pulse" />
                      <div className="absolute bottom-1/4 -left-12 w-32 h-32 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
                    </div>
                    
                    {/* Modern Content */}
                    <div className="relative h-full flex items-center justify-center p-12">
                      <div className="text-center text-white space-y-8">
                        {/* Floating Icon */}
                        <motion.div 
                          className={`${designSystem.elements.iconContainerLarge} bg-white/20 backdrop-blur-sm mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-all duration-500`}
                          whileHover={{ rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Cpu className={designSystem.elements.iconSizeLarge} />
                        </motion.div>
                        
                        <div className="space-y-6">
                          <p className="text-white text-lg font-bold">Enterprise Platform</p>
                          <div className="space-y-3">
                            {product.industries.slice(0, 2).map((industry, idx) => (
                              <motion.div 
                                key={industry} 
                                className="inline-block mx-1 px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + idx * 0.1 }}
                              >
                                {industry}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        <motion.div 
                          className="pt-4"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ExternalLink className="h-8 w-8 text-white/80 mx-auto" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Professional Call to Action */}
        <motion.div
          className="text-center"
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow, delay: designSystem.animations.staggerDelay(0.3) }}
          viewport={{ once: true }}
        >
          <div className={`${designSystem.elements.gradientBorder} ${designSystem.elements.modernShadow}`}>
            <div className="bg-gradient-to-br from-gray-900 via-brand-900 to-accent/90 rounded-3xl overflow-hidden">
              {/* Modern Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.02)_50%,transparent_70%)] bg-[size:60px_60px]" />
              
              <div className="relative px-16 py-20">
                <div className="max-w-4xl mx-auto text-center">
                  {/* Modern Badge */}
                  <motion.div 
                    className={`inline-flex items-center gap-3 ${designSystem.elements.glassMorphism} px-6 py-3 rounded-full text-sm font-bold mb-8 text-white`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Cpu className="h-5 w-5" />
                    <span>Ready to Transform Your Enterprise</span>
                  </motion.div>
                  
                  <h3 className={`${designSystem.typography.sectionTitle} text-white mb-8`}>
                    Experience Next-Generation
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-brand-300">
                      {' '}Platform Technology
                    </span>
                  </h3>
                  
                  <div className="w-24 h-1 bg-gradient-to-r from-white to-white/40 rounded-full mx-auto mb-8" />
                  
                  <p className={`${designSystem.typography.sectionSubtitle} text-gray-200 mb-12 leading-relaxed font-medium`}>
                    Discover how our proprietary platforms can transform your enterprise operations 
                    with AI-powered automation and real-time intelligence.
                  </p>
                  
                  {/* Modern Button Group */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href="/products">
                        <button className={`${designSystem.elements.glassMorphism} bg-white/20 text-white hover:bg-white/30 font-bold px-12 py-6 rounded-2xl transition-all duration-300 flex items-center group border-2 border-white/30 hover:border-white/50`}>
                          <span className="text-lg font-bold">Explore All Products</span>
                          <ArrowRight className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2" />
                        </button>
                      </Link>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href="/contact">
                        <button className={`${designSystem.elements.glassMorphism} text-white border-2 border-white/20 hover:border-white/40 font-bold px-12 py-6 rounded-2xl transition-all duration-300 flex items-center group`}>
                          <span className="text-lg font-bold">Request Demo</span>
                          <ExternalLink className="ml-4 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                      </Link>
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

export default ProductsOverview;