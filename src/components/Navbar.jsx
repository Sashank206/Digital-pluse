import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navbar - Glass effect with scroll tracking and active link highlight.
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Intro', href: '#' },
    { name: 'Genesis (60s)', href: '#primitive' },
    { name: 'Dot-Com (90s)', href: '#industrial' },
    { name: 'Social Era', href: '#internet' },
    { name: 'Future', href: '#future' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 glass border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center p-2 group-hover:bg-white group-hover:text-black transition-all">
             <span className="text-xl font-orbitron font-extrabold -rotate-45">P</span>
          </div>
          <span className="font-orbitron text-sm tracking-[0.3em] uppercase hidden md:block">Pulse</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8 md:gap-12">
          {navLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.href} 
              className="group relative text-[10px] md:text-xs uppercase font-extrabold tracking-widest text-neutral-400 hover:text-white transition-colors"
            >
              {link.name}
              <motion.span 
                 className="absolute -bottom-2 left-0 right-0 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" 
              />
            </a>
          ))}
          
          <button className="glass-dark px-6 py-2 rounded-full text-[10px] uppercase font-bold text-white hover:bg-white hover:text-black transition-all">
             Begin
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
