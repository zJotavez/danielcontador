import React, { useState } from 'react';
import { Mail, MapPin, MessageSquare, PhoneCall, Check, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    empresa: '',
    segmento: 'servicos',
    faturamento: 'ate-50k',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contato" className="py-24 px-6 relative overflow-hidden bg-[#0A1120]/20 border-t border-white/5">
      {/* Glow highlight */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-stretch relative z-10">
        {/* Left Column: Contact details and info */}
        <div className="lg:col-span-5 flex flex-col justify-between text-left">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-primary block mb-3">
              Fale Conosco
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
              Agende um Diagnóstico <span className="font-serif italic font-normal text-primary text-glow">Gratuito</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8 font-light">
              Nossos especialistas estão prontos para analisar sua estrutura tributária atual e apresentar um plano prático de economia para sua empresa. Preencha o formulário e dê o primeiro passo.
            </p>

            <div className="space-y-6">
              {/* WhatsApp direct */}
              <a 
                href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+agendar+um+diagn%C3%B3stico+fiscal+para+minha+empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 hover:border-primary/20 rounded-2xl transition-all group"
              >
                <div className="w-11 h-11 bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-slate-950 rounded-xl flex items-center justify-center transition-all duration-300">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">Atendimento Imediato</p>
                  <p className="text-sm font-bold text-white mt-0.5">Falar direto pelo WhatsApp</p>
                </div>
              </a>

              {/* Email direct */}
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl">
                <div className="w-11 h-11 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">E-mail corporativo</p>
                  <p className="text-sm font-bold text-white mt-0.5">contato@visionariacontabil.com.br</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl">
                <div className="w-11 h-11 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">Sede Principal</p>
                  <p className="text-sm font-bold text-white mt-0.5">Av. Paulista, 1000 — Bela Vista, São Paulo/SP</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-slate-600 mt-12 leading-relaxed">
            Ao enviar seus dados, você concorda com nossa Política de Privacidade baseada na LGPD. Prometemos não enviar spam e manter seus dados sob absoluto sigilo contábil.
          </p>
        </div>

        {/* Right Column: Premium Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glassmorphism-premium p-8 lg:p-10 rounded-3xl border border-white/10 shadow-neon-glow h-full flex flex-col justify-center"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full flex items-center justify-center mb-6">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-3">Diagnóstico Agendado!</h3>
                <p className="text-slate-400 max-w-sm mx-auto leading-relaxed mb-6 font-light">
                  Recebemos seus dados. Um consultor tributário sênior entrará em contato via WhatsApp nas próximas horas para apresentar seu plano de economia.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-widest text-primary font-bold hover:underline"
                >
                  Enviar Novo Formulário
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="nome" className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Ex: Pedro Henrique"
                      className="bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:border-primary focus:outline-none transition-colors text-sm font-light placeholder:text-slate-600"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="empresa" className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5">
                      Nome da Empresa (Opcional)
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      placeholder="Ex: Minha Empresa Ltda"
                      className="bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:border-primary focus:outline-none transition-colors text-sm font-light placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Ex: pedro@empresa.com"
                      className="bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:border-primary focus:outline-none transition-colors text-sm font-light placeholder:text-slate-600"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="whatsapp" className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5">
                      WhatsApp para Contato *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="Ex: (11) 99999-9999"
                      className="bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:border-primary focus:outline-none transition-colors text-sm font-light placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="segmento" className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5">
                      Segmento de Atuação
                    </label>
                    <select
                      id="segmento"
                      value={formData.segmento}
                      onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
                      className="bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:border-primary focus:outline-none transition-colors text-sm font-light"
                    >
                      <option value="servicos" className="bg-[#0A1120] text-white">Prestação de Serviços</option>
                      <option value="tecnologia" className="bg-[#0A1120] text-white">Tecnologia e Desenvolvimento</option>
                      <option value="comercio" className="bg-[#0A1120] text-white">Comércio e Varejo</option>
                      <option value="industria" className="bg-[#0A1120] text-white">Indústria e Fábricas</option>
                      <option value="saude" className="bg-[#0A1120] text-white">Clínicas e Consultórios</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="faturamento" className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5">
                      Faturamento Mensal Estimado
                    </label>
                    <select
                      id="faturamento"
                      value={formData.faturamento}
                      onChange={(e) => setFormData({ ...formData, faturamento: e.target.value })}
                      className="bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:border-primary focus:outline-none transition-colors text-sm font-light"
                    >
                      <option value="ate-50k" className="bg-[#0A1120] text-white">Até R$ 50.000 / mês</option>
                      <option value="50k-100k" className="bg-[#0A1120] text-white">R$ 50.000 a R$ 100.000 / mês</option>
                      <option value="100k-300k" className="bg-[#0A1120] text-white">R$ 100.000 a R$ 300.000 / mês</option>
                      <option value="mais-300k" className="bg-[#0A1120] text-white">Mais de R$ 300.000 / mês</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-4 bg-gradient-to-r from-primary to-[#D4AF37] hover:from-[#D4AF37] hover:to-primary text-slate-950 font-extrabold rounded-xl transition-all duration-300 text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-102"
                >
                  <Send size={14} /> Solicitar Diagnóstico Gratuito
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
