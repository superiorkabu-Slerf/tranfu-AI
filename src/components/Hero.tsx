import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HeroWorkbenchVisual } from './HeroWorkbenchVisual';
import { HandArrow, ScribbleLine } from './Doodles';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32 pb-24 md:pb-30">
      <div className="absolute inset-x-0 top-6 md:top-16 h-[640px] bg-[radial-gradient(circle_at_25%_20%,rgba(255,243,184,0.32),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(79,111,255,0.12),transparent_22%),radial-gradient(circle_at_70%_80%,rgba(223,243,231,0.3),transparent_22%)]" />

      <div className="section-shell relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 min-h-[720px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="relative"
          >
            <div className="section-kicker mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-green-strong terminal-cursor" />
              TRANFU / Product Practice Station
            </div>

            <div className="relative mb-8">
              <HandArrow className="absolute -top-7 right-2 hidden md:block text-accent-orange-strong/60" />
              <h1 className="max-w-[680px] text-[42px] leading-[1.04] sm:text-[48px] md:text-[68px] lg:text-[76px] font-semibold text-tx-primary">
                把 AI 产品实践、可复用资源和真实过程，公开给真正要动手的人。
              </h1>
            </div>

            <p className="max-w-[560px] text-[17px] md:text-[20px] text-tx-secondary mb-8">
              不搬运别人的答案。我们自己做，边做边整理，边整理边公开，让产品、资源与判断都能真正被拿去使用。
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-7">
              <Link to="/products" className="primary-button">
                先看产品
                <ArrowRight size={16} />
              </Link>
              <Link to="/resources" className="secondary-button">
                拿走资源
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[13px] text-tx-tertiary">
              <div className="inline-flex items-center gap-2 rounded-full border border-border-default bg-surface/70 px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-accent-green-strong" />
                3 个实验正在推进
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-accent-brand-soft/70 px-4 py-2">
                7 份资源可直接拿走
              </div>
              <span className="mono-label text-[11px] uppercase tracking-[0.18em]">Last update 2h ago</span>
            </div>

            <div className="mt-8 flex items-center gap-4 text-tx-quaternary">
              <ScribbleLine className="hidden sm:block w-20 text-accent-purple-strong/45" />
              <p className="text-sm">
                我们把“正在发生”摆在台面上，方便你更快判断下一步要不要继续深入。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: 'easeOut' }}
            className="relative"
          >
            <HeroWorkbenchVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
