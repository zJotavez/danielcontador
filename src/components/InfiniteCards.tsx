import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Mariana Costa',
    role: 'CEO & Founder',
    company: 'TechFlow Solutions',
    img: '/client_success_1.png',
    text: 'A Visionária reduziu nossos impostos em 42% no primeiro ano. O atendimento e a assessoria na transição do Simples para o Lucro Presumido foram impecáveis!',
    rating: 5,
  },
  {
    name: 'Guilherme Silva',
    role: 'Diretor de Operações',
    company: 'Vanguard Varejo',
    img: '/client_success_2.png',
    text: 'A abertura da nossa filial foi feita de forma ágil e segura. Além de economizarmos tempo, o planejamento tributário deles nos poupou milhares de reais.',
    rating: 5,
  },
  {
    name: 'Roberto Andrade',
    role: 'Sócio-Fundador',
    company: 'Andrade & Associados',
    img: '/client_success_3.png',
    text: 'Terceirizar o financeiro com o BPO da Visionária nos deu um controle de caixa inédito. Relatórios diários claros e decisões baseadas em dados.',
    rating: 5,
  },
  {
    name: 'Larissa Lima',
    role: 'Co-Founder',
    company: 'Pixel Creative Studio',
    img: '/client_success_1.png',
    text: 'Sempre tive medo da contabilidade por ser burocrática, mas a Visionária tornou tudo digital, descomplicado e extremamente profissional. Nota 10!',
    rating: 5,
  },
  {
    name: 'Thiago Martins',
    role: 'Diretor Financeiro',
    company: 'Martins & Co Indústria',
    img: '/client_success_2.png',
    text: 'A auditoria tributária deles recuperou mais de R$ 120 mil em créditos acumulados que nem sabíamos que tínhamos direito. Um trabalho de elite!',
    rating: 5,
  },
];

// Double the testimonials array to make a seamless infinite scroll loop
const doubleTestimonials = [...testimonials, ...testimonials];

export default function InfiniteCards() {
  return (
    <section id="depoimentos" className="py-28 overflow-hidden relative border-t border-white/5 bg-[#05080F]">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 mb-16 text-left">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-[1px] bg-primary"></span>
          <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-primary font-mono">// CASOS DE ESTUDO</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4 tracking-tight">
          Histórias de Crescimento <span className="font-serif italic font-normal text-primary text-glow">Real</span>
        </h2>
        <p className="text-slate-400 max-w-2xl font-light">
          Parceiros que transformaram burocracia em margem de lucro com nosso planejamento.
        </p>
      </div>

      {/* Infinite Scrolling Track Wrapper */}
      <div className="relative w-full flex items-center justify-start overflow-hidden py-6 mask-gradient">
        {/* The Marquee Track */}
        <div className="flex gap-6 animate-marquee whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer">
          {doubleTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="inline-block w-[350px] md:w-[420px] shrink-0 whitespace-normal glassmorphism p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-fluid hover:shadow-neon-primary bg-[#0A1120]/60 relative group"
            >
              {/* Elegant Faint Aspas watermark in serif */}
              <div className="absolute top-3 right-6 text-7xl font-serif text-white/[0.02] group-hover:text-primary/[0.04] transition-colors duration-500 pointer-events-none select-none">
                “
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={12} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-light italic relative z-10">
                "{t.text}"
              </p>

              {/* Client Info (Asymmetrical Layout inside testimonial) */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-5 relative z-10">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10 group-hover:border-primary/30 transition-colors duration-500 shadow-md"
                />
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white font-display leading-tight">{t.name}</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-mono uppercase tracking-wider">
                    {t.role} — <span className="text-primary-light font-medium">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
