import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import XDivider from './components/XDivider';
import Credibility from './components/Credibility';
import About from './components/About';
import HowWeHelp from './components/HowWeHelp';
import Services from './components/Services';
import InfiniteCards from './components/InfiniteCards';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans relative overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Background Tech Grid (Light Mode Accent on Pure White) */}
      <div 
        className="absolute inset-0 opacity-35 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(197, 160, 89, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(197, 160, 89, 0.03) 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }}
      ></div>
      <div className="absolute inset-0 bg-white pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <XDivider />
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
