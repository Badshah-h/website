'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { designSystem } from '@/lib/design-system';

interface ModernPageHeroProps {
  badge: {
    icon: LucideIcon;
    text: string;
  };
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  stats?: Array<{
    number: string;
    label: string;
    icon: LucideIcon;
  }>;
  gradient: string;
  backgroundPattern?: 'dots' | 'mesh' | 'waves';
}

const ModernPageHero: React.FC<ModernPageHeroProps> = ({
  badge,
  title,
  highlight,
  subtitle,
  description,
  stats,
  gradient,
  backgroundPattern = 'mesh'
}) => {
  const BadgeIcon = badge.icon;

  return (
    <section className={`relative min-h-[80vh] flex items-center ${gradient} overflow-hidden`}>
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {backgroundPattern === 'mesh' && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.2)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
        )}
        {backgroundPattern === 'dots' && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:32px_32px]" />
        )}
        {backgroundPattern === 'waves' && (
          <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
        )}
      </div>

      <div className="container relative">
        <div className="max-w-6xl">
          {/* Modern Split Layout */}
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Modern Badge */}
                <div className={designSystem.elements.heroBadge}>
                  <BadgeIcon className={designSystem.elements.heroBadgeIcon} />
                  <span className={designSystem.elements.heroBadgeText}>
                    {badge.text}
                  </span>
                </div>

                {/* Modern Typography Hierarchy */}
                <div className="space-y-6">
                  <h1 className={`${designSystem.typography.heroTitleWhite} leading-tight tracking-tight`}>
                    {title}
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/60 mt-2">
                      {highlight}
                    </span>
                  </h1>
                  
                  <div className={designSystem.elements.sectionDivider.replace('mx-auto', '')} />
                  
                  <p className={`${designSystem.typography.heroSubtitleWhite} leading-relaxed max-w-2xl`}>
                    {subtitle}
                  </p>
                  
                  <p className={`${designSystem.typography.heroDescriptionWhite} max-w-3xl`}>
                    {description}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Interactive Stats */}
            {stats && (
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6"
                >
                  {stats.map((stat, index) => {
                    const StatIcon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className="flex items-center group"
                      >
                        <div className={`${designSystem.elements.stepIconContainer} bg-white/20 backdrop-blur-sm mr-6 group-hover:bg-white/30 transition-all duration-300`}>
                          <StatIcon className={`${designSystem.elements.stepIconSize} text-white`} />
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-white mb-1">
                            {stat.number}
                          </div>
                          <div className="text-white/80 font-medium">
                            {stat.label}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modern Floating Elements */}
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
    </section>
  );
};

export default ModernPageHero;
