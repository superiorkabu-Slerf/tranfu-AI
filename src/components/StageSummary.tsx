import React from 'react';
import { motion } from 'motion/react';
import { STAGE_STATS } from '../data';

export const StageSummary = () => {
  return (
    <section className="relative py-10 md:py-14">
      <div className="overflow-hidden rounded-[34px] border border-border-default bg-surface/72 shadow-[0_12px_30px_rgba(61,50,36,0.04)]">
        <div className="flex flex-wrap items-center gap-3 border-b border-border-subtle px-5 py-4 md:px-7">
          <span className="section-kicker !mb-0">Snapshot</span>
          <p className="text-sm text-tx-tertiary">不是一组 KPI，而是当前站点沉淀到哪一步的状态带。</p>
        </div>

        <div className="grid gap-px bg-border-subtle md:grid-cols-4">
          {STAGE_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="bg-surface/90 px-5 py-6 md:px-6"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="mono-label text-[11px] uppercase text-tx-quaternary">{stat.label}</span>
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${index === 0 ? 'bg-accent-brand-soft text-accent-brand' : index === 1 ? 'bg-accent-orange text-accent-orange-strong' : index === 2 ? 'bg-accent-purple text-accent-purple-strong' : 'bg-accent-green text-accent-green-strong'}`}>
                  {index % 2 === 0 ? 'growing' : 'active'}
                </span>
              </div>
              <div className="mb-2 text-[42px] md:text-[50px] leading-none font-semibold serif-heading text-tx-primary">
                {stat.value}
              </div>
              <p className="text-sm text-tx-tertiary">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
