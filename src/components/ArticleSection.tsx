import React from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { INSIGHTS } from '../data';
import { DottedCluster, Star } from './Doodles';

export const ArticleSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 md:py-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[680px]">
          <span className="section-kicker mb-4">Reading Notes</span>
          <h2 className="text-[36px] leading-[1.1] md:text-[48px] font-semibold">
            这里不是资讯堆砌，而是我们做事时留下来的判断记录。
          </h2>
        </div>
        <p className="max-w-[360px] text-[15px] text-tx-tertiary">
          它们更像一份正在更新的阅读清单，帮助你理解我们为什么这样做、为什么放弃、为什么继续。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
        <div className="relative overflow-hidden rounded-[34px] border border-border-default bg-accent-purple/38 p-6 md:p-7">
          <Star className="absolute right-5 top-5 text-accent-purple-strong/55" />
          <div className="mb-4 rounded-full bg-surface/88 px-3 py-1 text-[11px] font-semibold text-accent-purple-strong mono-label inline-flex uppercase">
            Why we share
          </div>
          <h3 className="mb-4 text-[28px] md:text-[34px] leading-[1.18] font-semibold text-tx-primary">
            不求每个结论都对，但求每个判断都有据可循。
          </h3>
          <p className="text-[15px] text-tx-secondary">
            所以这里保留的不只是结论，还有中间的判断逻辑、反例、转向和踩坑记录。
          </p>
          <div className="mt-8 rounded-[26px] border border-border-subtle bg-surface/78 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-semibold text-tx-primary">近期主题</span>
              <DottedCluster className="text-accent-purple-strong/55" />
            </div>
            <div className="space-y-2 text-sm text-tx-secondary">
              <div className="rounded-full bg-paper/85 px-3 py-2">Prompt 评审方式</div>
              <div className="rounded-full bg-paper/85 px-3 py-2">会议决策追踪</div>
              <div className="rounded-full bg-paper/85 px-3 py-2">为什么放弃泛资讯站</div>
            </div>
          </div>
          <Link to="/insights" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-brand">
            查看全部判断记录
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="space-y-4">
          {INSIGHTS.slice(0, 4).map((article, idx) => (
            <motion.button
              type="button"
              key={article.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => navigate(`/insights/${article.id}`)}
              className="group flex w-full flex-col gap-4 rounded-[30px] border border-border-default bg-surface/78 p-5 text-left transition-all hover:-translate-y-1 hover:shadow-workshop md:flex-row md:items-start"
            >
              <div className="flex items-start gap-3 md:w-[220px] md:flex-shrink-0">
                <span className="mt-1 inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-accent-brand-soft text-sm font-semibold text-accent-brand">
                  0{idx + 1}
                </span>
                <div>
                  <p className="text-[11px] font-semibold text-accent-brand mono-label uppercase">{article.category}</p>
                  <p className="mt-1 text-xs text-tx-quaternary">{article.date}</p>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-[22px] md:text-[26px] leading-[1.24] font-semibold text-tx-primary">
                  {article.title}
                </h4>
                <p className="text-sm text-tx-secondary">{article.oneLiner || article.summary}</p>
              </div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-tx-primary md:self-center">
                阅读
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
