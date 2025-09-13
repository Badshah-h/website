'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { designSystem } from '@/lib/design-system';

const TrustLogos: React.FC = () => {
  const logos = [
    {
      name: 'Microsoft',
      width: 120,
      height: 40,
    },
    {
      name: 'Oracle',
      width: 100,
      height: 40,
    },
    {
      name: 'SAP',
      width: 80,
      height: 40,
    },
    {
      name: 'AWS',
      width: 90,
      height: 40,
    },
    {
      name: 'Cisco',
      width: 100,
      height: 40,
    },
    {
      name: 'VMware',
      width: 110,
      height: 40,
    },
  ];

  return (
    <section className={`${designSystem.spacing.sectionSmall} bg-white border-t border-gray-100`}>
      <div className={designSystem.spacing.container}>
        <motion.div
          className="text-center mb-12"
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.medium }}
          viewport={{ once: true }}
        >
          <p className={`${designSystem.typography.bodySmall} font-medium text-gray-500 uppercase tracking-wider mb-8`}>
            Trusted by enterprise leaders worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              className="flex items-center justify-center"
              initial={designSystem.animations.fadeInUp.hidden}
              whileInView={designSystem.animations.fadeInUp.visible}
              transition={{ 
                duration: designSystem.animations.duration.medium, 
                delay: designSystem.animations.staggerDelay(index)
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: designSystem.animations.duration.fast }
              }}
            >
              <div 
                className="flex items-center justify-center bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-200 cursor-pointer opacity-60 hover:opacity-100"
                style={{
                  width: logo.width + 32,
                  height: logo.height + 32,
                }}
              >
                {/* Placeholder logo - using text for now, can be replaced with actual logos */}
                <span 
                  className="font-bold text-gray-600 text-center"
                  style={{
                    fontSize: logo.name.length > 6 ? '12px' : '14px'
                  }}
                >
                  {logo.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-100"
          initial={designSystem.animations.fadeInUp.hidden}
          whileInView={designSystem.animations.fadeInUp.visible}
          transition={{ duration: designSystem.animations.duration.slow }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-900 mb-2">500+</div>
            <div className="text-sm text-muted font-medium">Platform Integrations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-900 mb-2">99.9%</div>
            <div className="text-sm text-muted font-medium">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-900 mb-2">24/7</div>
            <div className="text-sm text-muted font-medium">Expert Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-900 mb-2">150+</div>
            <div className="text-sm text-muted font-medium">Enterprise Clients</div>
          </div>
        </motion.div>

        {/* Partnership Message */}
        <motion.div
          className="text-center mt-12"
          initial={designSystem.animations.fadeIn.hidden}
          whileInView={designSystem.animations.fadeIn.visible}
          transition={{ duration: designSystem.animations.duration.medium, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className={`${designSystem.typography.bodyMedium} max-w-2xl mx-auto leading-relaxed`}>
            We partner with leading technology vendors to deliver comprehensive enterprise solutions. 
            From Microsoft Azure and Office 365 to Oracle databases and SAP ERP systems, 
            we provide end-to-end licensing, implementation, and support.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustLogos;
