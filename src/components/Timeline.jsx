import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Interactive Timeline component that tracks scroll progress
 * Shows a vertical line that fills as you scroll through the odyssey.
 */
const Timeline = () => {
  const { scrollYProgress } = useScroll();
  
  /**
   * We use a spring animation to make the scroll bar feel more responsive 
   * and organic. It follows the scroll position but with a bit of "weight".
   */
  const smoothProgressBar = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  /**
   * These are the stop-points in our story. Clicking them will take 
   * the user directly to that specific era.
   */
  const OdysseyMilestones = [
    { id: 'hero', title: 'Start', highlight: 'bg-white' },
    { id: 'primitive', title: 'Genesis (60s)', highlight: 'bg-orange-500' },
    { id: 'industrial', title: 'Dot-Com (90s)', highlight: 'bg-neutral-500' },
    { id: 'internet', title: 'Social Era', highlight: 'bg-sky-500' },
    { id: 'future', title: 'Singularity', highlight: 'bg-purple-600' }
  ];

  /**
   * A simple helper to handle smooth scrolling when a user clicks a milestone.
   */
  const jumpToEra = (sectionId) => {
    const eraElement = document.getElementById(sectionId);
    if (eraElement) {
      eraElement.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-4 md:left-8 top-0 bottom-0 w-12 flex flex-col items-center justify-center z-40 group/timeline pointer-events-none">
      
      {/* Background Track: The path of our story */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/10" />
      
      {/* Progress Filler: Fills up as you move forward in time */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-orange-500 via-sky-500 to-purple-600 origin-top rounded-full"
        style={{ scaleY: smoothProgressBar }}
      />
      
      {/* Interactive Markers: Individual stop-points for navigation */}
      <div className="relative h-[60vh] flex flex-col justify-between items-center pointer-events-auto">
        {OdysseyMilestones.map((milestone) => (
          <div key={milestone.id} className="relative group/timeline-marker flex items-center justify-center">
            
            {/* The clickable dot */}
            <button 
              onClick={() => jumpToEra(milestone.id)}
              className="w-8 h-8 flex items-center justify-center group-hover/timeline-marker:scale-125 transition-transform duration-300"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className={`w-2 h-2 rounded-full border border-white/40 transition-all duration-500 group-hover/timeline-marker:w-4 group-hover/timeline-marker:h-4 group-hover/timeline-marker:border-white ${milestone.highlight}`}
              />
            </button>
            
            {/* Tooltip Label: Reveals which era the dot represents */}
            <span className="absolute left-10 opacity-0 group-hover/timeline-marker:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap text-[10px] uppercase tracking-widest font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              {milestone.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
