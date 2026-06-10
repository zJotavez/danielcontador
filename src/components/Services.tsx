import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Building2, BarChart3, Users, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Abertura de Empresas',
    desc: 'Estruturação jurídica e fiscal sob medida para sua nova jornada empresarial começar blindada.',
    img: '/company_creation.png',
    link: '#contato',
  },
  {
    icon: BarChart3,
    title: 'Gestão Fiscal & Contábil',
    desc: 'Escrituração de alta precisão que garante conformidade legal e evita multas fiscais.',
    img: '/tax_reduction.png',
    link: '#contato',
  },
  {
    icon: Briefcase,
    title: 'Consultoria Tributária',
    desc: 'Estudo ativo da legislação para enquadramento ideal e redução real da carga tributária.',
    img: '/expert_portrait.png',
    link: '#contato',
  },
  {
    icon: Users,
    title: 'Departamento Pessoal',
    desc: 'Gestão segura da folha de pagamento, férias e obrigações trabalhistas dos seus colaboradores.',
    img: '/bpo_finance.png',
    link: '#contato',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-primary block mb-3">
          Nossas Soluções
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
          Serviços Estratégicos Inteligentes
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-light">
          Apoio completo em todas as etapas financeiras e tributárias para sua empresa acelerar com segurança.
        </p>
      </div>

      {/* Services Grid (multiple cards per row) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => {
          const IconComponent = s.icon;
          return (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="relative h-[380px] rounded-2xl overflow-hidden border border-white/5 group transition-all duration-500 shadow-lg hover:border-primary/40 bg-[#0A1120]/40 flex flex-col justify-between p-8"
            >
              {/* Card Photo Backdrop with zoom on hover */}
              <div className="absolute inset-0 z-0">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover opacity-10 group-hover:opacity-25 group-hover:scale-110 transition-all duration-700 pointer-events-none"
                />
                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080F] via-[#05080F]/90 to-transparent"></div>
              </div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-start w-full">
                {/* Icon box with glowing hover effect */}
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl mb-6 border border-white/10 group-hover:bg-primary group-hover:text-slate-950 group-hover:shadow-neon-primary transition-all duration-300">
                  <IconComponent className="text-primary group-hover:text-slate-950 transition-colors" size={22} />
                </div>

                <h3 className="text-lg font-bold font-display text-white mb-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                
                <p className="text-slate-400 text-xs leading-relaxed font-light group-hover:text-slate-300 transition-colors">
                  {s.desc}
                </p>
              </div>

              {/* Bottom Action Area */}
              <div className="relative z-10 w-full pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-primary transition-colors">
                <span className="uppercase tracking-widest text-[10px]">Saiba Mais</span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-primary group-hover:text-slate-950 group-hover:border-primary transition-all duration-300">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
