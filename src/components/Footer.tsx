import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05080F] border-t border-white/5 pt-20 pb-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
        {/* Brand Info */}
        <div className="lg:col-span-5 text-left">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-[#D4AF37] to-primary-dark rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-[#05080F] font-black text-xl italic font-display">V</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wider text-white font-display leading-none">
                VISIONÁRIA
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A059] font-medium mt-1">
                Contabilidade Estratégica
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light max-w-sm">
            Unimos inteligência tributária, contabilidade digital avançada e gestão financeira premium para impulsionar e proteger o faturamento da sua empresa.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:border-primary/40 hover:text-primary flex items-center justify-center transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:border-primary/40 hover:text-primary flex items-center justify-center transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 hover:border-primary/40 hover:text-primary flex items-center justify-center transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-3 text-left">
          <h4 className="text-xs uppercase tracking-[0.2em] font-extrabold text-white mb-6">Navegação</h4>
          <ul className="space-y-4 text-sm">
            {[
              { label: 'Início', href: '#inicio' },
              { label: 'Sobre Nós', href: '#sobre' },
              { label: 'Como Ajudamos', href: '#como-ajudar' },
              { label: 'Serviços', href: '#servicos' },
              { label: 'Depoimentos', href: '#depoimentos' },
              { label: 'Contato', href: '#contato' },
            ].map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-slate-400 hover:text-primary transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-4 text-left">
          <h4 className="text-xs uppercase tracking-[0.2em] font-extrabold text-white mb-6">Fale Conosco</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 text-slate-400">
              <MapPin className="text-primary mt-1 shrink-0" size={16} />
              <span>Av. Paulista, 1000 — Bela Vista, São Paulo/SP</span>
            </li>
            <li className="flex items-center gap-3 text-slate-400">
              <Phone className="text-primary shrink-0" size={16} />
              <span>(11) 3214-5678 / (11) 99999-9999</span>
            </li>
            <li className="flex items-center gap-3 text-slate-400">
              <Mail className="text-primary shrink-0" size={16} />
              <span>contato@visionariacontabil.com.br</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal & Copyright */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
          <span>Visionária Contabilidade Estratégica © {currentYear}. Todos os direitos reservados.</span>
          <span className="hidden md:inline text-slate-700">|</span>
          <span>CNPJ: 00.000.000/0001-00</span>
          <span className="hidden md:inline text-slate-700">|</span>
          <span>CRC-SP 2SP000000/O-0</span>
        </div>
        <div className="flex gap-4">
          <a href="#contato" className="hover:underline">Políticas de Privacidade</a>
          <a href="#contato" className="hover:underline">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
