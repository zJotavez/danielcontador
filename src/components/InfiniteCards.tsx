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
    img: '/client_success_1.png', // Fallback or duplicate with different details
    text: 'Sempre tive medo da contabilidade por ser burocrática, mas a Visionária tornou tudo digital, descomplicado e extremamente profissional. Nota 10!',
    rating: 5,
  },
  {
    name: 'Thiago Martins',
    role: 'Diretor Financeiro',
    company: 'Martins & Co Indústria',
    img: '/client_success_2.png',
    text: 'A auditoria tributária deles recuperou mais de R$ 120 mil em créditos acumulados que nem sabíamos que tínhamos direito. Um trabalho excepcional!',
    rating: 5,
  },
];

// Double the testimonials array to make a seamless infinite scroll loop
const doubleTestimonials = [...testimonials, ...testimonials];

export default function InfiniteCards() {
  return (
    <section id="depoimentos" className="py-24 overflow-hidden relative border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-primary block mb-3">
          Histórias de Sucesso
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
          Quem Confia na Visionária
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-light">
          Empresas que economizaram impostos, estruturaram suas finanças e ganharam segurança para decolar.
        </p>
      </div>

      {/* Infinite Scrolling Track Wrapper */}
      <div className="relative w-full flex items-center justify-start overflow-hidden py-4 mask-gradient">
        {/* Shadow Overlays to fade cards on the sides */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#05080F] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#05080F] to-transparent z-20 pointer-events-none"></div>

        {/* The Marquee Track */}
        <div className="flex gap-6 animate-marquee whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer">
          {doubleTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="inline-block w-[350px] md:w-[400px] shrink-0 whitespace-normal glassmorphism p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-neon-primary bg-[#0A1120]/80"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light italic">
                "{t.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-5">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-primary/20 shadow-md"
                />
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white font-display leading-tight">{t.name}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
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
