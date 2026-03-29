import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Components
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import Hero from './components/sections/Hero';
import PrimitiveEra from './components/sections/PrimitiveEra';
import IndustrialEra from './components/sections/IndustrialEra';
import InternetEra from './components/sections/InternetEra';
import AIFuture from './components/sections/AIFuture';

/**
 * Main App Component - Digital Odyssey
 * This website follows the evolution of technology from primitive to AI future.
 * Uses Framer Motion for scroll-based animations and custom interactions.
 */
function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  /**
   * We'll shift the background color smoothly as the user travels through the eras.
   * Each color represents a different mood: from the orange of the dawn to the purple of the future.
   */
  const timelineBackground = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#0a0a0a", "#1a0f0a", "#0f1217", "#0a141a", "#0f0a1a"]
  );

  /**
   * This logic handles our custom cursor. It follows the mouse movement 
   * to add that extra layer of immersion to the experience.
   */
  useEffect(() => {
    const handleMouseMovement = (event) => {
       const cursorElement = document.getElementById('custom-cursor');
       if (cursorElement) {
         cursorElement.style.left = `${event.clientX}px`;
         cursorElement.style.top = `${event.clientY}px`;
       }
    };

    window.addEventListener('mousemove', handleMouseMovement);
    return () => window.removeEventListener('mousemove', handleMouseMovement);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-purple-500 selection:text-white overflow-x-hidden bg-neutral-950">
      
      {/* Our custom cursor - hidden on mobile to avoid clutter */}
      <div 
        id="custom-cursor" 
        className="fixed w-4 h-4 border-2 border-white/40 rounded-full pointer-events-none z-[999] mix-blend-difference hidden md:block transition-all duration-150 transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
      />

      {/* The entrance transition: Shows the loading screen until the system is ready */}
      <AnimatePresence>
        {isAppLoading && (
          <LoadingScreen onComplete={() => setIsAppLoading(false)} />
        )}
      </AnimatePresence>

      {/* The Time Travel Effect: The background color transitions as you scroll */}
      <motion.div 
        style={{ 
          backgroundColor: timelineBackground 
        }}
        className="fixed inset-0 pointer-events-none z-0 transition-colors duration-1000"
      />

      <div className={`transition-opacity duration-1000 ${isAppLoading ? 'opacity-0' : 'opacity-100'}`}>
        {!isAppLoading && (
          <>
            <Navbar />
            <Timeline />
          </>
        )}

        {/* Subtle background glow elements to give the page more depth */}
        <div className="fixed inset-0 pointer-events-none z-0">
           <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-purple-900/10 blur-[150px] animate-pulse" />
           <div className="absolute bottom-[-20%] left-[-10%] w-[80%] h-[80%] bg-sky-900/10 blur-[150px] animate-pulse" />
        </div>

        {/* The main sections of our Digital Odyssey */}
        <main className="relative z-10">
           {/* Each component below represents a specific era in internet history */}
           <Hero />
           <PrimitiveEra />
           <IndustrialEra />
           <InternetEra />
           <AIFuture />
           
           {/* Final wrap-up footer with a smooth return-to-top feature */}
           <footer className="py-24 px-6 md:px-12 border-t border-white/5 bg-black/80 backdrop-blur-3xl flex flex-col items-center justify-center text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="h-1 w-24 bg-gradient-to-r from-orange-500 via-sky-500 to-purple-600 rounded-full mb-8 mx-auto" />
                <h3 className="text-3xl md:text-4xl font-orbitron text-white mb-4 tracking-widest uppercase">The Journey Continues.</h3>
                <p className="text-neutral-500 max-w-xl mx-auto italic text-lg font-light leading-relaxed">
                   "The story of the web is not just about the protocols we build, but the connections we forge. Our digital odyssey is just getting started."
                </p>
              </motion.div>
              
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="glass-dark px-10 py-4 rounded-full text-xs uppercase font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all mb-16"
              >
                Back to Genesis
              </button>

              <div className="text-[10px] uppercase tracking-[0.6em] text-neutral-700 font-bold">
                 &copy; 2026 Sashank | Odyssey
              </div>
           </footer>
        </main>
      </div>

      {/* A light grain effect to make the design feel more organic and premium */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}

export default App;
