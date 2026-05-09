import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-40 bg-paper overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 relative z-10 text-left">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="mono-label text-[12px] text-tx-tertiary uppercase mb-6 block">
            TRANFU / AI Product Practice Workbench
          </span>
          
          <h1 className="text-[48px] md:text-[64px] leading-[1.05] serif-heading font-bold text-tx-primary mb-8 tracking-tighter">
            把 AI 产品实践、可复用资源和真实过程，<br className="hidden md:block" />
            公开给真正要动手的人。
          </h1>

          <div className="mb-10 inline-flex items-center gap-3 px-4 py-2 border border-border-subtle rounded-[4px] bg-paper shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent-practical terminal-cursor" />
            <span className="mono-label text-[11px] text-tx-secondary uppercase">
               3 experiments running  ·  Last update: 2h ago  ·  7 resources available
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-tx-secondary mb-12 max-w-2xl leading-relaxed">
            不搬运别人的答案。我们自己做，做完公开，做错也公开。
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link 
              to="/products"
              className="h-[44px] px-8 flex items-center justify-center bg-inverse text-white text-base font-medium rounded-radius-button hover:bg-black transition-colors"
            >
              先看产品
            </Link>
            <Link 
              to="/resources"
              className="h-[44px] px-8 flex items-center justify-center border border-border-default text-tx-primary text-base font-medium rounded-radius-button hover:border-border-strong hover:bg-surface transition-all"
            >
              拿走资源
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
