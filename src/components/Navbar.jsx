import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

/**
 * Navbar - Glass effect with scroll tracking and mobile hamburger menu.
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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
    <>
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

          {/* Desktop Links (Hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-8 md:gap-12">
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

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] lg:hidden glass-dark backdrop-blur-3xl flex flex-col items-center justify-center gap-8"
          >
            {/* Close button for drawer (optional but good for UX) */}
            <button 
               onClick={() => setIsMobileMenuOpen(false)}
               className="absolute top-8 right-6 text-white"
            >
               <X size={32} />
            </button>

            {navLinks.map((link, i) => (
              <motion.a 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-orbitron uppercase font-bold tracking-[0.3em] text-neutral-400 hover:text-white transition-colors"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 glass px-12 py-4 rounded-full text-sm uppercase font-black tracking-[0.2em] bg-white text-black"
            >
               Start Journey
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
