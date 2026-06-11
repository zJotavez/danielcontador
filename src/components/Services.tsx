import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Building2, BarChart3, Users, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Abertura de Empresas',
    desc: 'Estruturação societária e mapeamento fiscal sob medida para começar com total segurança.',
    img: '/company_creation.png',
    num: '01',
    category: 'CONSTITUIÇÃO',
  },
  {
    icon: BarChart3,
    title: 'Gestão Fiscal & Contábil',
    desc: 'Escrituração de alta precisão que garante conformidade legal e evita riscos com o fisco.',
    img: '/tax_reduction.png',
    num: '02',
    category: 'OPERACIONAL',
  },
  {
    icon: Briefcase,
    title: 'Consultoria Tributária',
    desc: 'Estudo ativo da legislação e elisão fiscal legal para aumentar a lucratividade do caixa.',
    img: '/expert_portrait.png',
    num: '03',
    category: 'ESTRATÉGIA',
  },
  {
    icon: Users,
    title: 'Departamento Pessoal',
    desc: 'Gestão segura da folha de pagamento, férias e obrigações trabalhistas dos seus colaboradores.',
    img: '/bpo_finance.png',
    num: '04',
    category: 'DEPARTAMENTO',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-28 px-6 max-w-7xl mx-auto relative z-10">
      <div className="absolute top-10 right-10 text-[9px] font-mono text-slate-400 tracking-[0.2em] uppercase pointer-events-none hidden xl:block">
        // CORE SERVICE GRID
      </div>

      <div className="text-left mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-[1.5px] bg-primary"></span>
          <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-primary font-mono">// PORTFÓLIO DE SOLUÇÕES</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 mb-4 tracking-tight">
          Serviços Estratégicos <span className="font-serif italic font-normal text-primary text-glow font-light">Sob Medida</span>
        </h2>
        <p className="text-slate-600 max-w-2xl font-light">
          Apoio completo para todas as frentes tributárias e contábeis do seu negócio, sem planilhas confusas.
        </p>
      </div>

      {/* Services Grid (multiple cards per row) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => {
          const IconComponent = s.icon;
          return (
            <motion.a
              key={i}
              href="#contato"
              whileHover={{ y: -8 }}
              className="relative h-[400px] rounded-3xl overflow-hidden border border-slate-200/50 group transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-md hover:shadow-xl bg-white flex flex-col justify-between p-8"
            >
              {/* Card Photo Backdrop with custom light blend modes */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover opacity-[0.06] group-hover:opacity-[0.18] group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter grayscale group-hover:grayscale-0"
                />
                {/* Vignette overlay (fading to light background) */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-transparent"></div>
              </div>

              {/* Card Header details */}
              <div className="relative z-10 flex justify-between items-center w-full">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest leading-none">
                  // {s.category}
                </span>
                <span className="text-[9px] font-mono text-primary/80 font-extrabold leading-none">
                  {s.num}
                </span>
              </div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-start w-full mt-auto mb-6">
                {/* Icon box with glowing hover effect */}
                <div className="w-11 h-11 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-xl mb-6 group-hover:bg-primary group-hover:text-slate-950 group-hover:shadow-neon-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <IconComponent className="text-primary group-hover:text-slate-950 transition-colors duration-300" size={20} />
                </div>

                <h3 className="text-lg font-bold font-display text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {s.title}
                </h3>
                
                <p className="text-slate-500 text-xs leading-relaxed font-light group-hover:text-slate-600 transition-colors duration-300">
                  {s.desc}
                </p>
              </div>

              {/* Bottom Action Area */}
              <div className="relative z-10 w-full pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-primary transition-colors duration-300">
                <span className="uppercase tracking-[0.2em] text-[9px] font-mono">Contratar</span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-primary group-hover:text-slate-950 group-hover:border-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <ArrowUpRight size={12} className="group-hover:rotate-45 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
