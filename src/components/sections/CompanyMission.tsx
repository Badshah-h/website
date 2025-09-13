'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { designSystem, getSectionHeaderClasses, getGridClasses } from '@/lib/design-system';
import {
  Target,
  Eye,
  Award,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const CompanyMission: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven Excellence',
      description: 'We deliver transformational enterprise technology solutions that drive measurable business outcomes and competitive advantage for our clients worldwide.',
      gradient: 'from-brand-500 to-brand-700',
      stats: '500+ Successful Implementations'
    },
    {
      icon: Eye,
      title: 'Visionary Innovation',
      description: 'We envision a future where intelligent automation and seamless integration empower enterprises to achieve unprecedented operational efficiency.',
      gradient: 'from-accent to-orange-600',
      stats: '50+ Patents & Innovations'
    },
    {
      icon: Award,
      title: 'Uncompromising Quality',
      description: 'We maintain the highest standards of excellence in every solution we deliver, ensuring reliability, security, and performance at enterprise scale.',
      gradient: 'from-green-600 to-green-800',
      stats: '99.9% Client Satisfaction'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We build lasting relationships based on trust, transparency, and mutual success, treating every client engagement as a strategic partnership.',
      gradient: 'from-purple-600 to-purple-800',
      stats: '200+ Long-term Partners'
    },
  ];

  const achievements = [
    {
      icon: Globe,
      metric: '25+',
      label: 'Countries Served',
      description: 'Global enterprise footprint',
      color: 'text-brand-600'
    },
    {
      icon: TrendingUp,
      metric: '$500M+',
      label: 'Client Value Created',
      description: 'Measurable business impact',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      metric: '100%',
      label: 'Security Compliance',
      description: 'Enterprise-grade security',
      color: 'text-blue-600'
    },
    {
      icon: Zap,
      metric: '10x',
      label: 'Performance Boost',
      description: 'Average efficiency gain',
      color: 'text-accent'
    },
  ];

  return (
    <section id="company-mission" className={`${designSystem.spacing.sectionLarge} bg-gradient-to-b from-gray-50 to-white relative overflow-hidden`}>
      {/* Professional Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(25,118,210,0.03),transparent)] pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-brand-100/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl" />
      
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
            <Target className={designSystem.elements.sectionBadgeIcon} />
            <span className={designSystem.elements.sectionBadgeText}>
              Company Foundation
            </span>
          </div>
          
          <h2 className={`${designSystem.typography.sectionTitle} mb-4`}>
            Driving Enterprise
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent">
              {' '}Transformation
            </span>
          </h2>
          <div className={`${designSystem.elements.sectionDivider} mb-6`} />
          <p className={`${designSystem.typography.sectionSubtitle} max-w-4xl mx-auto leading-relaxed font-medium`}>
            Founded on the principles of innovation, excellence, and client success, AxonStream Technologies 
            empowers enterprises to achieve their full potential through cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Mission & Vision - Professional Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Mission */}
          <motion.div
            className="relative bg-white rounded-3xl p-12 shadow-xl border border-gray-100 group hover:shadow-2xl transition-all duration-500"
            initial={designSystem.animations.fadeInUp.hidden}
            whileInView={designSystem.animations.fadeInUp.visible}
            transition={{ duration: designSystem.animations.duration.slow }}
            viewport={{ once: true }}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center shadow-xl mr-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className={`${designSystem.typography.cardTitle}`}>Our Mission</h3>
              </div>
              
              <p className={`${designSystem.typography.sectionSubtitle} text-gray-700 leading-relaxed mb-8 font-medium`}>
                To empower enterprises with transformational technology solutions that drive measurable business outcomes, 
                enhance operational efficiency, and create sustainable competitive advantages in the digital economy.
              </p>
              
              
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="relative bg-white rounded-3xl p-12 shadow-xl border border-gray-100 group hover:shadow-2xl transition-all duration-500"
            initial={designSystem.animations.fadeInUp.hidden}
            whileInView={designSystem.animations.fadeInUp.visible}
            transition={{ duration: designSystem.animations.duration.slow }}
            viewport={{ once: true }}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-orange-600 rounded-2xl flex items-center justify-center shadow-xl mr-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className={`${designSystem.typography.cardTitle}`}>Our Vision</h3>
              </div>
              
              <p className={`${designSystem.typography.sectionSubtitle} text-gray-700 leading-relaxed mb-8 font-medium`}>
                To be the global leader in enterprise technology transformation, setting the standard for innovation, 
                reliability, and client success in the rapidly evolving digital landscape.
              </p>
              
              
            </div>
          </motion.div>
        </div>

        {/* Core Values - Professional Grid */}
        <motion.div
          className="mb-24"
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className={`${designSystem.typography.sectionTitle} mb-4`}>
              Core Values & Principles
            </h3>
            <p className={`${designSystem.typography.sectionSubtitle} text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium`}>
              The fundamental principles that guide our approach to enterprise technology solutions and client partnerships.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              
              return (
                <motion.div
                  key={value.title}
                  className="group relative bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  initial={designSystem.animations.fadeInUp.hidden}
                  whileInView={designSystem.animations.fadeInUp.visible}
                  transition={{ 
                    duration: designSystem.animations.duration.slow, 
                    delay: index * 0.1 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01, y: -8 }}
                >
                  {/* Premium Gradient Border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative p-12">
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center space-x-6">
                        <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                        
                        <div>
                          <h4 className="text-2xl font-bold text-brand-900 mb-2 group-hover:text-brand-700 transition-colors duration-300">
                            {value.title}
                          </h4>
                          <div className="inline-flex items-center px-4 py-2 bg-gray-50 rounded-full">
                            <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                              {value.stats}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Company Achievements - Professional Stats */}
        <motion.div
          className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 rounded-3xl overflow-hidden mb-24"
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow }}
          viewport={{ once: true }}
        >
          {/* Premium Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-3xl" />
          
          <div className="relative p-16">
            <div className="text-center mb-16">
              <h3 className={`${designSystem.typography.sectionTitle} text-white mb-6`}>
                Global Impact & Recognition
              </h3>
              <p className={`${designSystem.typography.sectionSubtitle} text-brand-100 max-w-3xl mx-auto leading-relaxed font-medium`}>
                Our commitment to excellence has delivered measurable results for enterprises worldwide.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                
                return (
                  <motion.div
                    key={achievement.label}
                    className="text-center group"
                    initial={designSystem.animations.fadeInUp.hidden}
                    whileInView={designSystem.animations.fadeInUp.visible}
                    transition={{ 
                      duration: designSystem.animations.duration.medium, 
                      delay: index * 0.1 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-500">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    
                    <div className={`${designSystem.typography.sectionTitle} text-white mb-3`}>
                      {achievement.metric}
                    </div>
                    
                      <h4 className={`${designSystem.typography.cardTitle} text-white mb-3`}>
                      {achievement.label}
                    </h4>
                    
                    <p className={`${designSystem.typography.sectionSubtitle} text-brand-100 font-medium leading-relaxed`}>
                      {achievement.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Professional Partnership CTA */}
        <motion.div
          className="text-center"
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow, delay: designSystem.animations.staggerDelay(0.3) }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-16 shadow-xl border border-gray-100">
            <h3 className={`${designSystem.typography.sectionTitle} mb-4`}>
              Partner with Industry Leaders
            </h3>
            
            <p className={`${designSystem.typography.sectionSubtitle} text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium`}>
              Join hundreds of enterprises that trust AxonStream Technologies to deliver transformational results 
              and sustainable competitive advantages.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center group">
                <span className="text-lg font-bold">Become a Partner</span>
                <ArrowRight className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </button>
              
              <button className="bg-gray-100 hover:bg-gray-200 text-brand-900 border-2 border-gray-200 font-bold px-12 py-6 rounded-2xl transition-all duration-300 flex items-center group">
                <span className="text-lg font-bold">Learn More</span>
                <ArrowRight className="ml-4 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyMission;