'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Headphones,
  Zap,
  Clock,
  Users,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { designSystem, getSectionHeaderClasses } from '@/lib/design-system';

const Pricing: React.FC = () => {
  const pricingTiers = [
    {
      name: 'Bronze',
      description: 'Essential managed services for growing enterprises',
      slaMinutes: '4-hour response',
      features: [
        'Basic system monitoring',
        'Email support',
        'Monthly reporting',
        'Standard integrations',
        'Business hours support',
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      icon: Shield,
    },
    {
      name: 'Silver',
      description: 'Advanced automation with priority support',
      slaMinutes: '2-hour response',
      features: [
        'Advanced monitoring & alerts',
        'Phone & chat support',
        'Weekly reporting',
        'Premium integrations',
        'Extended hours support',
        'Dedicated account manager',
      ],
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-300',
      icon: Headphones,
      popular: true,
    },
    {
      name: 'Gold',
      description: 'Enterprise-grade with mission-critical SLA',
      slaMinutes: '30-minute response',
      features: [
        'Real-time monitoring & AI alerts',
        'Priority phone support',
        'Daily reporting & insights',
        'Custom integrations',
        '24/7 premium support',
        'Dedicated technical team',
        'Proactive optimization',
        'Emergency response team',
      ],
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-300',
      icon: Star,
    },
  ];

  const licensingModels = [
    {
      title: 'Enterprise Platform Licensing',
      description: 'Volume discounts and custom agreements for Microsoft, Oracle, SAP, and other enterprise platforms.',
      features: [
        'Volume discount negotiations',
        'License optimization analysis',
        'Compliance management',
        'Renewal planning',
      ],
      icon: Shield,
    },
    {
      title: 'Custom Development Projects',
      description: 'Tailored pricing based on project scope, timeline, and complexity requirements.',
      features: [
        'Fixed-price project delivery',
        'Agile development sprints',
        'Dedicated development teams',
        'Flexible engagement models',
      ],
      icon: Zap,
    },
    {
      title: 'Hardware Procurement',
      description: 'Competitive pricing with flexible payment terms including purchase, lease, and rental options.',
      features: [
        'Bulk procurement discounts',
        'Flexible payment terms',
        'Asset management services',
        'Warranty & support packages',
      ],
      icon: Users,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className={`${designSystem.spacing.container} relative`}>
        {/* Section Header */}
        <motion.div
          className={getSectionHeaderClasses()}
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow }}
          viewport={{ once: true }}
        >
          <h2 className={`${designSystem.typography.sectionTitle} mb-6`}>
            Flexible Pricing & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent">
              {' '}Licensing Models
            </span>
          </h2>
          <p className={`${designSystem.typography.sectionSubtitle} max-w-3xl mx-auto leading-relaxed`}>
            Choose the service level that matches your enterprise needs. From essential managed services 
            to mission-critical support with enterprise licensing solutions.
          </p>
        </motion.div>

        {/* Managed Services Tiers */}
        <div className="mb-20">
          <motion.div
            className={getSectionHeaderClasses()}
              initial={designSystem.animations.fadeInUp.hidden}
            whileInView={designSystem.animations.fadeInUp.visible}
            transition={{ duration: designSystem.animations.duration.slow }}
            viewport={{ once: true }}
          >
            <h3 className={`${designSystem.typography.sectionTitle} mb-4`}>
              Managed Services Tiers
            </h3>
            <p className={`${designSystem.typography.sectionSubtitle} max-w-3xl mx-auto leading-relaxed`}>
              Comprehensive support with guaranteed SLA response times
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              
              return (
                <motion.div
                  key={tier.name}
                  initial={designSystem.animations.fadeInUp.hidden}
                  whileInView={designSystem.animations.fadeInUp.visible}
                  transition={{ 
                    duration: designSystem.animations.duration.slow, 
                    delay: index * 0.1 
                  }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <Card className={`h-full ${tier.popular ? 'border-accent shadow-2xl scale-105' : 'border-gray-200'} transition-all duration-300 hover:shadow-xl`}>
                    <CardHeader className="text-center pb-6">
                      <div className={`w-16 h-16 ${tier.bgColor} ${tier.borderColor} border-2 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className={`h-8 w-8 ${tier.color}`} />
                      </div>
                      <CardTitle className="text-2xl font-bold text-brand-900">
                        {tier.name}
                      </CardTitle>
                      <CardDescription className={`${designSystem.typography.sectionSubtitle} max-w-3xl mx-auto leading-relaxed`}>
                        {tier.description}
                      </CardDescription>
                      <div className="mt-4">
                        <div className={`text-sm font-semibold ${tier.color} flex items-center justify-center`}>
                          <Clock className="h-4 w-4 mr-2" />
                          {tier.slaMinutes}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <CheckCircle className={`h-5 w-5 ${tier.color} mr-3 mt-0.5 flex-shrink-0`} />
                            <span className={`${designSystem.typography.sectionSubtitle} max-w-3xl mx-auto leading-relaxed`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button
                        variant={tier.popular ? "accent" : "outline"}
                        className="w-full"
                        onClick={() => {
                          const element = document.querySelector('#contact');
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Get Custom Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Licensing Models */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <motion.div
            className={getSectionHeaderClasses()}
              initial={designSystem.animations.fadeInUp.hidden}
            whileInView={designSystem.animations.fadeInUp.visible}
            transition={{ duration: designSystem.animations.duration.slow }}
            viewport={{ once: true }}
          >
            <h3 className={`${designSystem.typography.sectionTitle} mb-4`}>
              Enterprise Licensing & Custom Solutions
            </h3>
            <p className={`${designSystem.typography.sectionSubtitle} max-w-3xl mx-auto leading-relaxed`}>
              Tailored pricing models for every enterprise need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {licensingModels.map((model, index) => {
              const IconComponent = model.icon;
              
              return (
                <motion.div
                  key={model.title}
                  initial={designSystem.animations.fadeInUp.hidden}
                  whileInView={designSystem.animations.fadeInUp.visible}
                  transition={{ 
                    duration: designSystem.animations.duration.slow, 
                    delay: index * 0.1 
                  }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white hover:shadow-lg transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-brand-500" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-brand-900">
                        {model.title}
                      </CardTitle>
                      <CardDescription className={`${designSystem.typography.sectionSubtitle} max-w-3xl mx-auto leading-relaxed`}>
                        {model.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-2">
                        {model.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm">
                            <CheckCircle className={`h-5 w-5 text-brand-500 mr-3 mt-0.5 flex-shrink-0`} />
                            <span className={`${designSystem.typography.sectionSubtitle} max-w-3xl mx-auto leading-relaxed`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          className={getSectionHeaderClasses()}
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow }}
          viewport={{ once: true }}
        
        >
          <h3 className={`${designSystem.typography.sectionTitle} mb-4`}>
            Need a Custom Quote?
          </h3>
          <p className={`${designSystem.typography.sectionSubtitle} max-w-2xl mx-auto leading-relaxed`}>
            Every enterprise is unique. Contact our sales team for personalized pricing 
            based on your specific requirements, scale, and service level needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="accent"
              size="lg"
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="shadow-xl"
            >
              Contact Sales for Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-brand-50"
              onClick={() => {
                window.open('mailto:hello@axonstream.ai?subject=Pricing Information Request', '_blank');
              }}
            >
              Email: hello@axonstream.ai
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
