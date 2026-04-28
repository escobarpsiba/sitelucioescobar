import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg pt-20">
      {/* Background Image - Matching the provided photo aesthetic */}
      <div className="absolute right-0 top-0 w-full h-full md:w-1/2 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/40 to-transparent z-10" />
        <img 
          src={heroImage} 
          alt="Psicanalista Lucio Escobar" 
          className="w-full h-full object-cover object-[35%_center] grayscale brightness-[0.8]"
        />
      </div>

      <div className="section-container relative z-20 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <h1 className="text-5xl md:text-7xl leading-tight mb-8">
            Psicanálise como <br />
            <span className="gold-highlight">escuta do sujeito.</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-light">
            Atuação clínica, acadêmica e cultural dedicada à compreensão do sofrimento contemporâneo e à promoção de uma saúde mental ética e plural.
          </p>

          <a href="#sobre" className="btn-outline group inline-flex">
            CONHEÇA MAIS SOBRE MEU TRABALHO
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
