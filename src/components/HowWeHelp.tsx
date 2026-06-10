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
      icon: Building,
      img: '/company_creation.png',
      desc: 'Abrir uma empresa não precisa ser um pesadelo burocrático. Nós cuidamos de todo o processo legal para que você foque apenas no seu plano de negócios.',
      benefits: [
        'Registro na Junta Comercial e Receita Federal rápido',
        'Definição exata dos CNAEs para evitar impostos excessivos',
        'Estudo do regime tributário ideal (Simples Nacional, Lucro Presumido)',
        'Suporte completo na elaboração do Contrato Social',
      ],
      ctaText: 'Quero Abrir Meu CNPJ Agora',
    },
    {
      id: 'reducao',
      title: 'Já Tenho Empresa e Quero Economizar',
      subtitle: 'Planejamento Tributário Legal Avançado',
      icon: Calculator,
      img: '/tax_reduction.png',
      desc: 'A maioria das empresas no Brasil paga mais impostos do que realmente deveria por falta de planejamento. Analisamos sua operação para encontrar brechas legais de economia.',
      benefits: [
        'Diagnóstico gratuito da carga tributária atual',
        'Auditoria e recuperação de créditos de impostos pagos a maior',
        'Adequação de enquadramento fiscal (redução de alíquotas)',
        'Acompanhamento contínuo de novas leis e incentivos fiscais',
      ],
      ctaText: 'Solicitar Diagnóstico Fiscal Grátis',
    },
    {
      id: 'bpo',
      title: 'Quero Terceirizar Meu Financeiro (BPO)',
      subtitle: 'Controle total do caixa sem dor de cabeça',
      icon: LineChart,
      img: '/bpo_finance.png',
      desc: 'Esqueça planilhas confusas e atrasos. Assumimos a gestão financeira da sua empresa, fazendo contas a pagar, contas a receber e conciliação bancária.',
      benefits: [
        'Relatórios diários e mensais de Fluxo de Caixa',
        'Emissão profissional de Notas Fiscais e Boletos',
        'Conciliação bancária automatizada diária',
        'Redução drástica de custos trabalhistas no setor financeiro',
      ],
      ctaText: 'Falar com Consultor de BPO',
    },
  ];

  return (
    <section id="como-ajudar" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-primary block mb-3">
          Sua Necessidade
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
          Como a Visionária Pode Te Ajudar Hoje?
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto font-light">
          Selecione a fase atual do seu negócio para descobrir como nossa equipe pode otimizar seus resultados.
        </p>
      </div>

      {/* Tabs Selector */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
        {options.map((opt, idx) => {
          const IconComp = opt.icon;
          const isActive = activeTab === idx;
          return (
            <button
              key={opt.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-4 p-5 rounded-2xl text-left border transition-all duration-300 md:w-1/3 ${
                isActive
                  ? 'bg-gradient-to-r from-[#0A1120] to-[#14213d] border-primary shadow-neon-primary text-white scale-102'
                  : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:border-white/10'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                  isActive ? 'bg-primary text-slate-950' : 'bg-white/5 text-slate-300'
                }`}
              >
                <IconComp size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {idx === 0 ? 'Nova Empresa' : idx === 1 ? 'Otimização' : 'Gestão'}
                </p>
                <h3 className={`text-sm font-bold font-display mt-0.5 ${isActive ? 'text-primary-light' : 'text-slate-200'}`}>
                  {opt.title}
                </h3>
              </div>
            </button>
          );
        })}
      </div>

      {/* Tab Panel */}
      <div className="min-h-[450px] relative">
        <AnimatePresence mode="wait">
          {options.map((opt, idx) => {
            if (activeTab !== idx) return null;
            return (
              <motion.div
                key={opt.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-12 gap-8 items-center bg-[#0A1120]/60 border border-white/5 rounded-3xl p-8 lg:p-12 backdrop-blur-xl"
              >
                {/* Text Content */}
                <div className="lg:col-span-7 text-left">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                    {opt.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-6">
                    {opt.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-8 font-light">
                    {opt.desc}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {opt.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-slate-950 hover:bg-[#D4AF37] font-extrabold rounded-xl transition-all uppercase tracking-widest text-xs shadow-lg shadow-primary/10"
                  >
                    {opt.ctaText} <ChevronRight size={14} />
                  </a>
                </div>

                {/* Picture Content */}
                <div className="lg:col-span-5 relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-lg pointer-events-none"></div>
                  <img
                    src={opt.img}
                    alt={opt.title}
                    className="w-full h-80 object-cover rounded-2xl border border-white/10 shadow-2xl relative z-10"
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
