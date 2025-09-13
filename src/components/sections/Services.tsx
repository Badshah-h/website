'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Shield,
  Code2,
  HardDrive,
  Network,
  GitBranch,
  Bot,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { designSystem, getSectionHeaderClasses } from '@/lib/design-system';

// Import local assets
import licenseEnterpriseImg from '@/assets/licnens-enterprise.png';
import customSoftwareImg from '@/assets/custome-software-development.png';
import hardwareProcurementImg from '@/assets/ChatGPT Image Sep 12, 2025, 08_39_11 PM.png';
import networkCCTVImg from '@/assets/network-cctv.png';
import systemIntegrationImg from '@/assets/system-inteegration.png';
import aiServicesImg from '@/assets/AI-services.png';

const services = [
  {
    icon: Shield,
    title: 'Enterprise Platform Licensing',
    description: 'Acquire & integrate Microsoft, Oracle, SAP, and other licensed platforms.',
    features: ['Volume Licensing', 'Compliance Management', 'Cost Optimization', 'Vendor Relations'],
    color: 'text-brand-900',
    bgColor: 'bg-brand-900',
    gradientFrom: 'from-brand-900',
    gradientTo: 'to-brand-700',
    image: licenseEnterpriseImg,
    imageAlt: 'Enterprise software licensing and platform integration'
  },
  {
    icon: Code2,
    title: 'Custom Software & SaaS Development',
    description: 'End-to-end engineering: backend, frontend, APIs.',
    features: ['Full-Stack Development', 'Cloud Architecture', 'API Design', 'DevOps Integration'],
    color: 'text-accent',
    bgColor: 'bg-accent',
    gradientFrom: 'from-accent',
    gradientTo: 'to-orange-600',
    image: customSoftwareImg,
    imageAlt: 'Custom software development and SaaS solutions'
  },
  {
    icon: HardDrive,
    title: 'Hardware Supply & Procurement',
    description: 'Servers, laptops, networking on contract or lease.',
    features: ['Enterprise Hardware', 'Bulk Procurement', 'Leasing Options', 'Asset Management'],
    color: 'text-brand-700',
    bgColor: 'bg-brand-700',
    gradientFrom: 'from-brand-700',
    gradientTo: 'to-brand-500',
    image: hardwareProcurementImg,
    imageAlt: 'Enterprise hardware supply and procurement services'
  },
  {
    icon: Network,
    title: 'Network & CCTV Implementation',
    description: 'Design, install, and maintain secure networks & surveillance systems.',
    features: ['Network Design', 'Security Implementation', 'Surveillance Systems', '24/7 Monitoring'],
    color: 'text-brand-500',
    bgColor: 'bg-brand-500',
    gradientFrom: 'from-brand-500',
    gradientTo: 'to-brand-300',
    image: networkCCTVImg,
    imageAlt: 'Network infrastructure and CCTV security implementation'
  },
  {
    icon: GitBranch,
    title: 'Systems Integration & Middleware',
    description: 'ERP/CRM connectors, data pipelines, middleware.',
    features: ['API Integration', 'Data Migration', 'Workflow Automation', 'Legacy Modernization'],
    color: 'text-brand-900',
    bgColor: 'bg-brand-900',
    gradientFrom: 'from-brand-900',
    gradientTo: 'to-brand-500',
    image: systemIntegrationImg,
    imageAlt: 'Systems integration and middleware solutions'
  },
  {
    icon: Bot,
    title: 'Intelligent Automation & AI Agents',
    description: 'RAG, LLM orchestration, RPA, autonomous workflows.',
    features: ['AI Automation', 'Intelligent Workflows', 'RAG Systems', 'Process Optimization'],
    color: 'text-accent',
    bgColor: 'bg-accent',
    gradientFrom: 'from-accent',
    gradientTo: 'to-brand-700',
    image: aiServicesImg,
    imageAlt: 'AI automation and intelligent agent services'
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(9,32,49,0.02)_25%,rgba(9,32,49,0.02)_50%,transparent_50%,transparent_75%,rgba(255,132,0,0.02)_75%)] bg-[length:32px_32px]" />
      
      <div className={`${designSystem.spacing.container} relative`}>
        {/* Modern Section Header */}
        <motion.div
          className={getSectionHeaderClasses()}
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow }}
          viewport={{ once: true }}
        >

          <h2 className={`${designSystem.typography.sectionTitle} mb-4`}>
          Enterprise  
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-brand-500">
              {' '}IT Solutions
            </span>
          </h2>
          <div className={`${designSystem.elements.sectionDivider} mb-6`} />
          <p className={`${designSystem.typography.sectionSubtitle} max-w-4xl mx-auto leading-relaxed font-medium`}>
            Enterprise Complete technology solutions for modern enterprises 
          </p>
         
        </motion.div>

        {/* Services - Modern Asymmetric Layout */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={service.title}
                className="relative group"
                  initial={designSystem.animations.fadeInUp.hidden}
                whileInView={designSystem.animations.fadeInUp.visible}
                transition={{ 
                  duration: designSystem.animations.duration.slow, 
                  delay: index * 0.1 
                }}
                viewport={{ once: true }}
              >
                <div className={`grid lg:grid-cols-12 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Visual Side */}
                  <div className={`lg:col-span-5 ${!isEven ? 'lg:col-start-8' : ''}`}>
                    <div className="relative">
                      {/* Professional Background Shape */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} opacity-5 rounded-[3rem] transform ${isEven ? '-rotate-6' : 'rotate-6'}`} />
                      <div className="relative bg-white rounded-[3rem] p-8 shadow-2xl overflow-hidden border border-gray-100">
                        {/* Real Image */}
                        <div className="relative">
                          <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                            <Image 
                              src={service.image}
                              alt={service.imageAlt}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                          
                          {/* Icon Badge */}
                          <div className={`absolute -top-4 -right-4 ${designSystem.elements.stepIconContainer} bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} shadow-xl`}>
                            <IconComponent className={`${designSystem.elements.stepIconSize} text-white`} />
                          </div>
                        </div>
                        
                        {/* Stats Badge */}
                        <div className="text-center pt-6 border-t border-gray-100">
                          <div className="text-2xl font-bold text-brand-900 mb-2">
                            {index === 0 ? '500+ Clients' : 
                             index === 1 ? '100+ Apps' : 
                             index === 2 ? '$10M+ Managed' : 
                             index === 3 ? '1000+ Secured' : 
                             index === 4 ? '200+ Integrated' : 
                             '80% Automated'}
                          </div>
                          <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                            Success Metric
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`lg:col-span-7 ${!isEven ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-8">
                      <div>
                        <h3 className={`${designSystem.typography.cardTitle} mb-4`}>
                          {service.title}
                        </h3>
                        
                        <p className="text-xl text-gray-700 leading-relaxed font-medium">
                          {service.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-brand-900 uppercase tracking-wide mb-6">
                          Key Features
                        </h4>
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            initial={designSystem.animations.fadeInUp.hidden}
                            whileInView={designSystem.animations.fadeInUp.visible}
                            transition={{ duration: designSystem.animations.duration.medium, delay: designSystem.animations.staggerDelay(idx) }}
                            viewport={{ once: true }}
                            className="flex items-center group"
                          >
                            <div className={`w-2 h-12 bg-gradient-to-b ${service.gradientFrom} ${service.gradientTo} rounded-full mr-6 group-hover:scale-110 transition-transform duration-300`} />
                            <div className="flex-1">
                              <span className="text-lg font-semibold text-gray-800">
                                {feature}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="pt-6">
                        <button className={`inline-flex items-center ${service.color} hover:opacity-80 font-bold text-lg group transition-all duration-200`}>
                          <span>Explore Solution</span>
                          <div className={`ml-3 w-8 h-8 bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}>
                            <ArrowRight className="w-4 h-4 text-white" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>  

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-accent/10 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                <div className={`absolute ${isEven ? 'top-1/4 right-1/4' : 'bottom-1/4 left-1/4'} w-2 h-2 bg-brand-900/10 rounded-full`} />
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow, delay: designSystem.animations.staggerDelay(0.3) }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-brand-900 mb-4">
            Ready to Transform Your Enterprise IT?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive solutions can streamline your operations, 
            reduce costs, and accelerate your digital transformation.
          </p>
          <Button
            variant="accent"
            size="lg"
            onClick={() => {
              const element = document.querySelector('#contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-accent to-orange-600 hover:from-orange-600 hover:to-accent shadow-xl transition-all duration-300"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
