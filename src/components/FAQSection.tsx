import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Minus, Plus } from 'lucide-react';
import { FAQS } from '../data';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-14">
        <div>
          <span className="section-kicker mb-4">FAQ</span>
          <h2 className="text-[34px] leading-[1.1] md:text-[44px] font-semibold">把常见疑问讲清楚，再决定要不要继续往下看。</h2>
          <p className="mt-4 max-w-[28rem] text-[15px] text-tx-tertiary">
            这里保持尽量简单，不额外加重装饰，让信息本身足够容易读。
          </p>
        </div>

        <div className="rounded-[32px] border border-border-default bg-surface/78 px-5 py-3 shadow-[0_10px_24px_rgba(61,50,36,0.05)] md:px-7">
          {FAQS.map((faq, idx) => (
            <div key={faq.question} className="border-b border-border-subtle last:border-b-0">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-[18px] md:text-[20px] font-semibold text-tx-primary">{faq.question}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-paper/80 text-tx-primary">
                  {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.24 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 pr-2 text-[15px] text-tx-secondary">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
