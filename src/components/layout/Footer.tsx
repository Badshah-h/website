'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { designSystem } from '@/lib/design-system';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would send this to your backend
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const navigation = {
    solutions: [
      { name: 'Platform Licensing', href: '#services' },
      { name: 'Custom Software', href: '#services' },
      { name: 'Hardware Procurement', href: '#services' },
      { name: 'Systems Integration', href: '#services' },
      { name: 'AI Automation', href: '#services' },
    ],
    platforms: [
      { name: 'AxonPulse', href: '#platforms' },
      { name: 'AxientOS', href: '#platforms' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Updates', href: '/news' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Support Center', href: '/support' },
      { name: 'Community', href: '/community' },
      { name: 'Blog', href: '/blog' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Security', href: '/security' },
    ],
  };

  const handleSmoothScroll = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <footer className="bg-brand-900 text-white">
      <div className="container">
        {/* Newsletter Section */}
        <motion.div
          className="py-12 border-b border-brand-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Stay Updated with Enterprise Innovation
              </h3>
              <p className="text-brand-200 leading-relaxed">
                Get the latest insights on enterprise technology, AI automation, 
                and digital transformation strategies delivered to your inbox.
              </p>
            </div>
            <div>
              {isSubscribed ? (
                <motion.div
                  className="text-center p-4 bg-green-600 rounded-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="font-semibold">Thank you for subscribing!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-brand-800 border-brand-700 text-white placeholder:text-brand-300 focus:ring-brand-300 focus:border-brand-300"
                  />
                  <Button
                    type="submit"
                    variant="accent"
                    className="px-8 whitespace-nowrap"
                  >
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg">
                    <div className="w-6 h-6 bg-brand-500 rounded-sm flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">AxonStream</h3>
                    <p className="text-xs text-brand-300 uppercase tracking-wide font-medium">
                      Technologies
                    </p>
                  </div>
                </div>

                <p className="text-brand-200 leading-relaxed mb-6">
                  AxonStream Technologies delivers comprehensive enterprise IT solutions, 
                  combining platform licensing, custom software development, hardware procurement, 
                  and intelligent AI automation to transform how businesses operate and compete.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-brand-300" />
                    <a
                      href="mailto:hello@axonstream.ai"
                      className="text-brand-200 hover:text-white transition-colors"
                    >
                      hello@axonstream.ai
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-brand-300" />
                    <a
                      href="tel:+1-555-0123"
                      className="text-brand-200 hover:text-white transition-colors"
                    >
                      +1 (555) 0123
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-brand-300" />
                    <span className="text-brand-200">Dubai, UAE</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Solutions</h4>
              <ul className="space-y-3">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleSmoothScroll(item.href)}
                      className="text-brand-200 hover:text-white transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Platforms</h4>
              <ul className="space-y-3 mb-8">
                {navigation.platforms.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleSmoothScroll(item.href)}
                      className="text-brand-200 hover:text-white transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    {item.href.startsWith('#') ? (
                      <button
                        onClick={() => handleSmoothScroll(item.href)}
                        className="text-brand-200 hover:text-white transition-colors text-left"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-brand-200 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-brand-200 hover:text-white transition-colors flex items-center"
                    >
                      {item.name}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-3 mb-8">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-brand-200 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Connect</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/company/axonstream-technologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center hover:bg-brand-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="py-8 border-t border-brand-700 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-brand-300">
            <p>© 2024 AxonStream Technologies. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <span>SOC 2 Certified</span>
              <span>•</span>
              <span>ISO 27001</span>
              <span>•</span>
              <span>GDPR Compliant</span>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="border-brand-700 text-brand-200 hover:bg-brand-800 hover:text-white"
            >
              Back to Top
              <ArrowRight className="ml-2 h-4 w-4 rotate-[-90deg]" />
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
