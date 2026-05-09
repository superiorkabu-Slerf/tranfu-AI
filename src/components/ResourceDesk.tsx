import React from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, FolderKanban, NotebookTabs, PackageOpen, StickyNote } from 'lucide-react';
import { RESOURCES } from '../data';
import { PlusCross, ScribbleLine } from './Doodles';

const icons = [FolderKanban, NotebookTabs, PackageOpen, StickyNote];
const tones = [
  'bg-accent-brand-soft border-accent-brand-border',
  'bg-accent-orange/64 border-[rgba(231,154,79,0.2)]',
  'bg-accent-green/64 border-[rgba(91,170,122,0.22)]',
  'bg-accent-purple/60 border-[rgba(123,104,217,0.2)]',
];

export const ResourceDesk = () => {
  const navigate = useNavigate();
  const items = RESOURCES.slice(0, 4);

  return (
    <section className="relative py-24 md:py-30">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[640px]">
          <span className="section-kicker mb-4">Takeaway Desk</span>
          <h2 className="text-[36px] leading-[1.1] md:text-[50px] font-semibold">
            我们把踩过的坑，整理成你可以顺手带走的资源包。
          </h2>
        </div>
        <div className="max-w-[380px] text-[15px] text-tx-tertiary">
          这些资源不是挂在角落的附件，而是已经被反复使用和修正过的工作结构。
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="relative overflow-hidden rounded-[36px] border border-border-default bg-surface/82 p-6 shadow-workshop md:p-7">
          <div className="absolute right-6 top-6">
            <PlusCross className="text-accent-brand/45" />
          </div>
          <div className="mb-4 inline-flex rounded-full bg-accent-yellow px-3 py-1 text-[11px] font-semibold text-tx-primary mono-label uppercase">
            Resource Shelf
          </div>
          <h3 className="mb-4 text-[28px] leading-[1.18] md:text-[36px] font-semibold text-tx-primary">
            不是把文档堆给你，而是给你一套更容易上手的做事骨架。
          </h3>
          <p className="max-w-[30rem] text-[15px] text-tx-secondary">
            Skill、Agent、任务包和方法模板都应该像桌面上的常用工具，随手可取，而不是藏在一堆说明里。
          </p>

          <div className="mt-8 rounded-[28px] border border-border-subtle bg-paper/70 p-4 md:p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-tx-primary">桌面工具条</p>
              <ScribbleLine className="w-20 text-accent-orange-strong/45" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[22px] border border-border-subtle bg-accent-brand-soft/75 p-4">
                <p className="text-xs text-accent-brand font-semibold">判断结构</p>
                <p className="mt-2 text-sm text-tx-primary">先判断值不值得做，再决定怎么做。</p>
              </div>
              <div className="rounded-[22px] border border-border-subtle bg-accent-green/75 p-4">
                <p className="text-xs text-accent-green-strong font-semibold">会议链路</p>
                <p className="mt-2 text-sm text-tx-primary">把会议结论接到后续动作上。</p>
              </div>
              <div className="rounded-[22px] border border-border-subtle bg-accent-orange/75 p-4 sm:col-span-2">
                <p className="text-xs text-accent-orange-strong font-semibold">Prompt QA Board</p>
                <p className="mt-2 text-sm text-tx-primary">把“感觉不稳定”拆成可以检查和复用的结构。</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-tx-tertiary">
            <span className="h-2 w-2 rounded-full bg-accent-green-strong" />
            当前可直接查看 4 个核心资源入口
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((res, idx) => {
            const Icon = icons[idx];
            return (
              <motion.button
                type="button"
                key={res.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => navigate(`/resources/${res.id}`)}
                className={`group rounded-[30px] border p-5 text-left transition-all hover:-translate-y-1 hover:shadow-workshop ${tones[idx]}`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface/85 text-tx-primary">
                    <Icon size={22} />
                  </div>
                  <span className="rounded-full bg-surface/82 px-3 py-1 text-[10px] font-semibold text-tx-quaternary mono-label uppercase">
                    {res.type}
                  </span>
                </div>
                <h4 className="mb-3 text-[24px] leading-[1.22] font-semibold text-tx-primary">{res.name}</h4>
                <p className="mb-5 text-sm text-tx-secondary">{res.oneLiner}</p>
                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-tx-primary">
                  {res.action}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </motion.button>
            );
          })}

          <div className="sm:col-span-2 rounded-[30px] border border-border-default bg-surface/74 p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="section-kicker !mb-0">All Resources</span>
              <Link to="/resources" className="text-sm font-semibold text-accent-brand">
                查看所有资源
              </Link>
            </div>
            <p className="text-sm text-tx-tertiary">每份资源都对应一个真实问题场景，而不是抽象知识分类。</p>
          </div>
        </div>
      </div>
    </section>
  );
};
