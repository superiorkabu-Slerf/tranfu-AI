import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { RESOURCES, RESOURCE_CATEGORIES } from '../data';

export const ResourcesPage = () => {
  const [filter, setFilter] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredResources = RESOURCES.filter(res => {
    const matchesFilter = filter === '全部' || res.category === filter;
    const matchesSearch = res.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         res.oneLiner.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="section-shell">
          <div className="page-hero-card p-6 md:p-8">
          <span className="section-kicker mb-5">TRANSFU WORKBENCH / RESOURCES</span>
          <h1 className="page-hero-title mb-6">
            拿走工程级、<br />真实的 AI 可复用资源。
          </h1>
          <p className="page-hero-copy max-w-2xl">
            这里的每个资源（Prompt、组件、研究报告）都来自我们的真实实验项目。你可以将它们作为解决特定工程问题的起点。
          </p>
          </div>
        </div>
      </section>

      <section className="filter-shell">
        <div className="section-shell h-16 flex items-center justify-between gap-8 whitespace-nowrap">
          <div className="flex items-center gap-6">
            <span className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest">Type:</span>
            {['全部', ...RESOURCE_CATEGORIES.map(c => c.name)].map(s => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  filter === s ? 'text-tx-primary' : 'text-tx-tertiary hover:text-tx-primary'
                }`}
              >
                {s}
                {filter === s && (
                  <motion.div layoutId="res-filter-underline" className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-tx-primary" />
                )}
              </button>
            ))}
          </div>
          
          <div className="relative flex items-center min-w-[240px] rounded-full border border-border-subtle bg-paper/80 px-4">
            <Search size={16} className="absolute left-0 text-tx-tertiary" />
            <input 
              type="text" 
              placeholder="搜索资源或解决的问题..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent pl-7 py-2 text-sm text-tx-primary outline-none placeholder:text-tx-quaternary"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredResources.map((res, idx) => (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group flex flex-col p-6 bg-surface/86 border border-border-default rounded-[28px] hover:border-border-strong hover:shadow-workshop hover:-translate-y-0.5 transition-all cursor-pointer"
                onClick={() => navigate(`/resources/${res.id}`)}
              >
                <div className="mono-label text-[11px] text-accent-alert uppercase mb-4">
                  {res.type}
                </div>
                
                <h3 className="text-[18px] font-bold text-tx-primary mb-3 leading-snug group-hover:text-accent-brand transition-colors">
                  {res.name}
                </h3>
                
                <p className="text-xs text-tx-tertiary mb-6 line-clamp-3 leading-relaxed">
                  {res.oneLiner}
                </p>

                <div className="mt-auto pt-4 border-t border-border-subtle flex items-center justify-between">
                  <span className="text-[11px] font-medium text-tx-primary group-hover:underline underline-offset-4 tracking-wider">TAKE IT</span>
                  <ArrowRight size={14} className="text-tx-quaternary group-hover:text-tx-primary transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-32 border border-dashed border-border-subtle rounded-[28px] bg-surface/60">
              <p className="text-tx-tertiary mb-6">没有找到匹配的实验资源</p>
              <button 
                onClick={() => { setFilter('全部'); setSearchQuery(''); }}
                className="primary-button h-10 px-6 text-sm"
              >
                显示全部资源
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
