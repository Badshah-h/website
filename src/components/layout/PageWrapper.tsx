'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.3,
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = '' }) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  React.useEffect(() => {
    // Reset loading state on route change
    setIsLoading(true);
  }, [pathname]);

  if (isLoading) {
    return (
      <motion.div
        className="fixed inset-0 bg-white z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-center">
          {/* Loading Animation */}
          <motion.div
            className="w-16 h-16 mx-auto mb-6 relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-accent rounded-2xl shadow-2xl" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-brand-500 to-accent rounded-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-2 bg-white rounded-xl flex items-center justify-center">
              <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent">
                AS
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-brand-900">
              AxonStream Technologies
            </h3>
            <p className="text-gray-600">
              Loading...
            </p>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
