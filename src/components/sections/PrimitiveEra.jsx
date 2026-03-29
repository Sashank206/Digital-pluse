import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hand, Flame, Mountain } from 'lucide-react';

/**
 * Primitive Era - The Dawn of Humanity.
 * Focuses on tool making, fire discovery, and the first forms of language.
 */
const PrimitiveEra = () => {
  const { scrollYProgress } = useScroll();
  
  /**
   * These parallax effects help the background elements feel layered and deep.
   * As the user scrolls, the central glyph will grow and shift slightly.
   */
  const genesisVisualY = useTransform(scrollYProgress, [0.1, 0.3], [0, -100]);
  const genesisVisualScale = useTransform(scrollYProgress, [0.1, 0.3], [1, 1.2]);

  return (
    <section id="primitive" className="relative min-h-screen py-32 section-padding bg-gradient-to-b from-neutral-950 via-orange-950/20 to-neutral-950 overflow-hidden">
      
      {/* Texture Layer: A subtle noise pattern to make the background feel less 'flat' and more textured */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <svg fill="none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseEffect">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseEffect)" />
        </svg>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Visual Element: An abstract representation of the first digital sparks */}
        <motion.div 
          style={{ y: genesisVisualY, scale: genesisVisualScale }}
          className="relative order-2 lg:order-1"
        >
          <div className="w-full aspect-square md:aspect-[4/3] glass rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent transition-opacity group-hover:opacity-40" />
            <div className="relative z-10 h-full flex items-center justify-center">
              
              {/* This SVG draws itself when it comes into view, symbolizing the birth of protocols */}
              <svg viewBox="0 0 200 200" className="w-48 h-48 md:w-64 md:h-64 text-orange-400 opacity-50 drop-shadow-2xl">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                  d="M40,100 Q60,40 100,50 T160,100 T100,150 T40,100 Z" 
                  stroke="currentColor" strokeWidth="2" fill="none"
                />
                <motion.circle 
                  whileInView={{ scale: [1, 1.1, 1] }} 
                  transition={{ duration: 3, repeat: Infinity }}
                  cx="100" cy="100" r="30" fill="currentColor" fillOpacity="0.2" 
                />
              </svg>
            </div>
            
            {/* Some simple decorative indicators */}
            <div className="absolute top-4 left-4 text-orange-500/50 flex flex-col gap-4">
              <Hand size={32} />
              <div className="h-16 w-[1px] bg-orange-500/20" />
            </div>
          </div>
        </motion.div>

        {/* Story Section: The Digital Genesis */}
        <div className="order-1 lg:order-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-orange-500 leading-tight mb-4 lowercase italic font-orbitron">
              digital <br /> genesis
            </h2>
            <div className="h-1 w-24 bg-orange-600 mb-8 rounded-full" />
            
            <p className="text-neutral-400 text-lg leading-relaxed">
              Long before the modern web, we envisioned a shared digital nervous system. The invention of the ARPANET and the mastery of packet switching in the late 1960s marked the true beginning of the digital odyssey. It was the first step in our relentless drive to extend our collective intelligence across vast distances.
            </p>
          </motion.div>

          {/* Interactive milestone cards for the genesis era */}
          <div className="grid sm:grid-cols-2 gap-4 pt-8">
            <EraPillar 
              icon={<Hand size={20} className="text-orange-500" />} 
              title="Birth of Arpanet" 
              summary="The first packet-switched network that birthed the internet."
            />
            <EraPillar 
              icon={<Mountain size={20} className="text-orange-500" />} 
              title="TCP/IP Standard" 
              summary="The common language that allowed machines to speak to each other."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const EraPillar = ({ icon, title, summary }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className="glass-dark p-6 rounded-2xl hover:border-orange-500/30 transition-all duration-300 group"
  >
    <div className="bg-orange-600/10 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="font-semibold text-neutral-200 mb-2">{title}</h4>
    <p className="text-neutral-500 text-sm">{summary}</p>
  </motion.div>
);

export default PrimitiveEra;
