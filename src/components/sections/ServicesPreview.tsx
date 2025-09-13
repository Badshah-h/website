  'use client';

  import * as React from 'react';
  import { motion } from 'framer-motion';
  import Link from 'next/link';
  import {
    Shield,
    Code2,
    HardDrive,
    Network,
    GitBranch,
    Bot,
    ArrowRight,
    Brain,
    ShieldCheck,
  } from 'lucide-react';
  import { designSystem, getServiceColor, getSectionHeaderClasses, getGridClasses } from '@/lib/design-system';

  const services = [
    {
      icon: Shield,
      title: 'Platform Licensing',
      description: 'Microsoft, Oracle, SAP enterprise licensing & integration',
      color: 'text-brand-900',
      bgColor: 'bg-brand-900',
    },
    {
      icon: Code2,
      title: 'Custom Development',
      description: 'Full-stack SaaS, APIs, and enterprise applications',
      color: 'text-accent',
      bgColor: 'bg-accent',
    },
    {
      icon: HardDrive,
      title: 'Hardware Procurement',
      description: 'Enterprise servers, networking, and IT equipment',
      color: 'text-brand-700',
      bgColor: 'bg-brand-700',
    },
    {
      icon: Network,
      title: 'Network & Security',
      description: 'CCTV, networking, and security infrastructure',
      color: 'text-brand-500',
      bgColor: 'bg-brand-500',
    },
    {
      icon: GitBranch,
      title: 'Systems Integration',
      description: 'ERP/CRM connectors and middleware solutions',
      color: 'text-brand-900',
      bgColor: 'bg-brand-900',
    },
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Intelligent workflows and AI agent deployment',
      color: 'text-accent',
      bgColor: 'bg-accent',
    },
  ];

  const ServicesPreview: React.FC = () => {
    return (
      <section id="services-preview" className={`${designSystem.spacing.section} bg-white relative overflow-hidden`}>
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,138,0,0.03),transparent)] pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-brand-100/20 to-transparent rounded-full blur-3xl" />
      
        <div className={`${designSystem.spacing.container} relative`}>
          {/* Professional Header Section */}
          <motion.div
            className={getSectionHeaderClasses()}
            initial={designSystem.animations.fadeInUp.hidden}
            whileInView={designSystem.animations.fadeInUp.visible}
            transition={{ duration: designSystem.animations.duration.slow }}
            viewport={{ once: true }}
          >
            <div className={designSystem.elements.sectionBadge}>
              <ShieldCheck className={designSystem.elements.sectionBadgeIcon} />
              <span className={designSystem.elements.sectionBadgeText}>
                Enterprise IT Solutions
              </span>
            </div>
            
            <h2 className={`${designSystem.typography.sectionTitle} mb-4`}>
              Enterprise 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-brand-500">
                {' '}Solutions
              </span>
            </h2>
            <div className={`${designSystem.elements.sectionDivider} mb-6`} />
            <p className={`${designSystem.typography.sectionSubtitle} max-w-4xl mx-auto leading-relaxed font-medium`}>
              Enterprise Complete technology solutions for modern enterprises 
            </p>
          </motion.div>

          {/* Services Grid - Minimal & Clean */}
          <div className={getGridClasses(3)}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <motion.div
                  key={service.title}
                  className={`group ${designSystem.elements.modernCard} ${designSystem.elements.floatingElement} ${designSystem.elements.modernShadow} p-8`}
                  initial={designSystem.animations.fadeInUp.hidden}
                  whileInView={designSystem.animations.fadeInUp.visible}
                  transition={{ 
                    duration: designSystem.animations.duration.medium, 
                    delay: designSystem.animations.staggerDelay(index)
                  }}
                  viewport={{ once: true }}
                >
                  {/* Icon */}
                  <div className={`${designSystem.elements.iconContainer} ${service.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={designSystem.elements.iconSize} />
                  </div>

                  {/* Content */}
                  <div className={designSystem.spacing.contentGap}>
                    <h3 className={`${designSystem.typography.cardTitle} group-hover:text-brand-700 transition-colors duration-200`}>
                      {service.title}
                    </h3>
                    <p className={designSystem.typography.cardDescription}>
                      {service.description}
                    </p>
                  </div>

                  {/* Minimal Hover Effect */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-sm font-medium text-brand-500">
                      <span>Learn more</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-12"
            initial={designSystem.animations.fadeInUp.hidden}
            whileInView={designSystem.animations.fadeInUp.visible}
            transition={{ duration: designSystem.animations.duration.medium, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/services" className={designSystem.elements.primaryButton}>
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    );
  };

  export default ServicesPreview;
