'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function ServicesLoading() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Services Icon Animation */}
        <motion.div
          className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center shadow-2xl"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Shield className="h-12 w-12 text-white" />
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          className="flex space-x-2 justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-brand-500 to-brand-700 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-bold text-brand-900">
            Enterprise IT Services
          </h2>
          <p className="text-gray-600 font-medium">
            Loading comprehensive solutions...
          </p>
        </motion.div>
      </div>
    </div>
  );
}
