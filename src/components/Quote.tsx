import React from 'react';
import { motion } from 'motion/react';
import { Quote as QuoteIcon } from 'lucide-react';

export default function Quote() {
  return (
    <section className="bg-[#0A0A0A] py-24 border-y border-white/5">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <QuoteIcon className="w-10 h-10 text-gold mb-8 opacity-50" />
          
          <h2 className="text-2xl md:text-3xl italic font-serif leading-snug max-w-4xl mb-8">
            "Uma análise não entrega sentidos prontos: ela desloca o sujeito até o ponto em que sua verdade possa emergir no furo de seu próprio dizer."
          </h2>
          
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500">Lucio Escobar</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
