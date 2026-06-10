import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { label: 'Anos de Experiência', value: '15+' },
  { label: 'Empresas Atendidas', value: '300+' },
  { label: 'Projetos Concluídos', value: '1.2k' },
];

export default function Credibility() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white/5 border border-white/5 rounded-2xl text-center"
          >
            <div className="text-4xl font-serif text-primary mb-2">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
