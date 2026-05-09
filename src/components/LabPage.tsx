import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Search, Activity, ArrowRight } from 'lucide-react';
import { EXPERIMENTS, EXPERIMENT_STAGES, LAB_UPDATES } from '../data';

export const LabPage = () => {
  const [activeStage, setActiveStage] = useState<string>('全部');
  const navigate = useNavigate();

  const filteredExperiments = activeStage === '全部' 
    ? EXPERIMENTS 
    : EXPERIMENTS.filter(e => e.status === activeStage);

  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="section-shell">
          <div className="page-hero-card p-6 md:p-8">
          <span className="section-kicker mb-5">TRANSFU WORKBENCH / OPEN LAB</span>
          <h1 className="page-hero-title mb-6">
            我们不只公开产品，<br />也公开所有的实验纠结。
          </h1>
          <p className="page-hero-copy max-w-2xl">
            这里的实验室记录了原子级的探索、失败的尝试和阶段性的胜利。我们认为，通往答案的过程本身就是一种可交付的资产。
          </p>
          </div>
        </div>
      </section>

      <section className="filter-shell">
        <div className="section-shell h-16 flex items-center gap-8 whitespace-nowrap">
          <span className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest">Stage:</span>
          {['全部', ...EXPERIMENT_STAGES].map(s => (
            <button
              key={s}
              onClick={() => setActiveStage(s)}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeStage === s ? 'text-tx-primary' : 'text-tx-tertiary hover:text-tx-primary'
              }`}
            >
              {s}
              {activeStage === s && (
                <motion.div layoutId="lab-filter-underline" className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-tx-primary" />
              )}
            </button>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredExperiments.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => navigate(`/lab/${exp.id}`)}
                className="group cursor-pointer flex flex-col p-8 bg-surface/82 border border-border-default rounded-[30px] hover:border-border-strong transition-all h-full"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="mono-label text-[11px] px-2 py-0.5 border border-accent-practical/20 text-accent-practical uppercase rounded-radius-badge">
                    {exp.status}
                  </span>
                  <span className="mono-label text-[10px] text-tx-quaternary uppercase">
                    ID: #{exp.id.toString().padStart(3, '0')}
                  </span>
                </div>
                
                <h3 className="text-[28px] serif-heading font-bold text-tx-primary mb-4 leading-tight group-hover:text-accent-brand transition-colors">
                  {exp.name}
                </h3>
                
                <p className="text-base text-tx-secondary leading-relaxed mb-10 min-h-[48px]">
                  {exp.motivation}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {exp.outputs.slice(0, 3).map(o => (
                    <span key={o} className="mono-label text-[10px] text-tx-tertiary bg-paper border border-border-subtle px-2 py-1 rounded-sm">
                      {o}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-border-subtle flex items-center justify-between text-sm font-medium text-tx-primary group-hover:gap-3 transition-all">
                  查看实验记录 <ArrowRight size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab History / Log */}
      <section className="py-24">
        <div className="section-shell">
          <div className="rounded-[36px] border border-border-default bg-[linear-gradient(180deg,rgba(255,253,248,0.84),rgba(239,229,214,0.72))] p-6 md:p-8 shadow-workshop">
          <div className="mb-16">
            <h2 className="text-[32px] serif-heading font-bold text-tx-primary mb-4">全量实验日志</h2>
            <p className="text-tx-tertiary text-lg">按照时间倒序排列的原子更新。包含所有正在发生的技术细节和方向调整。</p>
          </div>
          
          <div className="border-t border-border-subtle">
            {LAB_UPDATES.map((u, i) => (
              <div 
                key={i} 
                className="group flex flex-col md:flex-row gap-6 md:gap-12 py-8 border-b border-border-subtle hover:bg-surface/60 transition-colors px-4 -mx-4 cursor-pointer rounded-[22px]"
                onClick={() => u.labId && navigate(`/lab/${u.labId}`)}
              >
                <div className="md:w-32 flex-shrink-0 mono-label text-[12px] text-tx-quaternary pt-1 uppercase">
                  {u.timestamp}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[12px] font-medium text-accent-green-strong mono-label">{u.project}</span>
                    <span className="w-1 h-1 rounded-full bg-tx-faint" />
                    <span className="text-[11px] text-tx-quaternary uppercase tracking-widest mono-label">{u.status}</span>
                  </div>
                  <p className="text-lg text-tx-primary group-hover:text-accent-green-strong transition-colors leading-relaxed">
                    {u.update}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};
