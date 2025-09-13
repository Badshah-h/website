'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { designSystem } from '@/lib/design-system';

const navigationItems = [
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Industries', href: '/industries' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      // For external pages, let Link handle navigation
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="relative">
      {/* Top Ribbon - Optional */}
      <div className="bg-brand-900 text-white py-2 px-4 text-center text-sm">
        <div className="container">
          <p className="flex items-center justify-center gap-1">
            We provide enterprise licensing, full-stack engineering, and managed AI —{' '}
            <a
              href="mailto:hello@axonstream.ai"
              className="text-brand-300 hover:text-white transition-colors underline decoration-dotted underline-offset-2"
            >
              hello@axonstream.ai
            </a>
            <ExternalLink className="h-3 w-3" />
          </p>
        </div>
      </div>

      {/* Main Header */}
      <motion.nav
        className={cn(
          'sticky top-0 z-50 w-full border-b transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-gray-200 shadow-lg'
            : 'bg-white border-gray-100'
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 group focus-ring rounded-lg"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-brand-gradient rounded-lg group-hover:scale-105 transition-transform">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-brand-500 rounded-full"></div>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-brand-900 group-hover:text-brand-700 transition-colors">
                  AxonStream
                </h1>
                <p className="text-xs text-muted uppercase tracking-wide font-medium">
                  Technologies
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-brand-500 font-medium transition-colors focus-ring px-2 py-1 rounded-md relative group"
                  onClick={() => handleNavigation(item.href)}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button + Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Link href="/contact">
                <Button
                  variant="accent"
                  size="default"
                  className="hidden sm:inline-flex"
                >
                  Contact Sales
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container py-4">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="text-left text-gray-700 hover:text-brand-500 font-medium transition-colors py-2 px-4 rounded-lg hover:bg-gray-50 focus-ring"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link href="/contact" className="block sm:hidden">
                    <Button
                      variant="accent"
                      size="default"
                      className="w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </header>
  );
};

export default Header;
