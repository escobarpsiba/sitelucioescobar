import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with blurred desk/chair */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1600" 
          alt="Consultório" 
          className="w-full h-full object-cover grayscale brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl leading-tight mb-4">
              Atendimento clínico <br />
              com <span className="gold-highlight italic">escuta e ética.</span>
            </h2>
            <p className="text-gray-400 font-light max-w-md">
              Um espaço de escuta singular para acolher o sofrimento, compreender histórias e construir novas possibilidades. Sessões de psicanálise em Ilhéus/BA e Terapia Online.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://api.whatsapp.com/send?phone=5575991512810&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20primeira%20conversa." 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline py-4 px-10 bg-gold/10 border-gold/30 hover:bg-gold/20 group"
            >
              AGENDAR CONVERSA NO WHATSAPP
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
