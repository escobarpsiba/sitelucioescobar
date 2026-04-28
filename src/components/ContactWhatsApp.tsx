import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactWhatsApp() {
  const whatsappNumber = "5575991512810";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20conversa.`;

  return (
    <section id="contato" className="bg-dark-bg py-32 border-t border-white/5">
      <div className="section-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">AGENDE SUA PRIMEIRA CONVERSA</h3>
          <h2 className="text-4xl font-serif mb-6 italic">Atendimento Presencial e Online</h2>
          <p className="text-gray-400 font-light max-w-lg mx-auto">
            O primeiro passo para tratar crises emocionais e ansiedade é o acolhimento. 
            Entre em contato diretamente pelo WhatsApp para agendar sua sessão, seja presencial em Ilhéus/BA ou terapia online para qualquer lugar do Brasil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-dark-card border border-white/5 p-12 flex flex-col items-center justify-center text-center group hover:border-gold/30 transition-all"
          >
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8 text-gold" />
            </div>
            <h4 className="text-xl font-serif text-white mb-4">Fale no WhatsApp</h4>
            <p className="text-sm text-gray-500 mb-8 font-light">
              Clique no botão abaixo para iniciar uma conversa confidencial, tirar suas dúvidas e encontrar o melhor horário para você.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-outline justify-center py-4 bg-gold text-black hover:bg-gold/90 hover:text-black border-none font-medium text-xs tracking-widest"
            >
              AGENDAR SESSÃO PELO WHATSAPP
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-dark-card border border-white/5 p-8 flex flex-col hover:border-gold/20 transition-colors">
              <Mail className="w-5 h-5 text-gold mb-4 opacity-60" />
              <span className="text-[10px] tracking-widest text-gray-500 uppercase mb-1">E-mail</span>
              <a href="mailto:escobarpsiba@gmail.com" className="text-sm text-gray-300 hover:text-gold transition-colors">
                escobarpsiba@gmail.com
              </a>
            </div>

            <div className="bg-dark-card border border-white/5 p-8 flex flex-col hover:border-gold/20 transition-colors">
              <MapPin className="w-5 h-5 text-gold mb-4 opacity-60" />
              <span className="text-[10px] tracking-widest text-gray-500 uppercase mb-1">Localização e Formato</span>
              <span className="text-sm text-gray-300">
                <strong>Psicanalista em Ilhéus, Sul da Bahia</strong> (Centro) e<br />
                <strong>Terapia Online</strong> para todo o Brasil.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
