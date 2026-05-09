import React from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { LAB_UPDATES } from '../data';
import { PaperPlane, ScribbleLine } from './Doodles';

export const LabTimeline = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 md:py-30">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[40px] border border-border-default bg-[linear-gradient(180deg,rgba(255,253,248,0.86),rgba(239,229,214,0.68))] p-6 shadow-workshop md:p-8">
          <PaperPlane className="absolute right-8 top-8 text-accent-brand/45" />
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[650px]">
              <span className="section-kicker mb-4">Tranfu Lab Feed</span>
              <h2 className="text-[36px] leading-[1.1] md:text-[50px] font-semibold">不是静态案例库，而是一条正在发生的实验流。</h2>
            </div>
            <div className="max-w-[360px]">
              <p className="mb-4 text-[15px] text-tx-tertiary">
                我们把最近的推进、修改和犹豫都公开出来，让你看到产品是怎么一点点长出来的。
              </p>
              <Link to="/lab" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-brand">
                进入全量实验室
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="mb-8 flex items-center gap-4 rounded-full border border-border-subtle bg-surface/72 px-4 py-3 text-[11px] text-tx-quaternary mono-label uppercase">
            <span>3 active experiments</span>
            <span className="h-1 w-1 rounded-full bg-tx-faint" />
            <span>last commit 2h ago</span>
            <ScribbleLine className="ml-auto hidden w-20 text-accent-orange-strong/45 md:block" />
          </div>

          <div className="relative pl-0 md:pl-6">
            <div className="absolute bottom-0 left-[12px] top-0 hidden w-px bg-border-subtle md:block" />
            <div className="space-y-4">
              {LAB_UPDATES.slice(0, 5).map((update, idx) => (
                <motion.button
                  type="button"
                  key={`${update.project}-${idx}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  onClick={() => navigate(update.labId ? `/lab/${update.labId}` : '/lab')}
                  className="group relative flex w-full flex-col gap-4 rounded-[28px] border border-border-default bg-surface/84 p-5 text-left transition-all hover:-translate-y-1 hover:shadow-workshop md:flex-row md:items-start md:gap-6"
                >
                  <div className="hidden md:block absolute -left-[18px] top-7 h-3 w-3 rounded-full bg-accent-brand" />
                  <div className="md:w-[110px] md:flex-shrink-0">
                    <div className="inline-flex rounded-full bg-accent-brand-soft px-3 py-1 text-[10px] font-semibold text-accent-brand mono-label uppercase">
                      {update.timestamp}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-tx-primary">{update.project}</span>
                      <span className="rounded-full bg-accent-green px-2.5 py-1 text-[10px] font-semibold text-accent-green-strong">
                        {update.status}
                      </span>
                    </div>
                    <p className="text-[15px] text-tx-secondary">{update.update}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
