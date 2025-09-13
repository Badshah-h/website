'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign,
  Shield,
  Zap,
  Users,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      industry: 'Healthcare Network',
      title: 'Integrated Patient Management System',
      challenge: 'Large healthcare network struggled with fragmented systems, manual processes, and compliance reporting across 15 facilities.',
      solution: 'Implemented unified EHR platform with AI-powered workflow automation, HIPAA-compliant data integration, and real-time analytics dashboard.',
      outcome: 'Achieved 40% faster patient processing, 95% reduction in compliance violations, and $2.3M annual cost savings.',
      metrics: [
        { label: 'Patient Processing', value: '40%', trend: 'faster', icon: Clock },
        { label: 'Cost Savings', value: '$2.3M', trend: 'annually', icon: DollarSign },
        { label: 'Compliance Rate', value: '99.8%', trend: 'improvement', icon: Shield },
      ],
      color: 'text-red-600',
      bgGradient: 'from-red-50 to-pink-50',
      borderColor: 'border-red-200',
    },
    {
      industry: 'Financial Services',
      title: 'Automated Trading & Risk Management',
      challenge: 'Investment firm needed real-time risk assessment, automated compliance reporting, and high-frequency trading capabilities.',
      solution: 'Deployed AI-powered trading platform with integrated risk management, automated regulatory reporting, and real-time market analysis.',
      outcome: 'Increased trading volume by 300%, reduced risk exposure by 60%, and achieved 100% regulatory compliance automation.',
      metrics: [
        { label: 'Trading Volume', value: '300%', trend: 'increase', icon: TrendingUp },
        { label: 'Risk Reduction', value: '60%', trend: 'decrease', icon: Shield },
        { label: 'Automation Rate', value: '100%', trend: 'compliance', icon: Zap },
      ],
      color: 'text-green-600',
      bgGradient: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
    },
    {
      industry: 'Retail Chain',
      title: 'Omnichannel Customer Experience',
      challenge: 'Retail chain with 200+ stores lacked unified inventory visibility, customer insights, and integrated payment processing.',
      solution: 'Built comprehensive omnichannel platform with real-time inventory sync, customer analytics, and unified POS across all touchpoints.',
      outcome: 'Improved inventory accuracy to 99.5%, increased customer satisfaction by 45%, and boosted revenue by 25%.',
      metrics: [
        { label: 'Inventory Accuracy', value: '99.5%', trend: 'precision', icon: Zap },
        { label: 'Customer Satisfaction', value: '45%', trend: 'increase', icon: Users },
        { label: 'Revenue Growth', value: '25%', trend: 'boost', icon: TrendingUp },
      ],
      color: 'text-blue-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
    },
  ];

  return (
    <section id="case-studies" className="py-24 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 mb-6">
            Proven Enterprise Success Stories
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Real transformations, measurable results. See how we've helped enterprises across industries 
            modernize their operations, reduce costs, and accelerate growth.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2 
              }}
              viewport={{ once: true }}
            >
              <Card className={`h-full bg-gradient-to-br ${study.bgGradient} border-2 ${study.borderColor} hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                {/* Industry Tag */}
                <div className={`px-6 pt-6 pb-2`}>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${study.color} bg-white/80 backdrop-blur-sm`}>
                    {study.industry}
                  </span>
                </div>

                <CardHeader className="px-6 pt-4">
                  <CardTitle className="text-xl font-bold text-brand-900 leading-tight">
                    {study.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 space-y-6">
                  {/* Challenge */}
                  <div>
                    <h4 className="font-semibold text-brand-900 mb-2 text-sm uppercase tracking-wide">
                      Challenge
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="font-semibold text-brand-900 mb-2 text-sm uppercase tracking-wide">
                      Solution
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div>
                    <h4 className="font-semibold text-brand-900 mb-2 text-sm uppercase tracking-wide">
                      Outcome
                    </h4>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {study.outcome}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-3 pt-4 border-t border-white/50">
                    {study.metrics.map((metric, metricIndex) => {
                      const IconComponent = metric.icon;
                      return (
                        <motion.div
                          key={metric.label}
                          className="flex items-center justify-between"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.2 + metricIndex * 0.1 
                          }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center">
                            <IconComponent className={`h-4 w-4 ${study.color} mr-2`} />
                            <span className="text-sm text-muted">{metric.label}</span>
                          </div>
                          <div className="text-right">
                            <div className={`font-bold ${study.color}`}>{metric.value}</div>
                            <div className="text-xs text-muted">{metric.trend}</div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* View Case Study Button */}
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`w-full group hover:bg-white hover:${study.color} border-white/50 text-brand-900 hover:border-transparent`}
                    >
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-200 bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-900 mb-2">$50M+</div>
            <div className="text-sm text-muted font-medium">Client Savings Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-900 mb-2">200+</div>
            <div className="text-sm text-muted font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-900 mb-2">99.8%</div>
            <div className="text-sm text-muted font-medium">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-900 mb-2">15+</div>
            <div className="text-sm text-muted font-medium">Industries Served</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-brand-900 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Join the growing list of enterprises that have transformed their operations with our solutions. 
            Let's discuss how we can help you achieve similar results.
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
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-brand-50"
            >
              Download Case Studies
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
