import React from 'react';
import { motion } from 'motion/react';
import { STAGE_STATS } from '../data';

export const StageSummary = () => {
  return (
    <section className="py-8 border-y border-border-subtle mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {STAGE_STATS.map((stat, index) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center md:items-start text-center md:text-left relative md:after:absolute md:after:right-[-4px] md:after:top-1/2 md:after:-translate-y-1/2 md:after:w-px md:after:h-8 md:after:bg-border-subtle last:after:hidden"
          >
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[42px] font-serif font-bold text-tx-primary leading-none tracking-tighter">
                {stat.value}
              </span>
              <span className="text-xs font-mono font-bold text-accent-practical">
                {index % 2 === 0 ? '↑' : '—'}
              </span>
            </div>
            <span className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
