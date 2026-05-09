import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Clock } from 'lucide-react';
import { INSIGHTS, INSIGHT_CATEGORIES } from '../data';

export const InsightsPage = () => {
  const [filter, setFilter] = useState('全部');
  const navigate = useNavigate();

  const filteredInsights = INSIGHTS.filter(i => filter === '全部' || i.category === filter);

  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="section-shell">
          <div className="page-hero-card p-6 md:p-8">
          <span className="section-kicker mb-5">TRANSFU WORKBENCH / INSIGHTS</span>
          <h1 className="page-hero-title mb-6">
            记录 AI 时代的<br />真实判断。
          </h1>
          <p className="page-hero-copy max-w-2xl">
            这里收录的是我们的学习笔记、深度复盘和行业观察。我们不追求每个结论都正确，但求每个判断都有迹可循。
          </p>
          </div>
        </div>
      </section>

      <section className="filter-shell">
        <div className="section-shell h-16 flex items-center gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <span className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest">Column:</span>
          {['全部', ...INSIGHT_CATEGORIES.map(c => c.name)].map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`text-sm font-medium transition-colors relative py-1 ${
                filter === s ? 'text-tx-primary' : 'text-tx-tertiary hover:text-tx-primary'
              }`}
            >
              {s}
              {filter === s && (
                <motion.div layoutId="insight-filter-underline" className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-tx-primary" />
              )}
            </button>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell space-y-16">
          {filteredInsights.map((article, idx) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => navigate(`/insights/${article.id}`)}
              className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-8 items-start rounded-[32px] border border-border-default bg-surface/72 p-5 md:p-6"
            >
              <div className="md:col-span-4">
                <div className="aspect-[16/10] bg-surface rounded-[28px] overflow-hidden border border-border-subtle group-hover:border-border-strong transition-all">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]" 
                  />
                </div>
              </div>
              <div className="md:col-span-8 flex flex-col pt-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="mono-label text-[11px] text-accent-brand uppercase tracking-widest">{article.category}</span>
                  <div className="flex items-center gap-1.5 text-tx-tertiary">
                    <Clock size={12} />
                    <span className="mono-label text-[11px] uppercase tracking-widest">{article.date}</span>
                  </div>
                </div>
                <h3 className="text-[28px] serif-heading font-bold text-tx-primary mb-6 group-hover:text-accent-brand transition-colors leading-tight tracking-tight">
                  {article.title}
                </h3>
                <p className="text-base text-tx-secondary leading-relaxed mb-8 line-clamp-2">
                  {article.summary}
                </p>
                <div className="mt-auto flex items-center gap-2 text-sm font-medium text-tx-primary group-hover:gap-3 transition-all border-b border-transparent group-hover:border-tx-primary w-fit pb-1">
                  阅读全文 <ArrowRight size={18} />
                </div>
              </div>
            </motion.article>
          ))}

          {filteredInsights.length === 0 && (
            <div className="text-center py-32 border border-dashed border-border-subtle rounded-[28px] bg-surface/60">
              <p className="text-tx-tertiary">暂时没有该分类下的文章内容</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
