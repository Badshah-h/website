'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AxonStreamIntro from './AxonStreamIntro';

const IntroDemo: React.FC = () => {
  const [showIntro, setShowIntro] = React.useState(false);

  const handleShowIntro = () => {
    setShowIntro(true);
  };

  const handleCloseIntro = () => {
    setShowIntro(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <Button
        variant="outline"
        size="lg"
        className="group bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
        onClick={handleShowIntro}
      >
        <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
        Watch Intro Video
      </Button>

      {/* Intro Overlay */}
      <AnimatePresence>
        {showIntro && (
          <>
            <AxonStreamIntro onComplete={handleCloseIntro} />
            
            {/* Close Button */}
            <motion.button
              className="fixed top-6 left-6 z-[60] bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
              onClick={handleCloseIntro}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 1 }}
            >
              <X className="h-6 w-6" />
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default IntroDemo;
