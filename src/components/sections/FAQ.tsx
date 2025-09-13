'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  HelpCircle,
  ArrowRight,
  BarChart3,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { designSystem, getSectionHeaderClasses } from '@/lib/design-system';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'What is your enterprise platform licensing process?',
      answer: 'Our licensing process begins with a comprehensive assessment of your current software inventory and business needs. We work directly with vendors like Microsoft, Oracle, and SAP to negotiate volume discounts, ensure compliance, and optimize your licensing structure. We handle all procurement, compliance tracking, and renewal management to ensure you get the best value while staying compliant with vendor requirements.',
    },
    {
      question: 'What deployment options do you support - on-premise, cloud, or hybrid?',
      answer: 'We support all deployment models to match your security, compliance, and operational requirements. Our solutions can be deployed on-premise for maximum control, in public cloud environments (AWS, Azure, GCP) for scalability, or in hybrid configurations that combine both approaches. We also support private cloud deployments and edge computing scenarios based on your specific needs.',
    },
    {
      question: 'What are your support hours and response times?',
      answer: 'Our support tiers offer different response times: Bronze (4-hour response during business hours), Silver (2-hour response with extended hours), and Gold (30-minute response with 24/7 coverage). All tiers include dedicated account management, proactive monitoring, and escalation procedures for critical issues. Our Gold tier includes an emergency response team for mission-critical situations.',
    },
    {
      question: 'How long does a typical enterprise integration take?',
      answer: 'Integration timelines vary based on complexity and scope, but typical enterprise projects range from 30-90 days. Simple platform integrations may take 2-4 weeks, while complex multi-system implementations with custom development can take 3-6 months. We provide detailed project timelines during our assessment phase and use agile methodologies to deliver value incrementally throughout the process.',
    },
    {
      question: 'Do you provide training and change management support?',
      answer: 'Yes, comprehensive training and change management are integral parts of our implementation process. We provide technical training for your IT teams, end-user training for system operators, and executive briefings for leadership. Our change management approach includes communication planning, stakeholder engagement, and ongoing support to ensure successful adoption of new systems and processes.',
    },
    {
      question: 'How do you ensure data security and regulatory compliance?',
      answer: 'Security and compliance are built into every solution we deliver. We maintain certifications for major compliance frameworks (SOC 2, ISO 27001, HIPAA, PCI DSS) and implement enterprise-grade security controls including encryption at rest and in transit, multi-factor authentication, role-based access controls, and comprehensive audit logging. We conduct regular security assessments and provide compliance reporting as needed.',
    },
    {
      question: 'What makes your AI automation solutions different?',
      answer: 'Our AI solutions combine enterprise-grade reliability with cutting-edge capabilities. We use RAG (Retrieval-Augmented Generation) for accurate, contextual responses, implement proper governance frameworks for AI decision-making, and ensure all AI systems integrate seamlessly with your existing enterprise workflows. Unlike generic AI tools, our solutions are specifically designed for enterprise compliance, auditability, and scalability.',
    },
    {
      question: 'Can you work with our existing IT team and vendors?',
      answer: 'Absolutely. We excel at working collaboratively with your internal IT teams and existing vendor relationships. We can augment your team with specialized expertise, provide training and knowledge transfer, or take full responsibility for specific components while maintaining integration with your broader technology ecosystem. Our goal is to enhance your capabilities, not replace your valuable internal resources.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className={`${designSystem.spacing.container} relative`}>
        {/* Section Header */}
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
              FAQ
            </span>
          </div>

          <h2 className={`${designSystem.typography.sectionTitle} mb-6`}>
            Frequently Asked
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent">  
                    {' '} Questions
                  </span>
                  
           </h2>
           <div className={`${designSystem.elements.sectionDivider} mb-6`} />

          <p className={`${designSystem.typography.sectionSubtitle} max-w-3xl mx-auto leading-relaxed`}>
            Get answers to common questions about our enterprise solutions, implementation process, 
            support services, and technology capabilities.
          </p>
        </motion.div>

        <motion.div
          className={getSectionHeaderClasses()}
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow }}
          viewport={{ once: true }}
        > 
         
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className={getSectionHeaderClasses()}
            initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-b-0">
                  <AccordionTrigger className="text-left px-6 py-6 hover:bg-gray-50 text-lg font-semibold text-brand-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
