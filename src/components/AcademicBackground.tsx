import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';

const formations = [
  {
    title: "Doutorado em Psicanálise",
    institution: "Logos University International (França)"
  },
  {
    title: "Mestrado em Ciências da Religião",
    institution: "Faculdade de Teologia Filadélfia (Brasil)"
  },
  {
    title: "Master of Theology",
    institution: "The International Seminary of London (Inglaterra)"
  },
  {
    title: "Especialização em Psicanálise Clínica",
    institution: "Faculdade de Ciências Médicas e Jurídicas (Brasil)"
  },
  {
    title: "Especialização em Filosofia Contemporânea",
    institution: "Faculdade Iguaçu (Brasil)"
  },
  {
    title: "Especialização em Psicologia Fenomenológica Existencial",
    institution: "Faculdade Iguaçu (Brasil)"
  },
  {
    title: "Graduação em Filosofia",
    institution: "Logos University International (França)"
  },
  {
    title: "Graduação em Antropologia e Religião",
    institution: "Logos University International (França)"
  },
  {
    title: "Graduação em Teologia",
    institution: "Seminário Teológico Peniel Internacional (Brasil)"
  },
  {
    title: "Formação em Psicanálise",
    institution: "Associação Brasileira de Psicanálise Insight (Brasil)"
  }
];

export default function AcademicBackground() {
  return (
    <section id="formacao" className="bg-[#0A0A0A] py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">TRAJETÓRIA</h3>
          <h2 className="text-4xl font-serif">Formação Acadêmica</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {formations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-dark-card border border-white/5 p-8 flex gap-6 group hover:bg-white/[0.02] hover:border-gold/30 transition-all"
            >
              <div className="flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-gold opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h4 className="text-white text-sm tracking-widest uppercase mb-2 font-medium">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 font-light italic">
                  {item.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-xs text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Além disso, possui diversos cursos de aperfeiçoamento nas áreas de psicoterapia, saúde mental, psicologia analítica, terapia sistêmica e pensamento crítico.
        </motion.p>
      </div>
    </section>
  );
}
