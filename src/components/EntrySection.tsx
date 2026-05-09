import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, FolderOpen, Newspaper } from 'lucide-react';
import { ENTRIES } from '../data';
import { HandArrow, PlusCross, ScribbleLine, Sparkle } from './Doodles';

const visualByIndex = [
  {
    bg: 'bg-accent-brand-soft',
    border: 'border-accent-brand-border',
    accent: 'text-accent-brand',
    icon: Newspaper,
    shape: 'bg-accent-brand/12',
  },
  {
    bg: 'bg-accent-orange/70',
    border: 'border-[rgba(231,154,79,0.22)]',
    accent: 'text-accent-orange-strong',
    icon: FolderOpen,
    shape: 'bg-accent-orange-strong/12',
  },
  {
    bg: 'bg-accent-green/70',
    border: 'border-[rgba(91,170,122,0.22)]',
    accent: 'text-accent-green-strong',
    icon: Compass,
    shape: 'bg-accent-green-strong/12',
  },
];

export const EntrySection = () => {
  return (
    <section className="relative py-14 md:py-18">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[620px]">
          <span className="section-kicker mb-4">Start Here</span>
          <h2 className="text-[34px] leading-[1.1] md:text-[46px] font-semibold">
            从入口开始，不让你先被信息墙困住。
          </h2>
        </div>
        <div className="max-w-[360px] text-sm md:text-[15px] text-tx-tertiary">
          我们把首页最重要的三条动线拆成不同入口：先看判断、先拿资源、或直接进产品。
        </div>
      </div>

      <div className="relative grid gap-5 md:grid-cols-3 md:gap-6">
        <HandArrow className="absolute -top-10 right-[24%] hidden lg:block text-accent-brand/45" />
        {ENTRIES.map((entry, index) => {
          const visual = visualByIndex[index];
          const Icon = visual.icon;

          return (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className={`${index === 1 ? 'md:translate-y-6' : ''} ${index === 2 ? 'md:-translate-y-3' : ''}`}
            >
              <Link
                to={entry.href}
                className={`group relative block min-h-[280px] overflow-hidden rounded-[30px] border p-6 md:p-7 transition-all hover:-translate-y-1 hover:shadow-workshop ${visual.bg} ${visual.border}`}
              >
                <div className="absolute right-5 top-5">
                  <Sparkle className={`${visual.accent} opacity-60`} />
                </div>

                <div className={`mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${visual.shape} ${visual.accent}`}>
                  <Icon size={22} />
                </div>

                <div className="mb-4 flex items-center gap-3">
                  <span className="mono-label text-[11px] uppercase text-tx-quaternary">0{index + 1}</span>
                  <ScribbleLine className={`${visual.accent} w-16 opacity-40`} />
                </div>

                <h3 className="mb-3 text-[24px] md:text-[28px] leading-[1.25] font-semibold text-tx-primary">
                  {entry.title}
                </h3>
                <p className="max-w-[28ch] text-[15px] text-tx-secondary">{entry.description}</p>

                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-tx-primary">
                  {entry.buttonText}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>

                <div className="absolute bottom-4 right-4 opacity-45">
                  <PlusCross className={visual.accent} />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
