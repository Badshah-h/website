'use client';

import { motion } from 'framer-motion';
import { Zap, Brain } from 'lucide-react';

export default function ProductsLoading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-brand-900 to-accent/90 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Dual Product Icons Animation */}
        <motion.div
          className="flex justify-center space-x-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-20 h-20 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center shadow-2xl"
            initial={{ x: -50, rotate: -90 }}
            animate={{ x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Zap className="h-10 w-10 text-white" />
          </motion.div>
          
          <motion.div
            className="w-20 h-20 bg-gradient-to-br from-accent to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl"
            initial={{ x: 50, rotate: 90 }}
            animate={{ x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <Brain className="h-10 w-10 text-white" />
          </motion.div>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          className="flex space-x-2 justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-white/80 rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-bold text-white">
            Enterprise Platforms
          </h2>
          <p className="text-white/80 font-medium">
            Loading AxonPulse & AxientOS...
          </p>
        </motion.div>
      </div>
    </div>
  );
}
