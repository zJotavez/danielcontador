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
    <section id="inicio" className="pt-40 pb-24 px-6 relative overflow-hidden bg-white">
      {/* Background Image with Pure White Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/hero_clean_bg.png"
          alt="Visionária Contabilidade Escritório"
          className="w-full h-full object-cover opacity-[0.22]"
        />
        {/* Soft designer fade from left to right (fading to pure white) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70 lg:to-transparent"></div>
        {/* Technical Guidelines overlay */}
        <div className="absolute inset-0 tech-grid-dots opacity-25"></div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-[20%] w-[1px] h-full bg-slate-100 pointer-events-none hidden lg:block"></div>
      <div className="absolute top-0 left-[75%] w-[1px] h-full bg-slate-100 pointer-events-none hidden lg:block"></div>

      {/* Geolocation visual markers */}
      <div className="hidden xl:block absolute left-10 bottom-10 text-[9px] font-mono text-slate-400 tracking-[0.3em] uppercase pointer-events-none">
        VISIONÁRIA CORE V2.8 // BR-SP
      </div>
      <div className="hidden xl:block absolute right-10 bottom-10 text-[9px] font-mono text-slate-400 tracking-[0.3em] uppercase pointer-events-none">
        LAT: 23.5505° S, LONG: 46.6333° W
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Left Column: Copywriting & Emotional Hook */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Fine line details for designer vibe */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1.5px] bg-primary"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-primary font-mono">
                [01 // ESTRUTURA FISCAL INTELIGENTE]
              </span>
            </div>

            <h1 className="text-4xl md:text-[3.75rem] font-bold font-display tracking-tight text-slate-900 mb-8 leading-[1.05]">
              Por trás de cada CNPJ, existe um <span className="font-serif italic font-normal text-gradient-sunset text-glow font-bold">sonho</span> que merece ser protegido.
            </h1>

            <p className="text-md md:text-lg text-slate-600 mb-10 leading-relaxed max-w-xl font-light">
              Não deixe o fruto do seu trabalho duro ser consumido por impostos desnecessários. Nós cuidamos da burocracia para você ter a liberdade de focar no que você faz de melhor: expandir seus horizontes.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <a
                href="#contato"
                className="px-8 py-4.5 bg-gradient-to-r from-primary to-[#D4AF37] hover:from-[#D4AF37] hover:to-primary text-slate-950 font-extrabold rounded-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-103 active:scale-97 shadow-xl shadow-primary/15 text-center uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-2 border border-primary/20"
              >
                Abrir Minha Empresa <ArrowRight size={12} />
              </a>
              <a
                href="#sobre"
                className="px-8 py-4.5 bg-white border border-slate-200 hover:border-primary text-slate-700 font-bold rounded-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-center text-xs uppercase tracking-widest flex items-center justify-center shadow-sm"
              >
                Conhecer a Visionária
              </a>
            </div>

            {/* Asymmetrical Metric Indicators with distinct colors */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200/60 max-w-lg">
              <div className="border-l border-slate-200 pl-4">
                <p className="text-2xl font-bold font-display text-primary tracking-tight text-glow">R$ 14M+</p>
                <p className="text-[9px] text-slate-400 uppercase tracking-widest font-mono mt-1">// Economia Gerada</p>
              </div>
              <div className="border-l border-slate-200 pl-4">
                <p className="text-2xl font-bold font-display text-blue-600 tracking-tight">99.8%</p>
                <p className="text-[9px] text-slate-400 uppercase tracking-widest font-mono mt-1">// Conformidade Fiscal</p>
              </div>
              <div className="border-l border-slate-200 pl-4">
                <p className="text-2xl font-bold font-display text-emerald-600 tracking-tight">100%</p>
                <p className="text-[9px] text-slate-400 uppercase tracking-widest font-mono mt-1">// Digital e Humano</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Stripe-like Custom Simulator Widget in Light Mode with vibrant colors */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glassmorphism-premium p-8 lg:p-10 rounded-[2rem] shadow-neon-glow relative border border-slate-200"
          >
            {/* Technical aesthetic badge */}
            <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1.5 bg-white text-primary border border-primary/20 font-mono text-[9px] uppercase tracking-widest rounded-full shadow-md">
              SIMULATOR_V.2.8
            </div>

            <div className="mb-8 text-left">
              <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
                <TrendingUp className="text-primary animate-pulse" size={18} />
                Inteligência de Lucro
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-light">
                Descubra quanta receita você está deixando na mesa com as alíquotas normais.
              </p>
            </div>

            {/* Segment Selector with individual vibrant colors */}
            <div className="mb-8 text-left">
              <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest block mb-3">
                [01] SELECIONE SEU SEGMENTO
              </span>
              <div className="grid grid-cols-3 gap-2 bg-slate-50 p-1 rounded-xl border border-slate-200/50 shadow-inner">
                {[
                  { id: 'tecnologia', label: 'Tecnologia', activeColor: 'bg-blue-600 text-white shadow-neon-blue' },
                  { id: 'servicos', label: 'Serviços', activeColor: 'bg-emerald-600 text-white shadow-neon-green' },
                  { id: 'comercio', label: 'Comércio', activeColor: 'bg-rose-500 text-white shadow-neon-coral' },
                ].map((seg) => (
                  <button
                    key={seg.id}
                    onClick={() => setSegment(seg.id)}
                    className={`py-2 px-1 text-center rounded-lg text-xs font-bold transition-fluid ${
                      segment === seg.id
                        ? `${seg.activeColor} font-extrabold`
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/50'
                    }`}
                  >
                    {seg.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Revenue Input Slider with colored accent */}
            <div className="mb-8 text-left">
              <div className="flex justify-between items-end mb-3">
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">
                  [02] FATURAMENTO MENSAL
                </span>
                <span className="text-xl font-bold text-slate-900 font-mono leading-none tracking-tight">
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
                className="w-full h-[3px] bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
              />
              <div className="flex justify-between text-[9px] text-slate-400 mt-2 font-mono">
                <span>R$ 10k</span>
                <span>R$ 250k</span>
                <span>R$ 500k+</span>
              </div>
            </div>

            {/* Designer comparison display (Vibrant Light Mode) */}
            <div className="bg-blue-50/20 border border-blue-100 rounded-2xl p-6 mb-8 text-left shadow-sm">
              <div className="grid grid-cols-2 gap-6 divide-x divide-blue-100">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase text-slate-400 tracking-wider font-mono">Custo Comum</span>
                  <span className="text-lg font-bold text-red-500 font-mono mt-1 flex items-center gap-0.5">
                    {(normal * 100).toFixed(1)}% <Percent size={12} />
                  </span>
                </div>
                <div className="flex flex-col pl-6">
                  <span className="text-[9px] uppercase text-slate-400 tracking-wider font-mono">Custo Visionária</span>
                  <span className="text-lg font-bold text-green-600 font-mono mt-1 flex items-center gap-0.5">
                    {(optimized * 100).toFixed(1)}% <Percent size={12} />
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-blue-100 flex flex-col items-start justify-center">
                <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono">Economia Estimada Anual</span>
                <span className="text-3xl font-extrabold text-gradient-sunset font-display mt-2 tracking-tight leading-none">
                  {formatCurrency(yearlySavings)}
                </span>
              </div>
            </div>

            <a
              href="#contato"
              className="w-full py-4 bg-slate-900 hover:bg-primary text-white hover:text-slate-950 font-extrabold rounded-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] shadow-md hover:shadow-neon-primary"
            >
              <DollarSign size={12} /> Garantir Essa Economia
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
