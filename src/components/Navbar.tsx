import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INÍCIO', href: '#' },
    { name: 'SOBRE', href: '#sobre' },
    { name: 'FORMAÇÃO', href: '#formacao' },
    { name: 'PUBLICAÇÕES', href: '#publicacoes' },
    { name: 'PALESTRAS', href: '#palestras' },
    { name: 'CONTATO', href: '#contato' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-bg/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl font-serif tracking-widest text-white leading-tight">LUCIO ESCOBAR</span>
          <span className="text-[10px] tracking-[0.2em] text-gold uppercase">Psicanalista | Professor | Escritor</span>
        </div>
        
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs tracking-widest text-gray-400 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="md:hidden">
          {/* Mobile menu button could go here */}
          <button className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
