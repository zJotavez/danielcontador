import React from 'react';
import { Shield, Sparkles, Target, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const coreValues = [
    {
      icon: Shield,
      title: 'Segurança Absoluta',
      desc: 'Blindagem fiscal e conformidade rigorosa com a legislação para proteger seu patrimônio.',
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      desc: 'Planejamento ativo para reduzir seus impostos legalmente e aumentar sua margem de lucro.',
    },
    {
      icon: Users,
      title: 'Atendimento Elite',
      desc: 'Comunicação direta com especialistas prontos para responder às suas dúvidas sem complicação.',
    },
  ];

  return (
    <section id="sobre" className="py-24 px-6 relative overflow-hidden bg-[#0A1120]/40 border-y border-white/5">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Expert Photo with visual frames */}
        <div className="lg:col-span-5 relative group">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Geometric Glowing Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-light rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <div className="relative border border-white/10 rounded-3xl overflow-hidden shadow-2xl bg-[#0A1120] p-3">
              <img
                src="/expert_portrait.png"
                alt="Especialista Tributário da Visionária Contabilidade"
                className="w-full h-[450px] object-cover rounded-2xl group-hover:scale-102 transition-transform duration-500"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-8 left-8 right-8 glassmorphism p-5 rounded-2xl border border-primary/20 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Sparkles className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest leading-none">Consultoria Premium</p>
                    <p className="text-sm font-extrabold text-white mt-1">Inteligência Estrutural</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Corner Accents */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg"></div>
          </motion.div>
        </div>

        {/* Right Column: Narrative & Details */}
        <div className="lg:col-span-7 text-left">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-primary block mb-3">
              Quem é a Visionária
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6 leading-tight">
              A contabilidade estratégica que seu negócio precisa para <span className="font-serif italic font-normal text-primary text-glow">crescer</span>.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6 font-light">
              Na **Visionária Contabilidade**, acreditamos que a contabilidade tradicional é apenas a base. Nossa missão é ir muito além de emitir guias de impostos; nós atuamos como verdadeiros parceiros estratégicos do seu negócio.
            </p>
            <p className="text-slate-400 leading-relaxed mb-10 font-light">
              Combinamos tecnologia inteligente com uma assessoria humanizada e profundo conhecimento da complexa legislação fiscal brasileira. Analisamos cada detalhe operacional da sua empresa para identificar oportunidades legais de redução tributária e otimização financeira.
            </p>

            {/* Core Values Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {coreValues.map((val, i) => (
                <div key={i} className="p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-primary/20 hover:bg-white/8 transition-all">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <val.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-white font-display mb-2">{val.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
