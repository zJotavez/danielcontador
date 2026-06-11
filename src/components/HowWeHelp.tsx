import React, { useState } from 'react';
import { Building, Calculator, LineChart, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function HowWeHelp() {
  const [activeTab, setActiveTab] = useState(0);

  const options = [
    {
      id: 'abertura',
      title: 'Quero Abrir Minha Empresa',
      subtitle: 'Comece do jeito certo, seguro e rápido',
      num: '01',
      icon: Building,
      img: '/company_creation.png',
      desc: 'Abrir uma empresa não precisa ser um labirinto burocrático. Cuidamos de toda a legalização, registros e licenças para que você inicie suas operações focando apenas no core business.',
      benefits: [
        'Registro na Junta Comercial e Receita Federal rápido',
        'Mapeamento completo de CNAEs para elisão fiscal de entrada',
        'Definição do regime ideal (Simples Nacional vs Lucro Presumido)',
        'Contrato Social sob medida para proteção societária',
      ],
      ctaText: 'Quero Abrir Meu CNPJ',
    },
    {
      id: 'reducao',
      title: 'Já Tenho Empresa e Quero Economizar',
      subtitle: 'Planejamento Tributário Avançado',
      num: '02',
      icon: Calculator,
      img: '/tax_reduction.png',
      desc: 'A carga tributária brasileira penaliza quem não planeja. Analisamos sua folha, vendas e compras para desenhar alternativas legais que reduzem seus impostos imediatamente.',
      benefits: [
        'Auditoria fiscal gratuita dos últimos 5 anos',
        'Recuperação de impostos pagos indevidamente (PIS/COFINS)',
        'Redução legal de alíquota efetiva (Fator R e anexos)',
        'Prevenção ativa contra autuações e malha fina',
      ],
      ctaText: 'Solicitar Diagnóstico Grátis',
    },
    {
      id: 'bpo',
      title: 'Terceirização Financeira (BPO)',
      subtitle: 'Controle de fluxo de caixa em tempo real',
      num: '03',
      icon: LineChart,
      img: '/bpo_finance.png',
      desc: 'Esqueça conciliações demoradas e atrasos em contas. Assumimos a rotina operacional do seu financeiro, entregando previsibilidade e relatórios prontos para decisões.',
      benefits: [
        'Controle diário de Contas a Pagar e Receber',
        'Faturamento e emissão profissional de Notas Fiscais',
        'Conciliação e categorização de lançamentos',
        'Dashboard de fluxo de caixa dinâmico e enxuto',
      ],
      ctaText: 'Falar com Consultor BPO',
    },
  ];

  return (
    <section id="como-ajudar" className="py-28 px-6 max-w-7xl mx-auto relative z-10">
      <div className="absolute top-10 left-10 text-[9px] font-mono text-slate-400 tracking-[0.2em] uppercase pointer-events-none hidden xl:block">
        // SERVICE MATCHING ENGINE
      </div>

      <div className="text-left mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-[1.5px] bg-primary"></span>
          <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-primary font-mono">// TRIAGEM DE NECESSIDADES</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 mb-4 tracking-tight">
          Como a Visionária Pode Ajudar <span className="font-serif italic font-normal text-primary text-glow font-light">Hoje</span>?
        </h2>
        <p className="text-slate-600 max-w-2xl font-light">
          Identifique o momento atual do seu negócio e veja o caminho planejado para sua economia e blindagem.
        </p>
      </div>

      {/* Tabs Selector (Asymmetrical design tabs in Light Mode) */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
        {options.map((opt, idx) => {
          const IconComp = opt.icon;
          const isActive = activeTab === idx;
          return (
            <button
              key={opt.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-5 p-6 rounded-2xl text-left border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:w-1/3 relative group ${
                isActive
                  ? 'bg-white border-primary/55 shadow-neon-primary text-slate-950 scale-[1.01]'
                  : 'bg-slate-100/50 border-slate-200/50 text-slate-500 hover:bg-slate-100 hover:border-slate-300/60'
              }`}
            >
              <div className="absolute top-3 right-4 text-[9px] font-mono text-slate-400">
                {opt.num}
              </div>

              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-fluid ${
                  isActive ? 'bg-primary text-slate-950 shadow-sm border border-primary/20' : 'bg-slate-200/50 text-slate-600'
                }`}
              >
                <IconComp size={20} />
              </div>
              <div>
                <p className="text-[9px] font-mono tracking-widest text-slate-400 uppercase leading-none mb-1">
                  {idx === 0 ? 'Constituição' : idx === 1 ? 'Elisão Fiscal' : 'Tesouraria'}
                </p>
                <h3 className={`text-sm font-extrabold font-display ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                  {opt.title}
                </h3>
              </div>
            </button>
          );
        })}
      </div>

      {/* Tab Panel */}
      <div className="min-h-[460px] relative">
        <AnimatePresence mode="wait">
          {options.map((opt, idx) => {
            if (activeTab !== idx) return null;
            return (
              <motion.div
                key={opt.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="grid lg:grid-cols-12 gap-12 items-center bg-white border border-slate-200/50 rounded-3xl p-8 lg:p-12 shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

                {/* Text Content */}
                <div className="lg:col-span-7 text-left">
                  <span className="text-[9px] font-mono text-primary uppercase tracking-widest block mb-2">
                    // {opt.subtitle}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-extrabold font-display text-slate-900 mb-6 tracking-tight">
                    {opt.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-8 font-light text-sm">
                    {opt.desc}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {opt.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={14} />
                        <span className="leading-tight font-light">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-slate-950 hover:bg-[#D4AF37] font-extrabold rounded-xl transition-fluid uppercase tracking-[0.2em] text-[10px] shadow-lg shadow-primary/10 hover:scale-102 border border-primary/25"
                  >
                    {opt.ctaText} <ChevronRight size={12} />
                  </a>
                </div>

                {/* Picture Content */}
                <div className="lg:col-span-5 relative group">
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                  
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 shadow-lg">
                    <img
                      src={opt.img}
                      alt={opt.title}
                      className="w-full h-80 object-cover group-hover:scale-103 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute top-3 left-4 bg-black/60 border border-white/10 rounded px-2.5 py-1 text-[8px] font-mono text-slate-300 tracking-wider">
                      DOC_IMG // {opt.num}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
