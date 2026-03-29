import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Loading Screen - First impression before the odyssey begins.
 */
const logs = [
  "Synchronizing Neural Pathways...",
  "Calibrating Time Core...",
  "Initializing Industrial Engine...",
  "Establishing Global Network...",
  "Mapping Future Singularity...",
  "Preparing the Odyssey..."
];

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        
        // Update log message every 20 units
        if (Math.floor(prev / 17) > logIndex && logIndex < logs.length - 1) {
          setLogIndex(logIndex + 1);
        }
        
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete, logIndex]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.1,
        filter: "blur(20px)",
        transition: { duration: 1.2, ease: "circIn" } 
      }}
      className="fixed inset-0 z-[100] bg-neutral-950 flex flex-col items-center justify-center p-12 overflow-hidden"
    >
      {/* Background Pulse */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-sky-500/5 to-purple-600/10"
      />

      {/* Central Rotating Geometric Pulse */}
      <div className="relative mb-24 flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-56 h-56 md:w-72 md:h-72 border border-white/5 rounded-full relative"
        >
          <div className="absolute inset-0 border-t border-orange-500 rounded-full" />
        </motion.div>

        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-44 h-44 md:w-56 md:h-56 border border-white/5 rounded-full"
        >
          <div className="absolute inset-0 border-r border-sky-500 rounded-full" />
        </motion.div>

        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-24 h-24 md:w-32 md:h-32 bg-white/5 backdrop-blur-3xl rounded-full flex items-center justify-center border border-white/10"
        >
          <div className="w-12 h-12 bg-white rounded-full blur-2xl animate-pulse opacity-50" />
          <span className="text-white font-black text-xl md:text-2xl font-orbitron">O</span>
        </motion.div>
      </div>

      <div className="w-full max-w-sm text-center relative z-10">
         <motion.h1 
           animate={{ opacity: [1, 0.5, 1] }}
           transition={{ duration: 1.5, repeat: Infinity }}
           className="text-sm font-orbitron text-white mb-8 tracking-[1em] uppercase"
         >
           CALIBRATING
         </motion.h1>
         
         {/* Custom Progress Bar */}
         <div className="relative h-1 w-full bg-white/5 rounded-full overflow-hidden mb-6 border border-white/10">
            <motion.div 
              animate={{ 
                left: `${progress - 100}%`,
              }}
              style={{ width: "100%" }}
              className="absolute inset-0 bg-gradient-to-r from-orange-500 via-sky-500 to-purple-600"
            />
         </div>
         
         <div className="flex flex-col gap-2">
            <span className="text-white/60 text-[10px] font-mono tracking-widest uppercase">
              {progress}% System Integrity
            </span>
            <motion.span 
              key={logIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sky-500 text-[8px] font-mono tracking-[0.2em] uppercase italic"
            >
              &gt; {logs[logIndex]}
            </motion.span>
         </div>
      </div>

      {/* Decorative scanline */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />
    </motion.div>
  );
};

export default LoadingScreen;
