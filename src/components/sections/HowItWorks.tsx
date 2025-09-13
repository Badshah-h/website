'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Wrench,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Users,
  Cog,
  BarChart3,
  Shield,
} from 'lucide-react';
import { designSystem, getSectionHeaderClasses } from '@/lib/design-system';
import { Button } from '../ui/button';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Assess & Architect',
      description: 'Business interview, requirements, design blueprint.',
      details: [
        'Comprehensive business analysis',
        'Technology assessment',
        'Architecture design',
        'Implementation roadmap',
      ],
      color: 'text-brand-500',
      bgColor: 'bg-brand-50',
      borderColor: 'border-brand-200',
    },
    {
      number: '02',
      icon: Wrench,
      title: 'Build & Integrate',
      description: 'Implement platform, agents, hardware & integrations.',
      details: [
        'Platform deployment',
        'System integration',
        'Hardware installation',
        'Quality assurance',
      ],
      color: 'text-accent',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Operate & Optimize',
      description: 'Managed services, monitoring, and continuous improvement.',
      details: [
        '24/7 monitoring',
        'Performance optimization',
        'Continuous updates',
        'Scalability management',
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
  ];

  return (


    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(25,118,209,0.02)_50%,transparent_75%)] bg-[size:60px_60px]" />
  
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
              How We Transform
            </span>
          </div>

          <h2 className={`${designSystem.typography.sectionTitle} mb-6`}>
            How We Transform
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent">
              {' '}Your Enterprise
            </span>
          </h2>
          <div className={`${designSystem.elements.sectionDivider} mb-6`} />
          <p className={`${designSystem.typography.sectionSubtitle} max-w-3xl mx-auto leading-relaxed`}>
            Our proven methodology ensures seamless implementation and optimal results. 
            From initial assessment to ongoing optimization, we're your trusted technology partner.
          </p>
        </motion.div>

        {/* Steps */}
        <div className={`${getSectionHeaderClasses()} relative`}>
          {/* Desktop Connector Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-200 via-orange-200 to-green-200 rounded-full"
              initial={designSystem.animations.fadeInUp.hidden}
              whileInView={designSystem.animations.fadeInUp.visible}
              transition={{ duration: designSystem.animations.duration.slow }}
              viewport={{ once: true }}
            />
           
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <motion.div
                  key={step.number}
                  className="relative"
                  initial={designSystem.animations.fadeInUp.hidden}
                  whileInView={designSystem.animations.fadeInUp.visible}
                  transition={{ duration: designSystem.animations.duration.slow }}
                  viewport={{ once: true }}
                >
                  {/* Mobile Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-gray-200" />
                  )}

                  <div className={`relative ${designSystem.elements.modernCard} ${designSystem.elements.floatingElement} ${designSystem.elements.modernShadow} p-8`}>
                    {/* Modern Step Design */}
                    <div className="flex items-center mb-6">
                      <div className={`${designSystem.elements.stepIconContainer} ${step.bgColor} ${step.borderColor} mr-6 group-hover:scale-110 transition-all duration-300`}>
                        <IconComponent className={`${designSystem.elements.stepIconSize} ${step.color}`} />
                      </div>
                      <div className={`${designSystem.typography.sectionTitle} text-gray-200 select-none font-black`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className={`${designSystem.typography.cardTitle} text-brand-900`}>
                        {step.title}
                      </h3>
                      <p className={`${designSystem.typography.cardDescription} text-muted leading-relaxed`}>
                        {step.description}
                      </p>

                      {/* Details */}
                      <ul className="space-y-2 mt-6">
                        {step.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detail}
                            className={`${designSystem.typography.cardDescription} flex items-center text-muted`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: designSystem.animations.duration.slow, 
                              delay: index * 0.2 + detailIndex * 0.1 
                            }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className={`h-4 w-4 ${step.color} mr-3 flex-shrink-0`} />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow for desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                        <motion.div
                          initial={designSystem.animations.fadeInUp.hidden}
                          whileInView={designSystem.animations.fadeInUp.visible}
                          transition={{ duration: designSystem.animations.duration.slow }}
                          viewport={{ once: true }}
                        >
                       
                          <ArrowRight className="h-8 w-8 text-gray-300" />
                        </motion.div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Modern Results Showcase */}
        <motion.div
          className={`relative ${designSystem.elements.modernCard} ${designSystem.elements.modernShadow} p-12 mt-20 overflow-hidden`}
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow }}
          viewport={{ once: true }}
        >
        
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent" />
          
          <div className="relative">
            <div className="text-center mb-12">
                <div className={designSystem.elements.sectionBadge}>
                <TrendingUp className={designSystem.elements.sectionBadgeIcon} />
                <span className={designSystem.elements.sectionBadgeText}>
                  Proven Track Record
                </span>
              </div>
              
              <h3 className={`${designSystem.typography.sectionTitle} mb-4`}>
                Enterprise Transformation 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent">
                  {' '}Excellence
                </span>
              </h3>

              <div className={`${designSystem.elements.sectionDivider} mb-6`} />
              <p className={`${designSystem.typography.cardDescription} text-gray-600 max-w-2xl mx-auto leading-relaxed`}>
                Delivering measurable results across industries with our proven methodology
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="text-center group"
                initial={designSystem.animations.fadeInUp.hidden}
                whileInView={designSystem.animations.fadeInUp.visible}
                transition={{ duration: designSystem.animations.duration.slow }}
                viewport={{ once: true }}
              >
            
                <div className={`${designSystem.elements.iconContainerLarge} bg-gradient-to-br from-brand-500 to-brand-700 rounded-3xl mx-auto mb-6 shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-500`}>
                  <Users className={designSystem.elements.iconSizeLarge} />
                </div>
                
                <div className={`${designSystem.typography.sectionTitle} mb-3`}>
                  200+
                </div>
                
                <h4 className={`${designSystem.typography.cardTitle} mb-3`}>
                  Projects Delivered
                </h4>
                
                <p className={`${designSystem.typography.cardDescription} text-gray-600 leading-relaxed font-medium`}>
                  Successfully transformed enterprises across multiple industries
                </p>
              </motion.div>

              <motion.div
                className="text-center group"
                initial={designSystem.animations.fadeInUp.hidden}
                whileInView={designSystem.animations.fadeInUp.visible}
                transition={{ duration: designSystem.animations.duration.slow }}
                viewport={{ once: true }}
              >
               
                <div className={`${designSystem.elements.iconContainerLarge} bg-gradient-to-br from-accent to-orange-600 rounded-3xl mx-auto mb-6 shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-500`}>
                  <Cog className={designSystem.elements.iconSizeLarge} />
                </div>
                
                <div className={`${designSystem.typography.sectionTitle} mb-3`}>
                  30 Days
                </div>
                
                <h4 className={`${designSystem.typography.cardTitle} mb-3`}>
                  Average Implementation
                </h4>
                
                <p className={`${designSystem.typography.cardDescription} text-gray-600 leading-relaxed font-medium`}>
                  Rapid deployment with minimal business disruption
                </p>
              </motion.div>

              <motion.div
                className="text-center group"
                initial={designSystem.animations.fadeInUp.hidden}
                whileInView={designSystem.animations.fadeInUp.visible}
                transition={{ duration: designSystem.animations.duration.slow }}
                viewport={{ once: true }}
              >
                
                <div className={`${designSystem.elements.iconContainerLarge} bg-gradient-to-br from-green-500 to-green-700 rounded-3xl mx-auto mb-6 shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-500`}>
                  <BarChart3 className={designSystem.elements.iconSizeLarge} />
                </div>
                
                <div className={`${designSystem.typography.sectionTitle} mb-3`}>
                  98%
                </div>
                
                <h4 className={`${designSystem.typography.cardTitle} mb-3`}>
                  Client Satisfaction
                </h4>
                
                <p className={`${designSystem.typography.cardDescription} text-gray-600 leading-relaxed font-medium`}>
                  Industry-leading satisfaction with ongoing partnerships
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

      
      </div>
    </section>
  );
};

export default HowItWorks;
