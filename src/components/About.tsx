import React from 'react';
import { Shield, Sparkles, Target, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const coreValues = [
    {
      icon: Shield,
      title: 'Segurança Total',
      desc: 'Blindagem fiscal e conformidade rigorosa com a legislação para proteger seu patrimônio.',
      num: '01',
      hoverBorder: 'hover:border-blue-500/40 hover:shadow-neon-blue',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
    },
    {
      icon: Target,
      title: 'Foco em Lucro',
      desc: 'Planejamento ativo para reduzir seus impostos legalmente e aumentar sua margem de lucro.',
      num: '02',
      hoverBorder: 'hover:border-primary/40 hover:shadow-neon-primary',
      iconColor: 'text-primary-dark',
      iconBg: 'bg-primary/10',
    },
    {
      icon: Users,
      title: 'Atendimento Sênior',
      desc: 'Comunicação direta com especialistas prontos para responder às suas dúvidas sem complicação.',
      num: '03',
      hoverBorder: 'hover:border-emerald-500/40 hover:shadow-neon-green',
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
    },
  ];

  return (
    <section id="sobre" className="py-28 px-6 relative overflow-hidden bg-white border-y border-slate-100">
      {/* Decorative vertical lines and dots */}
      <div className="absolute top-0 left-[20%] w-[1px] h-full bg-slate-100 pointer-events-none hidden lg:block"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Large faint background watermark for design craft */}
      <div className="hidden lg:block absolute -right-16 top-10 text-[10rem] font-black text-primary/[0.02] tracking-widest uppercase pointer-events-none select-none font-display">
        ESTRATÉGIA
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Overlapping Layered Image */}
        <div className="lg:col-span-5 relative group">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Background glowing panel */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-light rounded-[2rem] opacity-5 blur-2xl group-hover:opacity-15 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
            
            {/* Main Picture Frame */}
            <div className="relative border border-slate-200/50 rounded-[2rem] overflow-hidden bg-white p-4 transition-fluid hover:scale-101 shadow-md">
              <img
                src="/expert_portrait.png"
                alt="Especialista Tributário da Visionária Contabilidade"
                className="w-full h-[480px] object-cover rounded-2xl group-hover:scale-103 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              
              {/* Overlay Badge styled like an architecture tag */}
              <div className="absolute bottom-8 left-8 right-8 glassmorphism p-5 rounded-2xl border border-primary/20 shadow-lg transition-fluid hover:border-primary/45">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center border border-primary/25">
                    <Sparkles className="text-primary" size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] text-primary uppercase tracking-widest font-mono leading-none">ESTUDO ANUAL // 2026</p>
                    <p className="text-xs font-bold text-slate-900 mt-1 font-display">Conformidade e Elisão Fiscal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Asymmetrical Frame Accents */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-primary/45 rounded-tl-xl transition-all group-hover:-top-4 group-hover:-left-4"></div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-primary/45 rounded-br-xl transition-all group-hover:-bottom-4 group-hover:-right-4"></div>
          </motion.div>
        </div>

        {/* Right Column: Fluid text layouts */}
        <div className="lg:col-span-7 text-left">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1.5px] bg-primary"></span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-primary font-mono">// SOBRE A VISIONÁRIA</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 mb-6 leading-[1.15] tracking-tight">
              A contabilidade que seu negócio precisa para crescer sem <span className="font-serif italic font-normal text-gradient-sunset text-glow font-bold">limites</span>.
            </h2>
            
            <p className="text-slate-600 leading-relaxed mb-6 font-light">
              Na **Visionária**, rompemos a barreira da contabilidade engessada. Acreditamos que emitir guias fiscais e cumprir prazos é apenas o básico. Nossa real atuação é como **parceiros de elisão fiscal e inteligência societária**.
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-12 font-light">
              Desenhamos estruturas fiscais sob medida que eliminam custos desnecessários dentro dos limites da lei. Com um time experiente focado no atendimento direto e humanizado, garantimos que suas decisões corporativas sejam tomadas sob os melhores pilares tributários do país.
            </p>

            {/* Core Values Grid in Light Mode with vibrant colors */}
            <div className="grid md:grid-cols-3 gap-6">
              {coreValues.map((val, i) => (
                <div 
                  key={i} 
                  className={`p-6 bg-white border border-slate-200 rounded-2xl hover:bg-[#FCFAF6] hover:-translate-y-1 transition-fluid shadow-sm ${val.hoverBorder}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-9 h-9 ${val.iconBg} rounded-lg flex items-center justify-center`}>
                      <val.icon className={val.iconColor} size={18} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">{val.num}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 font-display mb-2">{val.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{val.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
