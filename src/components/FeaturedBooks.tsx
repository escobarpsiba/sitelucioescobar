import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, FileText } from 'lucide-react';
import capaParadoxo from '../assets/capa-paradoxo.jpg';
import capaClinica from '../assets/capa-clinica.jpg';
import capaEntreMedoDesejo from '../assets/capa-entre-medo-desejo.jpg';
import capaAutismoMaes from '../assets/capa-autismomaes.png';

const books = [
  {
    title: "O Paradoxo do Amor",
    subtitle: "Necessidade vs Capacidade",
    desc: "Uma investigação psicanalítica sobre o amor, suas contradições e os impasses entre a carência afetiva e a construção de vínculos maduros.",
    image: capaParadoxo,
    linkText: "COMPRAR AGORA"
  },
  {
    title: "A Clínica da Invenção",
    subtitle: "Casos de Sucesso no Tratamento Psicanalítico do Autismo no Brasil e no Mundo",
    desc: "Uma obra que apresenta a clínica psicanalítica do autismo a partir de casos reais, evidenciando a potência da invenção subjetiva frente aos impasses do diagnóstico contemporâneo.",
    image: capaClinica,
    linkText: "COMPRAR AGORA"
  },
  {
    title: "Entre o Desejo e o Medo",
    subtitle: "A ansiedade sob o olhar da psicanálise",
    desc: "Uma leitura acessível e profunda sobre a ansiedade, articulando Freud, Lacan e a clínica contemporânea.",
    image: capaEntreMedoDesejo,
    linkText: "COMPRAR AGORA"
  },
  {
    title: "Autismo: O que não contaram às famílias",
    subtitle: "Um olhar psicanalítico sobre o autismo",
    desc: "Uma obra que revela o que as famílias não ouvem sobre o autismo, abordando a subjetividade, a linguagem e a clínica psicanalítica para além dos protocolos e diagnósticos padronizados.",
    image: capaAutismoMaes,
    linkText: "COMPRAR AGORA",
    link: "https://autismoebookmaes.vercel.app/"
  }
];

const articles = [
  {
    title: "Análise Crítica do Sintoma Psicoterapêutico: Psicanálise, Capitalismo e a Promessa de Completude",
    year: "2025",
    link: "https://figshare.com/articles/preprint/_b_An_lise_Cr_tica_do_Sintoma_Psicoterap_utico_Psican_lise_Capitalismo_e_a_Promessa_de_Completude_b_/29452073",
    journal: "figshare"
  },
  {
    title: "Autismo, psicanálise e linguagem: Esclarecendo pontos básicos",
    year: "2025",
    link: "https://zenodo.org/doi/10.5281/zenodo.14624402",
    journal: ""
  },
  {
    title: "Corpos Fragmentados: Uma Análise Psicanalítica da Obsessão Contemporânea Com a Estética Corporal na Era Digital",
    year: "2024",
    link: "https://doi.org/10.38087/2595.8801.502",
    journal: "COGNITIONIS Scientific Journal"
  },
  {
    title: "Desigualdades Sociais e Saúde Mental na Era Industrial: Perspectivas Histórica, Antropológica e Psicanalítica",
    year: "2024",
    link: "https://doi.org/10.38087/2595.8801.370",
    journal: "COGNITIONIS Scientific Journal"
  },
  {
    title: "O MITO DO PECADO ORIGINAL: UMA EXPLORAÇÃO INTERDISCIPLINAR DOS ELEMENTOS SIMBÓLICOS, PERSPECTIVAS ANTROPOLÓGICAS E PSICANALÍTICAS",
    year: "2023",
    link: "https://revista.cognitioniss.org/index.php/cogn/article/view/325",
    journal: "Revista Científica Cognitionis"
  },
  {
    title: "A RELIGIÃO EM FREUD A PARTIR DO ESTUDO DE ATOS OBSESSIVOS E PRÁTICAS RELIGIOSAS (1907) - TOTEM E TABU (1913)",
    year: "2023",
    link: "https://revista.cognitioniss.org/index.php/cogn/article/view/214",
    journal: "COGNITIONIS SCIENTIFIC JOURNAL"
  },
  {
    title: "A RELAÇÃO ENTRE A BUSCA POR SENTIDO E A ESPIRITUALIDADE NA PERSPECTIVA PSICANALÍTICA",
    year: "2023",
    link: "https://zenodo.org/record/7702601",
    journal: "Zenodo"
  },
  {
    title: "A EXCELÊNCIA DA PSICANÁLISE COMO CAMINHO PARA A TRAVESSIA DA ANGÚSTIA E PREVENÇÃO DO SUICÍDIO",
    year: "2022",
    link: "https://cognitioniss.org/2022/10/14/10-38087-2595-8801-165/",
    journal: "Revista Científica Cognitionis"
  }
];

export default function FeaturedBooks() {
  return (
    <section id="publicacoes" className="bg-[#0D0D0D] py-32">
      <div className="section-container">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">LIVROS EM DESTAQUE</h3>
            <div className="w-12 h-[1px] bg-gold" />
          </motion.div>
          
          <a href="#" className="text-xs tracking-widest text-gray-400 hover:text-gold transition-colors flex items-center gap-2">
            VER TODOS OS LIVROS <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-32">
          {books.map((book, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-8 w-full max-w-[240px] aspect-[2/3] shadow-[15px_20px_35px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[20px_25px_40px_rgba(0,0,0,0.6)]">
                {/* Book cover image */}
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-full object-cover rounded-r-lg rounded-l-[3px] md:grayscale md:group-hover:grayscale-0 transition-all duration-700" 
                />
                {/* Book spine fold effect */}
                <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-gradient-to-r from-black/60 to-transparent z-10 rounded-l-[3px]" />
                <div className="absolute left-[5px] top-0 bottom-0 w-[1px] bg-white/20 z-10" />
                {/* Book gloss / lighting effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 z-10 pointer-events-none rounded-r-lg rounded-l-[3px]" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6 pb-12 z-20">
                   {/* Overlay content if needed */}
                </div>
              </div>
              
              <h4 className="text-xl mb-2 font-serif text-white">{book.title}</h4>
              <p className="text-[10px] tracking-wider uppercase text-gold mb-4 opacity-80">{book.subtitle}</p>
              <p className="text-xs text-gray-500 font-light leading-relaxed mb-8 line-clamp-3">
                {book.desc}
              </p>
              
              <button 
                onClick={() => {
                  if (book.link) {
                    window.open(book.link, '_blank');
                  } else {
                    const phone = "5575991512810";
                    const message = encodeURIComponent(`Tenho interesse em obter o livro: '${book.title}'`);
                    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                    const url = isMobile
                      ? `whatsapp://send?phone=${phone}&text=${message}`
                      : `https://wa.me/${phone}?text=${message}`;

                    window.location.href = url;
                  }
                }}
                className="btn-outline text-[10px] tracking-widest py-2 px-6 group cursor-pointer"
              >
                {book.linkText}
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Artigos Científicos Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4 flex items-center gap-3">
              <FileText className="w-4 h-4 text-gold" />
              ARTIGOS CIENTÍFICOS
            </h3>
            <div className="w-12 h-[1px] bg-gold mb-8" />
            <p className="text-gray-400 font-light mb-8 max-w-2xl text-sm md:text-base">
              Acesse minhas publicações científicas, pesquisas e contribuições acadêmicas disponíveis na plataforma ORCID.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {articles.map((article, idx) => (
              <motion.a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-dark-card border border-white/5 hover:border-gold/30 transition-all flex flex-col md:flex-row gap-4 items-start md:items-center justify-between"
              >
                <div className="flex flex-col pr-8">
                  <h4 className="text-white font-serif text-lg md:text-xl group-hover:text-gold transition-colors leading-snug mb-2">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-gray-500 uppercase tracking-widest">
                    <span>{article.year}</span>
                    {article.journal && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-gold/50" />
                        <span>{article.journal}</span>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all">
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a 
              href="https://orcid.org/0000-0002-3430-5094" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline inline-flex text-xs"
            >
              VER PERFIL COMPLETO NO ORCID
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
