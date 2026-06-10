import React, { useState } from 'react';
import { ArrowRight, DollarSign, Percent, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const [revenue, setRevenue] = useState(50000);
  const [segment, setSegment] = useState('servicos');

  // Simple calculation of tax savings based on segment
  const getTaxRates = () => {
    switch (segment) {
      case 'tecnologia':
        return { normal: 0.155, optimized: 0.06 }; // Reduction from Annex V to Annex III using Factor R
      case 'servicos':
        return { normal: 0.16, optimized: 0.09 }; // ISS + PIS/COFINS optimization
      case 'comercio':
        return { normal: 0.11, optimized: 0.07 }; // ICMS monofasico review
      default:
        return { normal: 0.15, optimized: 0.08 };
    }
  };

  const { normal, optimized } = getTaxRates();
  const monthlySavings = revenue * (normal - optimized);
  const yearlySavings = monthlySavings * 12;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  return (
    <section id="inicio" className="pt-36 pb-24 px-6 relative overflow-hidden">
      {/* Light spots for depth */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Copywriting & Emotional Hook */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full w-fit mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary-light">
                Planejamento Tributário Inteligente
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-white mb-6 leading-[1.1]">
              Por trás de cada CNPJ, existe um <span className="text-primary font-serif italic font-normal text-glow">sonho</span> que merece ser protegido.
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl font-light">
              Não deixe o fruto do seu trabalho duro ser consumido por impostos desnecessários ou burocracia sem fim. Nós cuidamos dos seus números para você ter a liberdade de focar no seu amanhã.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contato"
                className="px-8 py-4 bg-gradient-to-r from-primary to-[#D4AF37] text-[#05080F] font-extrabold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 text-center uppercase tracking-widest text-xs flex items-center justify-center gap-2"
              >
                Abrir Minha Empresa <ArrowRight size={14} />
              </a>
              <a
                href="#sobre"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 active:scale-95 transition-colors text-center text-sm"
              >
                Conhecer a Visionária
              </a>
            </div>

            {/* Micro badges for credibility */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-lg">
              <div>
                <p className="text-2xl font-bold font-display text-white">R$ 14M+</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Impostos Economizados</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-display text-white">99.8%</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Conformidade Fiscal</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-display text-white">100%</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Digital e Humanizado</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Expert Model (Interactive Tax Savings Simulator) */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glassmorphism-premium p-8 rounded-3xl shadow-neon-glow relative border border-white/10"
          >
            <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-primary text-slate-950 font-black text-[9px] uppercase tracking-widest rounded-full shadow-lg">
              Calculadora de Especialista
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                <TrendingUp className="text-primary" size={20} />
                Simule Sua Economia
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Descubra o impacto de um planejamento tributário estratégico feito por profissionais.
              </p>
            </div>

            {/* Segment Selector */}
            <div className="mb-6">
              <label className="text-xs text-slate-300 font-bold uppercase tracking-wider block mb-2">
                Segmento de Atuação
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'tecnologia', label: 'Tecnologia / Dev' },
                  { id: 'servicos', label: 'Serviços Gerais' },
                  { id: 'comercio', label: 'Comércio / Varejo' },
                ].map((seg) => (
                  <button
                    key={seg.id}
                    onClick={() => setSegment(seg.id)}
                    className={`py-2 px-1 text-center rounded-lg text-xs font-bold transition-all ${
                      segment === seg.id
                        ? 'bg-primary text-slate-950 shadow-md'
                        : 'bg-white/5 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    {seg.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Revenue Input Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs text-slate-300 font-bold uppercase tracking-wider">
                  Faturamento Mensal
                </label>
                <span className="text-lg font-black text-primary-light font-mono">
                  {formatCurrency(revenue)}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="500000"
                step="5000"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>R$ 10k</span>
                <span>R$ 250k</span>
                <span>R$ 500k+</span>
              </div>
            </div>

            {/* Visual Savings Display */}
            <div className="bg-[#05080F]/60 border border-white/5 rounded-2xl p-5 mb-6">
              <div className="grid grid-cols-2 gap-4 divide-x divide-white/5">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] uppercase text-slate-500 tracking-wider">Alíquota Média Comum</span>
                  <span className="text-xl font-bold text-red-400 font-mono mt-1 flex items-center gap-1">
                    {(normal * 100).toFixed(1)}% <Percent size={14} />
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] uppercase text-slate-500 tracking-wider">Alíquota Visionária</span>
                  <span className="text-xl font-bold text-green-400 font-mono mt-1 flex items-center gap-1">
                    {(optimized * 100).toFixed(1)}% <Percent size={14} />
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex flex-col items-center justify-center">
                <span className="text-xs text-slate-400 uppercase tracking-widest">Economia Estimada por Ano</span>
                <span className="text-3xl font-black text-primary font-display mt-2 text-glow">
                  {formatCurrency(yearlySavings)}
                </span>
              </div>
            </div>

            <a
              href="#contato"
              className="w-full py-4 bg-white/5 hover:bg-primary hover:text-slate-950 border border-white/10 text-white font-extrabold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-widest hover:shadow-neon-primary"
            >
              <DollarSign size={14} /> Solicitar Estudo Tributário Grátis
            </a>

            <p className="text-[10px] text-slate-500 text-center mt-3 leading-relaxed">
              *Valores simulados de economia baseados em médias de elisão fiscal em conformidade com a legislação tributária brasileira.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
