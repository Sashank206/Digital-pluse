import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Settings, Cog, Zap, Factory, Globe, Wifi } from 'lucide-react';

/**
 * Industrial Era - The Age of Machines.
 * Steel, steam, and the mechanization of progress.
 */
const IndustrialEra = () => {
  const { scrollYProgress } = useScroll();
  
  /**
   * We want these background gears to rotate in opposite directions 
   * as the user scrolls, creating a sense of a complex machine in motion.
   */
  const gearRotationClockwise = useTransform(scrollYProgress, [0.3, 0.5], [0, 360]);
  const gearRotationCounterClockwise = useTransform(scrollYProgress, [0.3, 0.5], [360, 0]);

  return (
    <section id="industrial" className="relative min-h-screen py-32 section-padding bg-gradient-to-b from-neutral-950 via-zinc-900 to-neutral-950 overflow-hidden">
      
      {/* Background Decorative Gears: Subtle Zinc-colored gears to fill the background space */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.05] pointer-events-none">
        <motion.div style={{ rotate: gearRotationClockwise }} className="w-full h-full text-zinc-300">
           <Settings size={500} strokeWidth={0.5} />
        </motion.div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            {/* A small tag to indicate the specific time period we're exploring */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-0.5 w-12 bg-zinc-500 rounded-full" />
              <span className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">1990 - 2000</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-zinc-100 leading-tight mb-8">
               THE WEB <br /> EXPLOSION
            </h2>
            
            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
               Tim Berners-Lee envisioned a world where information was accessible through a single click. The 1990s marked the era of the browser wars, the growth of the first search engines, and the birth of the e-commerce economy. The World Wide Web transformed from a research tool into a public utility.
            </p>
          </motion.div>

          {/* Key technological milestones of the early web era */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {[
              { icon: <Globe />, title: "Mosaic Browser" },
              { icon: <Wifi />, title: "Hyperlinks" },
              { icon: <Factory />, title: "Dot-Com" }
            ].map((milestone, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 border border-zinc-700/50 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-white transition-all duration-500 group"
              >
                <div className="text-zinc-500 group-hover:text-white transition-colors">
                  {React.cloneElement(milestone.icon, { size: 32, strokeWidth: 1.5 })}
                </div>
                <span className="text-[10px] uppercase tracking-wider text-zinc-600 font-bold">{milestone.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual composition area: Multiple gears working together to symbolize 'The Machine' */}
        <div className="relative">
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass p-10 flex items-center justify-center">
             <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
             
             {/* The gears themselves - they react to the overall scroll progress of the section */}
             <div className="relative z-10 flex gap-12 flex-wrap items-center justify-center">
                <motion.div style={{ rotate: gearRotationClockwise }} className="text-zinc-400 drop-shadow-lg">
                   <Settings size={140} strokeWidth={1} />
                </motion.div>
                <motion.div style={{ rotate: gearRotationCounterClockwise }} className="text-zinc-500 mt-12 drop-shadow-md">
                   <Cog size={100} strokeWidth={1} />
                </motion.div>
                <motion.div style={{ rotate: gearRotationClockwise }} className="text-zinc-600 drop-shadow-sm">
                   <Settings size={60} strokeWidth={1} />
                </motion.div>
             </div>
             
             {/* A subtle blur overlay to add depth and keep the focus on the main gears */}
             <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm pointer-events-none opacity-50 z-0" />
          </div>

          {/* A floating decorative cog that spins independently */}
          <motion.div 
            animate={{ 
               rotate: [0, 360],
               y: [0, 20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 text-zinc-400/20"
          >
             <Cog size={120} />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default IndustrialEra;
