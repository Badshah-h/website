'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { designSystem } from '@/lib/design-system';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-brand-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-brand-300/20 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute top-3/4 -right-4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -top-1/2 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full mix-blend-multiply filter blur-xl animate-bounce-gentle" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className={`${designSystem.typography.heroTitle} leading-tight`}>
                <span className="block">AxonStream</span>
                <span className="block gradient-text">Technologies</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className={`${designSystem.typography.heroSubtitle} leading-relaxed text-balance`}>
                Complete Enterprise IT: Software, Platforms, Hardware & Managed AI.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className={`${designSystem.typography.heroDescription} max-w-2xl`}>
                We deliver end-to-end enterprise solutions — platform licensing, custom SaaS, hardware procurement, network & CCTV integration, and managed AI automation & DevOps.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                variant="accent"
                size="xl"
                className="group shadow-2xl"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                variant="outline"
                size="xl"
                className="group"
                onClick={() => {
                  const element = document.querySelector('#services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Explore Solutions
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-sm text-muted font-medium mb-4">Trusted by enterprise leaders</p>
              <div className="flex items-center gap-8">
                <div className="text-xs text-muted">
                  <span className="block font-semibold text-brand-900">500+</span>
                  <span>Integrations</span>
                </div>
                <div className="text-xs text-muted">
                  <span className="block font-semibold text-brand-900">99.9%</span>
                  <span>Uptime SLA</span>
                </div>
                <div className="text-xs text-muted">
                  <span className="block font-semibold text-brand-900">24/7</span>
                  <span>Support</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Animated Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Network Visualization */}
            <div className="relative w-full max-w-lg mx-auto">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-auto"
                style={{ filter: 'drop-shadow(0 10px 30px rgba(25, 118, 210, 0.3))' }}
              >
                {/* Background Circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  strokeDasharray="8,4"
                  className="animate-spin"
                  style={{ animationDuration: '20s' }}
                />
                
                {/* Central Node */}
                <circle
                  cx="200"
                  cy="200"
                  r="20"
                  fill="url(#gradient2)"
                  className="animate-pulse"
                />
                
                {/* Orbiting Nodes */}
                <g className="animate-spin" style={{ animationDuration: '15s', transformOrigin: '200px 200px' }}>
                  <circle cx="200" cy="80" r="12" fill="#1976d2" className="animate-pulse" style={{ animationDelay: '0s' }} />
                  <circle cx="320" cy="200" r="10" fill="#ff8a00" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <circle cx="200" cy="320" r="14" fill="#64b5f6" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <circle cx="80" cy="200" r="8" fill="#0f4c81" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                </g>
                
                {/* Connection Lines */}
                <g className="opacity-60">
                  <motion.line
                    x1="200"
                    y1="200"
                    x2="200"
                    y2="80"
                    stroke="#1976d2"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                  <motion.line
                    x1="200"
                    y1="200"
                    x2="320"
                    y2="200"
                    stroke="#ff8a00"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.2 }}
                  />
                  <motion.line
                    x1="200"
                    y1="200"
                    x2="200"
                    y2="320"
                    stroke="#64b5f6"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.4 }}
                  />
                  <motion.line
                    x1="200"
                    y1="200"
                    x2="80"
                    y2="200"
                    stroke="#0f4c81"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.6 }}
                  />
                </g>
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#1976d2', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#ff8a00', stopOpacity: 0.6 }} />
                  </linearGradient>
                  <radialGradient id="gradient2" cx="50%" cy="50%">
                    <stop offset="0%" style={{ stopColor: '#09203f' }} />
                    <stop offset="100%" style={{ stopColor: '#1976d2' }} />
                  </radialGradient>
                </defs>
              </svg>

              {/* Floating Labels */}
              <motion.div
                className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-brand-900 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                AI Agents
              </motion.div>
              
              <motion.div
                className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-accent shadow-lg"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                Hardware
              </motion.div>
              
              <motion.div
                className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-brand-300 shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                Platforms
              </motion.div>
              
              <motion.div
                className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-brand-700 shadow-lg"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                Software
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
