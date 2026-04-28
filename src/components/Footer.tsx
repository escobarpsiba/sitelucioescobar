import React from 'react';
import { Instagram, Youtube, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] py-16 border-t border-white/5">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl font-serif text-white tracking-widest leading-none border-l-2 border-gold pl-3">LE</span>
              <div className="flex flex-col">
                <span className="text-sm font-serif tracking-widest text-white">LUCIO ESCOBAR</span>
                <span className="text-[9px] tracking-[0.2em] text-gold uppercase">Psicanalista | Professor | Escritor</span>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <a href="https://www.instagram.com/escobarpsiba" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gold transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/lucio-escobar-81256b405/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gold transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:escobarpsiba@gmail.com" className="text-gray-500 hover:text-gold transition-colors"><Mail className="w-5 h-5" /></a>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <p className="text-[10px] text-gray-500 tracking-wider">
              © 2026 Lúcio Escobar. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-gold/60 tracking-wider mt-1 uppercase">
              Desenvolvido com propósito.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
