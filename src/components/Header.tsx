import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { num: '01', label: 'Início', href: '#inicio' },
    { num: '02', label: 'Sobre', href: '#sobre' },
    { num: '03', label: 'Triagem', href: '#como-ajudar' },
    { num: '04', label: 'Serviços', href: '#servicos' },
    { num: '05', label: 'Depoimentos', href: '#depoimentos' },
    { num: '06', label: 'Diagnóstico', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#05080F]/70 backdrop-blur-md border-b border-white/5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary via-[#D4AF37] to-primary-dark rounded-xl flex items-center justify-center shadow-lg shadow-primary/15 group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <span className="text-[#05080F] font-black text-xl italic font-display">V</span>
          </div>
          <div className="flex flex-col">
            <span className="text-md font-extrabold tracking-[0.15em] text-white font-display leading-none group-hover:text-primary transition-colors duration-300">
              VISIONÁRIA
            </span>
            <span className="text-[8px] uppercase tracking-[0.28em] text-[#C5A059] font-semibold mt-1">
              Contabilidade Estratégica
            </span>
          </div>
        </a>

        {/* Desktop Navigation with Designer Indexing */}
        <div className="hidden lg:flex gap-8 text-[13px] font-medium tracking-wide">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-white transition-colors duration-300 relative py-2 group flex items-center gap-1.5"
            >
              <span className="text-[9px] font-mono text-primary font-bold">{item.num}</span>
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* WhatsApp Button (Desktop) */}
        <a 
          href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+agendar+um+diagn%C3%B3stico+fiscal+para+minha+empresa."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex bg-gradient-to-r from-primary to-[#D4AF37] hover:from-[#D4AF37] hover:to-primary text-slate-950 px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.15em] font-extrabold items-center gap-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-103 hover:shadow-neon-primary active:scale-97 border border-primary/20"
        >
          <Phone size={12} className="animate-bounce" /> Agendar Diagnóstico
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white hover:text-primary transition-colors focus:outline-none transition-fluid"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-20 z-40 bg-[#05080F]/98 backdrop-blur-2xl border-t border-white/5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-8 gap-6 text-lg font-medium tracking-wide">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-primary transition-colors border-b border-white/5 pb-3 flex items-center gap-2"
            >
              <span className="text-xs font-mono text-primary">{item.num}</span>
              <span>{item.label}</span>
            </a>
          ))}
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+agendar+um+diagn%C3%B3stico+fiscal+para+minha+empresa."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-primary hover:bg-[#D4AF37] text-slate-950 py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20"
          >
            <Phone size={16} /> Falar com Especialista
          </a>
        </div>
      </div>
    </header>
  );
}
