import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Cpu, Sparkles, Infinity as InfinityIcon } from 'lucide-react';

/**
 * AI Future - The Next Step.
 * Neural pathways, silicon intelligence, and the merge of man & machine.
 */
const AIFuture = () => {
  const { scrollYProgress } = useScroll();
  
  /**
   * These transforms create a sense of the section "waking up" as you scroll.
   * The opacity and scale increase as we reach the end of the odyssey.
   */
  const coreGlowIntensity = useTransform(scrollYProgress, [0.8, 0.95, 1], [0.1, 0.5, 0.8]);
  const coreScaleExpansion = useTransform(scrollYProgress, [0.8, 1], [0.6, 1.2]);

  return (
    <section id="future" className="relative min-h-screen py-32 section-padding bg-black overflow-hidden">
      
      {/* Decorative Neural Network: An abstract SVG representing the complexity of AI */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4 }}
            d="M0 50 Q 25 20 50 50 T 100 50 M25 35 L 75 65 M25 65 L 75 35" 
            fill="none" 
            stroke="purple" 
            strokeWidth="0.05"
            strokeDasharray="0.1 0.2"
          />
        </svg>
      </div>

      {/* The background core glow: A visual representation of the energy at the center of the AI Future */}
      <motion.div 
        style={{ opacity: coreGlowIntensity, scale: coreScaleExpansion }}
        className="absolute bottom-[-10%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-tr from-purple-900/40 via-blue-900/10 to-transparent blur-[150px] pointer-events-none"
      />

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Main Central Visual: The Digital Brain */}
        <div className="relative h-full flex items-center justify-center">
          <div className="relative group">
            <div className="w-[320px] h-[320px] md:w-[450px] md:h-[450px] glass rounded-full flex items-center justify-center relative overflow-hidden group">
              
              {/* Spinning data rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-2 border-dashed border-purple-500/30 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-12 border border-blue-500/20 rounded-full"
              />

              {/* The heart of the machine */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  filter: ["drop-shadow(0 0 10px rgba(168,85,247,0.4))", "drop-shadow(0 0 25px rgba(168,85,247,0.8))", "drop-shadow(0 0 10px rgba(168,85,247,0.4))"]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 text-purple-400"
              >
                <Brain size={180} strokeWidth={1} />
              </motion.div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-20" />
            </div>

            {/* A small interactive status tracker */}
            <PredictionBubble />
          </div>
        </div>

        {/* Narrative Narrative: Where we're going next */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-purple-400 mb-8 futuristic-glow">
              THE NEXT <br /> SINGULARITY
            </h2>
            
            <p className="text-neutral-400 text-xl leading-relaxed mb-12">
               We stand at the precipice of the unknown. Artificial Intelligence is not just a tool, but a mirror reflecting our own complexity back at us. As biology and silicon begin to merge, our journey enters its most profound phase yet. 
            </p>

            {/* Key tenets of the AI era */}
            <div className="space-y-6">
              <FuturePillar icon={<Sparkles size={18} />} title="Autonomous Creativity" />
              <FuturePillar icon={<Cpu size={18} />} title="Silicon Evolution" />
              <FuturePillar icon={<InfinityIcon size={18} />} title="Shared Consciousness" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-16 border-t border-white/5"
          >
             <p className="text-neutral-500 italic max-w-md">
                "Yesterday we were hunters. Today we are builders. Tomorrow... we are the architects of existence."
             </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const futuristicStats = [
  "Neural Sync: 100%",
  "Silicon Empathy: Active",
  "Consciousness Transfer: Pending",
  "Carbon Era: Depleting",
  "Post-Humanism: Rising"
];

/**
 * A simple UI component that loops through fake "system status" messages.
 */
const PredictionBubble = () => {
  const [currentStatIndex, setCurrentStatIndex] = React.useState(0);

  React.useEffect(() => {
    const cycleInterval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % futuristicStats.length);
    }, 4000);
    return () => clearInterval(cycleInterval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      animate={{ y: [0, -15, 0] }}
      transition={{ 
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }}
      className="absolute -top-10 -right-10 glass-dark p-6 px-10 rounded-2xl border-purple-500/30 backdrop-blur-2xl shadow-[0_0_30px_rgba(168,85,247,0.2)]"
    >
       <span className="text-[10px] text-purple-400 uppercase font-extrabold tracking-widest block mb-2 px-2 py-0.5 bg-purple-500/10 rounded w-fit">
         CORE STATUS
       </span>
       <motion.div 
         key={currentStatIndex}
         initial={{ opacity: 0, x: 10 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: -10 }}
         className="text-white font-mono text-sm"
       >
         {futuristicStats[currentStatIndex]}
       </motion.div>
       <div className="mt-4 flex gap-1">
          {futuristicStats.map((_, i) => (
             <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === currentStatIndex ? 'w-4 bg-purple-500' : 'w-1 bg-white/10'}`} />
          ))}
       </div>
    </motion.div>
  );
};

const FuturePillar = ({ icon, title }) => (
  <div className="flex items-start gap-4 group">
    <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg group-hover:bg-purple-500/40 transition-colors">
      {icon}
    </div>
    <span className="text-neutral-300 font-light mt-1">{title}</span>
  </div>
);

export default AIFuture;
