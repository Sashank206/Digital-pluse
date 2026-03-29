import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, ChevronDown } from 'lucide-react';

/**
 * Hero Section - The entry point of the Digital Odyssey.
 * Includes initial loading reveal and floating background elements.
 */
const Hero = () => {
  /**
   * We want each letter of our title to "pop" into view one by one.
   * This creates a more dynamic and engaging entrance for the visitor.
   */
  const titleLetterStyles = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] 
      }
    })
  };

  const mainTitle = "Digital Pulse";

  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col items-center justify-center section-padding overflow-hidden">
      
      {/* Background Grid: Gives that 'cyberspace' or 'blueprint' feel right from the start */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Decorative Glows: Just to add some color and life to the dark background */}
      <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] glow-bg" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] glow-bg" />
      
      {/* Antigravity Hack: Floating particles to make the screen feel like gravity is broken */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div 
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-=100", "+=50"],
              opacity: [0, 0.4, 0],
              scale: [0, 1.2, 0.8]
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-orange-500 rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* The main content area: Title and Intro text */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-block"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-orange-500 mb-6 font-bold bg-orange-500/10 py-2 px-4 rounded-full border border-orange-500/20">
            Evolution of the Internet
          </p>
        </motion.div>
        
        {/* We split the title into individual letters so we can animate them separately */}
        <h1 className="text-4xl md:text-7xl lg:text-[9rem] mb-8 flex flex-nowrap justify-center items-center overflow-hidden font-black uppercase tracking-tighter whitespace-nowrap">
          {mainTitle.split("").map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={titleLetterStyles}
              initial="hidden"
              animate="visible"
              className={letter === " " ? "mr-4" : "hover:text-orange-500 transition-colors cursor-default"}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="max-w-2xl text-neutral-400 text-lg md:text-xl font-light leading-relaxed mx-auto italic border-l border-white/10 pl-6"
        >
          "Witness the transformation from a simple packet-switched network to a global neural system of 8 billion minds."
        </motion.p>
      </div>

      {/* Scroll Indicator: A gentle hint to let the user know there's more to explore below */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-12 flex flex-col items-center gap-4 text-neutral-500"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-semibold animate-pulse">Scroll to descend</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-orange-500" />
        </motion.div>
      </motion.div>

      {/* A subtle scanline animation to add to the digital/tech aesthetic */}
      <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden opacity-10">
        <motion.div 
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-full h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"
        />
      </div>

      {/* Decorative SVG lines: Just some abstract geometry in the background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            d="M0 50 Q 50 20 100 50" 
            fill="none" 
            stroke="white" 
            strokeWidth="0.05" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
