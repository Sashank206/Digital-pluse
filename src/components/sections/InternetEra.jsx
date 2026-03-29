import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Wifi, Share2, Cpu } from 'lucide-react';

/**
 * Internet Era - The Digital Awakening.
 * Connecting minds across continents in real-time.
 */
const InternetEra = () => {
  const { scrollYProgress } = useScroll();
  
  /**
   * We calculate a horizontal offset and opacity shift for the 
   * "data packets" that float across the screen as you scroll.
   */
  const packetMovement = useTransform(scrollYProgress, [0.5, 0.7], [-200, 200]);
  const packetVisibility = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]);

  return (
    <section id="internet" className="relative min-h-screen py-32 section-padding bg-gradient-to-b from-neutral-950 via-sky-950/20 to-neutral-950 overflow-hidden">
      
      {/* Background Matrix Rain: A canvas-based effect that represents the vast flow of information */}
      <MatrixBackgroundOverlay />

      {/* Decorative Data Lines: Subtle streaks of light moving across the background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div 
            key={i}
            initial={{ left: '-10%', top: `${i * 7}%`, opacity: Math.random() }}
            animate={{ left: '110%' }}
            transition={{ 
              duration: 3 + Math.random() * 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5 
            }}
            className="absolute h-[1px] w-64 bg-sky-400 blur-[2px]"
          />
        ))}
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Main Network Visual: The pulsing core of our digital world */}
        <div className="relative group">
          <div className="w-full aspect-square rounded-full border border-sky-400/20 glass flex items-center justify-center p-12 relative">
            
            {/* The core 'heartbeat' pulse of the network */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-48 h-48 bg-sky-500/20 rounded-full blur-[60px]"
            />
            
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="relative z-10 w-full h-full flex items-center justify-center"
            >
               <Globe size={180} className="text-sky-400 stroke-[1]" />
            </motion.div>
            
            {/* Icons representing the different ways we stay connected */}
            {[Wifi, Share2, Cpu, Globe].map((Icon, i) => (
              <motion.div 
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: 15 + i*5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 p-4"
              >
                <div className="glass h-12 w-12 rounded-xl flex items-center justify-center text-sky-300 transform" 
                     style={{ transform: `rotate(-${360}deg)` }}>
                  <Icon size={20} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating Data Packets: Visualizing the information being sent across space */}
          <motion.div 
            style={{ x: packetMovement, opacity: packetVisibility }}
            className="hidden md:flex absolute top-1/2 left-0 right-0 h-4 items-center justify-between"
          >
             <div className="h-2 w-10 bg-sky-400 rounded-full blur-sm" />
             <div className="h-2 w-6 bg-sky-400 rounded-full blur-sm" />
             <div className="h-2 w-8 bg-sky-400 rounded-full blur-sm" />
          </motion.div>
        </div>

        {/* Narrative Section: The story of connectivity */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-sky-400 leading-tight mb-8 font-orbitron">
               DIGITAL <br /> INTERCONNECTIVITY
            </h2>
            <div className="h-0.5 w-[80%] bg-gradient-to-r from-sky-500 to-transparent mb-12" />
            
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
               Complexity changed. We were no longer limited by physical distance. Information became the new gold. The internet bridged the gap between cultures and minds, creating a global nervous system that beats with the data of 8 billion souls.
            </p>

            {/* Quick stats to emphasize the scale of the Social Era */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="block text-3xl font-bold font-orbitron text-white">4.9B+</span>
                <span className="text-[10px] uppercase text-sky-500 font-bold tracking-widest">Active Minds</span>
              </div>
              <div>
                <span className="block text-3xl font-bold font-orbitron text-white">YBTs+</span>
                <span className="text-[10px] uppercase text-sky-500 font-bold tracking-widest">Global Traffic</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InternetEra;

/**
 * A performance-optimized canvas component that renders the classic matrix-style rain.
 * It's low-impact on the browser but high-impact for the user experience.
 */
const MatrixBackgroundOverlay = () => {
  const rainCanvasRef = React.useRef(null);

  React.useEffect(() => {
    const matrixCanvas = rainCanvasRef.current;
    if (!matrixCanvas) return;
    const canvasContext = matrixCanvas.getContext('2d');
    
    let screenWidth = matrixCanvas.width = window.innerWidth;
    let screenHeight = matrixCanvas.height = window.innerHeight;
    
    const displayCharacters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charSize = 16;
    const totalColumns = Math.floor(screenWidth / charSize);
    const dropPositions = new Array(totalColumns).fill(1);

    const renderFrame = () => {
      canvasContext.fillStyle = 'rgba(0, 0, 0, 0.05)';
      canvasContext.fillRect(0, 0, screenWidth, screenHeight);

      canvasContext.fillStyle = '#0ea5e9'; // sky-500
      canvasContext.font = `${charSize}px monospace`;

      for (let i = 0; i < dropPositions.length; i++) {
        const randomChar = displayCharacters.charAt(Math.floor(Math.random() * displayCharacters.length));
        canvasContext.fillText(randomChar, i * charSize, dropPositions[i] * charSize);

        if (dropPositions[i] * charSize > screenHeight && Math.random() > 0.975) {
          dropPositions[i] = 0;
        }
        dropPositions[i]++;
      }
    };

    const renderInterval = setInterval(renderFrame, 50);

    const handleWindowResize = () => {
      screenWidth = matrixCanvas.width = window.innerWidth;
      screenHeight = matrixCanvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      clearInterval(renderInterval);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <canvas 
      ref={rainCanvasRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]" 
    />
  );
};
