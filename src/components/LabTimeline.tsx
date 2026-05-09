import React from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { LAB_UPDATES } from '../data';

export const LabTimeline = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-40 pb-32 bg-inverse text-white">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="mb-12 flex justify-center">
          <div className="inline-flex items-center gap-4 px-6 py-1.5 rounded-full border border-white/10 bg-white/5">
            <span className="mono-label text-[10px] text-tx-quaternary">─── tranfu-lab ─── 3 个进行中实验 ─── 最近更新于 2 小时前 ───</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-[32px] serif-heading font-bold text-white mb-4">正在发生</h2>
            <p className="text-tx-quaternary text-lg leading-relaxed">
              这些实验可能成功，可能失败，但一定真实。我们记录下原子级的探索、甚至是那些被放弃的代码片段。
            </p>
          </div>
          <Link 
            to="/lab" 
            className="text-sm font-medium text-tx-tertiary hover:text-white transition-colors underline underline-offset-8 decoration-white/10"
          >
            进入全量实验室 →
          </Link>
        </div>

        <div className="border-t border-white/10">
          {LAB_UPDATES.slice(0, 5).map((update, idx) => (
            <motion.div 
              key={update.project + idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => navigate(update.labId ? `/lab/${update.labId}` : '/lab')}
              className="group cursor-pointer flex flex-col md:flex-row gap-6 md:gap-12 py-8 border-b border-white/10 hover:bg-white/[0.02] transition-all px-4 -mx-4"
            >
              <div className="md:w-32 flex-shrink-0 mono-label text-[12px] text-tx-quaternary pt-1 flex items-center gap-2">
                {idx === 0 && <span className="w-1.5 h-3 bg-accent-practical terminal-cursor" />}
                [{update.timestamp}]
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[12px] font-medium text-accent-practical mono-label">
                    {update.project}
                  </span>
                  <span className="w-px h-3 bg-white/10" />
                  <span className="text-[11px] text-white/40 uppercase tracking-widest mono-label">
                    {update.status}
                  </span>
                </div>
                <h4 className="text-xl font-medium text-white group-hover:text-accent-practical transition-colors leading-relaxed">
                  {update.update}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
