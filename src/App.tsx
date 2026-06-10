import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Credibility from './components/Credibility';
import About from './components/About';
import HowWeHelp from './components/HowWeHelp';
import Services from './components/Services';
import InfiniteCards from './components/InfiniteCards';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#05080F] text-[#E4E4E7] font-sans relative overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Background Tech Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#05080F] via-[#0A1120] to-[#0D1B3E] opacity-95 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Credibility />
          <About />
          <HowWeHelp />
          <Services />
          <InfiniteCards />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}
