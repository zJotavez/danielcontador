import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { label: 'Anos de Experiência Fiscal', value: '15+', num: '01' },
  { label: 'Empresas Atendidas B2B', value: '300+', num: '02' },
  { label: 'Faturamento sob Gestão', value: 'R$ 1.2B', num: '03' },
];

export default function Credibility() {
  return (
    <section className="py-16 px-6 relative z-10 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-center justify-between divide-y md:divide-y-0 md:divide-x divide-slate-200/50">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center md:items-start md:px-12 text-center md:text-left group"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[9px] font-mono text-primary/80">{stat.num}</span>
              <span className="w-1.5 h-1.5 bg-primary/20 rounded-full group-hover:bg-primary transition-colors duration-300"></span>
            </div>
            
            <div className="text-5xl md:text-6xl font-black font-display text-slate-900 tracking-tight transition-fluid group-hover:scale-102">
              {stat.value}
            </div>
            
            <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-bold mt-2 font-mono">
              // {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
