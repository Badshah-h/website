'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* AxonStream Logo Animation */}
        <motion.div
          className="w-24 h-24 mx-auto mb-8 relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-accent rounded-2xl shadow-2xl" />
          <div className="absolute inset-2 bg-white rounded-xl flex items-center justify-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent">
              AS
            </div>
          </div>
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
              className="w-3 h-3 bg-gradient-to-r from-brand-500 to-accent rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
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
            AxonStream Technologies
          </h2>
          <p className="text-gray-600 font-medium">
            Loading enterprise solutions...
          </p>
        </motion.div>
      </div>
    </div>
  );
}
