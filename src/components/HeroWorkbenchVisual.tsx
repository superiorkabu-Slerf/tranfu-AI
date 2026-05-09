import React from 'react';
import { motion } from 'motion/react';
import { DottedCluster, HandArrow, LoopArrow, PaperPlane, PlusCross, Sparkle, Star } from './Doodles';

const flowNodes = [
  { label: '判断', tone: 'bg-accent-brand-soft text-accent-brand' },
  { label: '验证', tone: 'bg-accent-orange text-accent-orange-strong' },
  { label: '沉淀', tone: 'bg-accent-green text-accent-green-strong' },
];

export const HeroWorkbenchVisual = () => {
  return (
    <div className="relative mx-auto w-full max-w-[700px] h-[400px] sm:h-[470px] lg:h-[620px]">
      <div className="absolute left-[8%] top-[9%] h-[82%] w-[84%] rounded-[42px] bg-surface/72 border border-border-subtle shadow-workshop" />
      <div className="absolute inset-x-[10%] top-[12%] h-[78%] rounded-[38px] bg-[linear-gradient(180deg,rgba(255,253,248,0.82),rgba(247,241,232,0.82))] border border-border-subtle" />

      <motion.div
        initial={{ opacity: 0, y: 18, rotate: -1.5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="floating-panel absolute left-[12%] top-[16%] z-20 w-[72%] rounded-[32px] p-4 sm:p-5 lg:p-6"
      >
        <div className="mb-5 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent-orange-strong/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent-green-strong/45" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent-brand/40" />
          </div>
          <span className="rounded-full bg-accent-brand-soft px-3 py-1 text-[10px] font-semibold text-accent-brand mono-label uppercase">
            Practice Desk
          </span>
        </div>

        <div className="rounded-[24px] border border-border-subtle bg-paper/80 p-4">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-tx-primary">本周工作台</p>
              <p className="text-xs text-tx-quaternary">从想法到可复用产出</p>
            </div>
            <div className="status-sticker">进行中</div>
          </div>

          <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[22px] border border-border-subtle bg-surface p-4">
              <div className="mb-3 flex items-center justify-between text-xs">
                <span className="font-semibold text-tx-primary">项目判断 Agent</span>
                <span className="text-accent-green-strong">68%</span>
              </div>
              <div className="mb-4 h-2 rounded-full bg-divider/70 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '68%' }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="h-full rounded-full bg-accent-brand"
                />
              </div>
              <div className="space-y-2">
                {['问题澄清', '风险曝光', '下一步建议'].map((item, index) => (
                  <div key={item} className="flex items-center gap-2 rounded-full bg-surface/80 px-3 py-2 text-xs text-tx-secondary">
                    <span className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-accent-brand' : index === 1 ? 'bg-accent-orange-strong' : 'bg-accent-green-strong'}`} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[22px] border border-border-subtle bg-accent-brand-soft/70 p-4">
              <p className="mb-3 text-xs font-semibold text-accent-brand">可复用资源包</p>
              <div className="space-y-2">
                {['Prompt QA', 'PRD Skill', '会议记忆'].map((item, index) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl bg-surface/90 px-3 py-2 text-xs text-tx-primary shadow-[0_6px_14px_rgba(61,50,36,0.04)]">
                    <span>{item}</span>
                    <span className={`rounded-full px-2 py-1 text-[10px] ${index === 0 ? 'bg-accent-purple text-accent-purple-strong' : index === 1 ? 'bg-accent-green text-accent-green-strong' : 'bg-accent-orange text-accent-orange-strong'}`}>
                      ready
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {flowNodes.map((node) => (
              <div key={node.label} className="rounded-2xl border border-border-subtle bg-surface/80 p-3 text-center">
                <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ${node.tone}`}>
                  {node.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        className="floating-panel absolute right-[3%] top-[7%] z-30 w-[34%] rounded-[24px] bg-accent-yellow/92 p-4 rotate-[4deg]"
      >
        <p className="text-sm font-semibold text-tx-primary">边做边公开，边改边沉淀。</p>
        <p className="mt-2 text-xs text-tx-tertiary">不是展示结果，而是展示过程。</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="floating-panel absolute -left-[1%] bottom-[12%] z-20 w-[32%] rounded-[26px] p-4 -rotate-[6deg]"
      >
        <p className="mb-3 text-[11px] text-tx-quaternary mono-label uppercase">资源文件夹</p>
        <div className="space-y-2">
          <div className="rounded-2xl bg-accent-orange/70 px-3 py-2 text-xs text-tx-primary">判断结构 / v2</div>
          <div className="rounded-2xl bg-accent-green/72 px-3 py-2 text-xs text-tx-primary">会议追踪模板</div>
          <div className="rounded-2xl bg-accent-purple/72 px-3 py-2 text-xs text-tx-primary">Prompt QA 板</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ rotate: [2, 0, 2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="floating-panel absolute right-[8%] bottom-[7%] z-10 w-[30%] rounded-[24px] p-4"
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-tx-primary">节点关系</span>
          <PlusCross className="text-accent-brand/70" />
        </div>
        <svg viewBox="0 0 180 94" className="w-full text-accent-brand/65">
          <path d="M26 54C38 28 66 24 90 40C112 56 135 40 154 22" stroke="currentColor" strokeWidth="1.8" strokeDasharray="5 6" fill="none" />
          <circle cx="24" cy="54" r="7" fill="#FFFDF8" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="90" cy="40" r="7" fill="#FFFDF8" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="154" cy="22" r="7" fill="#FFFDF8" stroke="currentColor" strokeWidth="1.8" />
        </svg>
        <p className="mt-2 text-[11px] text-tx-tertiary">资源、实验与产品互相反哺。</p>
      </motion.div>

      <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 700 620">
        <path d="M150 130C205 88 250 96 310 140" stroke="rgba(231,154,79,0.45)" strokeWidth="2" fill="none" strokeDasharray="5 6" />
        <path d="M190 472C260 432 330 438 396 474" stroke="rgba(91,170,122,0.5)" strokeWidth="2" fill="none" strokeDasharray="5 6" />
        <path d="M448 150C534 122 590 162 612 228" stroke="rgba(79,111,255,0.35)" strokeWidth="2" fill="none" strokeDasharray="5 6" />
      </svg>

      <PaperPlane className="absolute right-[0%] top-[30%] text-accent-brand/45" />
      <Star className="absolute left-[4%] top-[18%] text-accent-orange-strong/55" />
      <Sparkle className="absolute left-[15%] bottom-[4%] text-accent-purple-strong/65" />
      <Sparkle className="absolute right-[18%] top-[4%] text-accent-green-strong/65" />
      <DottedCluster className="absolute left-[0%] bottom-[24%] text-tx-faint/70" />
      <LoopArrow className="absolute left-[6%] top-[4%] text-accent-orange-strong/45" />
      <HandArrow className="absolute right-[17%] bottom-[33%] text-accent-brand/45 rotate-[12deg]" />
    </div>
  );
};
