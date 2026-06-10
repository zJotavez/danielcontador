import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Como Ajudamos', href: '#como-ajudar' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#05080F]/85 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary via-[#D4AF37] to-primary-dark rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
            <span className="text-[#05080F] font-black text-xl italic font-display">V</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-wider text-white font-display leading-none group-hover:text-primary transition-colors">
              VISIONÁRIA
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A059] font-medium mt-1">
              Contabilidade Estratégica
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 text-sm font-medium tracking-wide">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-primary transition-colors relative py-2 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* WhatsApp Button (Desktop) */}
        <a 
          href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+agendar+um+diagn%C3%B3stico+fiscal+para+minha+empresa."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex bg-gradient-to-r from-primary to-[#D4AF37] hover:from-[#D4AF37] hover:to-primary text-slate-950 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-extrabold items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-neon-primary active:scale-95"
        >
          <Phone size={14} className="animate-bounce" /> Agendar Diagnóstico
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white hover:text-primary transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-20 z-40 bg-[#05080F]/95 backdrop-blur-xl border-t border-white/5 transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-8 gap-6 text-lg font-medium tracking-wide">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-primary transition-colors border-b border-white/5 pb-3"
            >
              {item.label}
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
