'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  DollarSign,
  Heart,
  Building,
  Factory,
  ArrowRight,
  TrendingUp,
  BarChart3,
  CheckCircle,
  Search,
} from 'lucide-react';
import { designSystem, getSectionHeaderClasses } from '@/lib/design-system';
import { Button } from '@/components/ui/button';

const Industries: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = React.useState(0);

  const industries = [
    {
      name: 'Retail',
      icon: ShoppingCart,
      description: 'Transform customer experiences with intelligent retail solutions',
      longDescription: 'Streamline operations with integrated POS systems, real-time inventory management, and advanced customer analytics that drive personalized shopping experiences.',
      benefits: ['Real-time inventory tracking', 'Customer behavior analytics', 'Multi-channel integration'],
      gradient: 'from-blue-600 via-blue-700 to-indigo-800',
      stats: { metric: '40%', label: 'Sales Increase' },
      backgroundPattern: 'shopping-pattern',
    },
    {
      name: 'Finance',
      icon: DollarSign,
      description: 'Secure, compliant financial technology solutions',
      longDescription: 'Build secure trading platforms with automated compliance reporting, intelligent risk management, and real-time transaction processing.',
      benefits: ['Automated compliance reporting', 'Risk assessment AI', 'Secure transaction processing'],
      gradient: 'from-emerald-600 via-green-700 to-teal-800',
      stats: { metric: '99.9%', label: 'Security Rate' },
      backgroundPattern: 'finance-pattern',
    },
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'HIPAA-compliant healthcare innovation',
      longDescription: 'Deploy HIPAA-compliant systems with comprehensive patient management, medical device integration, and workflow optimization.',
      benefits: ['Patient data security', 'Medical device connectivity', 'Workflow optimization'],
      gradient: 'from-red-600 via-rose-700 to-pink-800',
      stats: { metric: '60%', label: 'Efficiency Gain' },
      backgroundPattern: 'healthcare-pattern',
    },
    {
      name: 'Real Estate',
      icon: Building,
      description: 'Intelligent property management platforms',
      longDescription: 'Comprehensive property management solutions with integrated CRM, automated document processing, and market analytics.',
      benefits: ['Property portfolio management', 'Automated document processing', 'Market trend analysis'],
      gradient: 'from-purple-600 via-violet-700 to-indigo-800',
      stats: { metric: '35%', label: 'Time Saved' },
      backgroundPattern: 'realestate-pattern',
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'IoT-enabled smart manufacturing solutions',
      longDescription: 'Advanced IoT-enabled production monitoring, supply chain optimization, and automated quality control systems.',
      benefits: ['Production line monitoring', 'Supply chain visibility', 'Quality assurance automation'],
      gradient: 'from-orange-600 via-amber-700 to-yellow-800',
      stats: { metric: '50%', label: 'Cost Reduction' },
      backgroundPattern: 'manufacturing-pattern',
    },
  ];

  return (
    <section id="industries" className="py-24 bg-gray-50">
      <div className={`${designSystem.spacing.container} relative`}>
        {/* Section Header */}
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
              Industry-Tailored Solutions
            </span>
          </div>

          <h2 className={`${designSystem.typography.sectionTitle} mb-4`}>
          Industry-Tailored 

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent">
              {' '}Solutions
            </span>
          </h2>
          <div className={`${designSystem.elements.sectionDivider} mb-6`} />
          <p className={`${designSystem.typography.sectionSubtitle} max-w-4xl mx-auto leading-relaxed font-medium`}>
          Every industry has unique challenges and requirements. Our enterprise solutions 
          are specifically designed to address sector-specific needs and regulatory compliance.
          </p>
       
        </motion.div>

        {/* Modern Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Main Display Area */}
          <motion.div
            key={activeIndustry}
            className="relative overflow-hidden rounded-3xl"
            initial={designSystem.animations.fadeInUp.hidden}
            whileInView={designSystem.animations.fadeInUp.visible}
            transition={{ duration: designSystem.animations.duration.slow }}
            viewport={{ once: true }}
          >
          
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${industries[activeIndustry].gradient}`} />
            
            {/* Animated Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-slide-in-right" 
                   style={{ animationDuration: '3s', animationIterationCount: 'infinite' }} />
            </div>

            {/* Content */}
            <div className="relative p-12 lg:p-16 text-white min-h-[500px] flex flex-col justify-between">
              {/* Top Section */}
              <div>
                <motion.div
                  className="flex items-center mb-8"
                  initial={designSystem.animations.fadeInUp.hidden}
                  whileInView={designSystem.animations.fadeInUp.visible}
                  transition={{ duration: designSystem.animations.duration.slow }}
                  viewport={{ once: true }}
                >
               
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-6">
                    {React.createElement(industries[activeIndustry].icon, { className: "h-10 w-10 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold mb-2">{industries[activeIndustry].name}</h3>
                    <p className="text-xl text-white/90">{industries[activeIndustry].description}</p>
                  </div>
                </motion.div>

                <motion.p
                  className="text-lg leading-relaxed text-white/90 mb-8"
                  initial={designSystem.animations.fadeInUp.hidden}
                  whileInView={designSystem.animations.fadeInUp.visible}
                  transition={{ duration: designSystem.animations.duration.slow }}
                  viewport={{ once: true }}
                >
                
                  {industries[activeIndustry].longDescription}
                </motion.p>

                {/* Benefits List */}
                <motion.div
                  className="grid md:grid-cols-2 gap-4 mb-8"
                  initial={designSystem.animations.fadeInUp.hidden}
                  whileInView={designSystem.animations.fadeInUp.visible}
                  transition={{ duration: designSystem.animations.duration.slow }}
                  viewport={{ once: true }}
                >
                  {industries[activeIndustry].benefits.map((benefit, idx) => (
                    <motion.div
                      key={benefit}
                      className="flex items-center text-white/90"
                      initial={designSystem.animations.fadeInUp.hidden}
                      whileInView={designSystem.animations.fadeInUp.visible}
                      transition={{ duration: designSystem.animations.duration.slow }}
                      viewport={{ once: true }} 
                      
                    > 
                      <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom: Stats */}
              <motion.div
                className="flex items-end justify-between"
                initial={designSystem.animations.fadeInUp.hidden}
                whileInView={designSystem.animations.fadeInUp.visible}
                transition={{ duration: designSystem.animations.duration.slow }}
                viewport={{ once: true }}
              >\
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className={`${designSystem.typography.sectionTitle} text-4xl font-bold mb-1`}>{industries[activeIndustry].stats.metric}</div>
                  <div className={`${designSystem.typography.cardDescription} text-white/80 text-sm font-medium`}>{industries[activeIndustry].stats.label}</div>
                </div>
                
                <TrendingUp className="h-12 w-12 text-white/60" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Industry Navigation */}
          <div className="space-y-4">
            <motion.h4
              className="text-lg font-semibold text-brand-900 mb-8"
              initial={designSystem.animations.fadeInUp.hidden}
              whileInView={designSystem.animations.fadeInUp.visible}
              transition={{ duration: designSystem.animations.duration.slow }}
              viewport={{ once: true }}
            >
              Select Industry
            </motion.h4>

            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              const isActive = index === activeIndustry;
              
              return (
                <motion.button
                  key={industry.name}
                  onClick={() => setActiveIndustry(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${
                    isActive 
                      ? 'bg-white shadow-xl border-2 border-brand-200' 
                      : 'bg-white/50 hover:bg-white hover:shadow-lg'
                  }`}
                  initial={designSystem.animations.fadeInUp.hidden}
                  whileInView={designSystem.animations.fadeInUp.visible}
                  transition={{ duration: designSystem.animations.duration.slow }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  
                >
               
                
                  <div className="flex items-center">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 ${
                      isActive 
                        ? `bg-gradient-to-br ${industry.gradient}` 
                        : 'bg-gray-100 group-hover:bg-gray-200'
                    }`}>
                      <IconComponent className={`h-7 w-7 transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <h5 className={`font-semibold mb-1 transition-colors duration-300 ${
                        isActive ? 'text-brand-900' : 'text-gray-700 group-hover:text-brand-900'
                      }`}>
                        {industry.name}
                      </h5>
                      <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                        isActive ? 'text-muted' : 'text-gray-500'
                      }`}>
                        {industry.description}
                      </p>
                    </div>

                    <ArrowRight className={`h-5 w-5 ml-4 transition-all duration-300 ${
                      isActive 
                        ? 'text-brand-500 opacity-100' 
                        : 'text-gray-400 opacity-0 group-hover:opacity-100'
                    }`} />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Success Metrics - Redesigned */}
        <motion.div
          className="mt-24"
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow }}
          viewport={{ once: true }}
        >
         
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h3 className="text-2xl font-bold text-brand-900 text-center mb-12">
              Proven Results Across All Industries
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`${designSystem.typography.sectionTitle} text-4xl font-bold text-brand-900 mb-2`}>85%</div>
                <div className="text-sm text-muted font-medium">Average Cost Reduction</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`${designSystem.typography.sectionTitle} text-4xl font-bold text-brand-900 mb-2`}>3x</div>
                <div className="text-sm text-muted font-medium">Faster Processing</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`${designSystem.typography.sectionTitle} text-4xl font-bold text-brand-900 mb-2`}>99.8%</div>
                <div className="text-sm text-muted font-medium">Compliance Rate</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`${designSystem.typography.sectionTitle} text-4xl font-bold text-brand-900 mb-2`}>24/7</div>
                <div className="text-sm text-muted font-medium">System Monitoring</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

      
          {/* Professional CTA Section */}
          <motion.div
          className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 rounded-3xl overflow-hidden mt-16"
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow }}
          viewport={{ once: true }}
        >
        
          {/* Premium Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-3xl" />
          
          <div className="relative px-12 py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold mb-8">
                <CheckCircle className={`${designSystem.typography.cardTitle} h-5 w-5`} />
                <span>Ready to Transform Your Enterprise</span>
              </div>
              
              <h2 className={`${designSystem.typography.sectionTitle} text-4xl font-bold text-white mb-6 leading-tight`}>
                Start Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent">
                  {' '}Transformation Journey
                </span>
              </h2>
              
              <p className={`${designSystem.typography.sectionSubtitle} text-xl text-brand-100 mb-12 max-w-3xl mx-auto leading-relaxed font-medium`}>
                Schedule a consultation to assess your current systems and design 
                a comprehensive transformation roadmap tailored to your business needs.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`${designSystem.typography.sectionTitle} bg-white text-brand-900 hover:bg-gray-100 font-bold px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center group`}
                  variant="secondary"
                  size="lg"
                >
                  <Search className={`${designSystem.typography.cardTitle} mr-3 h-6 w-6`} />
                  <span className="text-lg font-bold">Start Assessment</span>
                  <ArrowRight className={`${designSystem.typography.cardTitle} ml-3 h-5 w-5 transition-transform group-hover:translate-x-2`} />
                </Button>
                
                <Button
                  onClick={() => {
                    const element = document.querySelector('#case-studies');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`${designSystem.typography.sectionTitle} bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 hover:bg-white/20 font-bold px-12 py-6 rounded-2xl transition-all duration-300 flex items-center group`}
                  variant="outline"
                  size="lg"
                >
                  <span className="text-lg font-bold">View Success Stories</span>
                  <ArrowRight className={`${designSystem.typography.cardTitle} ml-3 h-5 w-5 transition-transform group-hover:translate-x-1`} />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
