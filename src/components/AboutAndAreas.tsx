import React from 'react';
import { motion } from 'motion/react';
import { Brain, Users, Book, GraduationCap, Presentation, PencilLine, ArrowRight } from 'lucide-react';

const areas = [
  { icon: Brain, title: "Psicanálise Clínica" },
  { icon: Book, title: "Filosofia e Psicanálise" },
  { icon: Users, title: "Saúde Mental" },
  { icon: GraduationCap, title: "Docência e Formação Acadêmica" },
  { icon: Presentation, title: "Palestras e Seminários" },
];

export default function AboutAndAreas() {
  return (
    <section id="sobre" className="bg-dark-bg py-32 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gold" /> SOBRE
            </h3>

            <h2 className="text-3xl font-serif mb-8 text-white italic">Lúcio Escobar</h2>

            <div className="space-y-6 text-gray-400 font-light leading-relaxed text-justify">
              <p>
                Lúcio Escobar é <strong>psicanalista clínico em Ilhéus, Bahia</strong>, além de professor, escritor e poeta. Sua atuação é focada em oferecer uma escuta ética para pacientes da região sul da Bahia (como Itabuna e Ilhéus) e de todo o Brasil através da <strong>terapia online</strong>. Atualemnte é doutor em Psicanálise pela Logos University International (EUA).
              </p>
              <p>
                Sua trajetória acadêmica e clínica garante uma abordagem profunda e singular para quem busca ajuda. O consultório é um espaço seguro e sigiloso para tratar o <strong>vazio existencial, crises emocionais, conflitos familiares e dependência amorosa</strong>.
              </p>
              <p>
                A clínica psicanalítica de Lúcio é dedicada a ajudar adultos (entre 23 e 60 anos) que precisam de um <strong>tratamento para ansiedade, depressão e sofrimento psicológico</strong>. A terapia vai além do alívio dos sintomas emocionais que você não deve ignorar, promovendo autoconhecimento genuíno e transformação pessoal duradoura.
              </p>
            </div>
          </motion.div>

          {/* Acting Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-12 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gold" /> ÁREAS DE ATUAÇÃO
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
              {areas.map((area, idx) => (
                <div key={idx} className="flex flex-col group border-l border-white/5 pl-6 hover:border-gold transition-colors">
                  <div className="w-10 h-10 flex items-center mb-4 transition-transform group-hover:-translate-y-1">
                    <area.icon className="w-6 h-6 text-gold opacity-80" strokeWidth={1.5} />
                  </div>
                  <span className="text-[12px] tracking-widest uppercase text-gray-300 font-medium mb-2">
                    {area.title}
                  </span>
                  <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-tighter">
                    Prática teórica e clínica voltada à singularidade do sujeito.
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-xs text-gray-500 italic border-t border-white/5 pt-8">
              "Atua especialmente na interface entre clínica psicanalítica e questões contemporâneas, com ênfase na subjetividade e no sofrimento psíquico."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
