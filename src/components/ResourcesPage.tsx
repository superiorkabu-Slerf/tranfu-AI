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
    <div className="bg-paper min-h-screen">
      {/* Header Section */}
      <section className="pt-24 pb-16 border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <span className="mono-label text-[12px] text-tx-tertiary uppercase mb-4 block">TRANSFU WORKBENCH / RESOURCES</span>
          <h1 className="text-[48px] serif-heading font-bold text-tx-primary mb-6 tracking-tighter">
            拿走工程级、<br />真实的 AI 可复用资源。
          </h1>
          <p className="text-lg text-tx-secondary max-w-2xl leading-relaxed">
            这里的每个资源（Prompt、组件、研究报告）都来自我们的真实实验项目。你可以将它们作为解决特定工程问题的起点。
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[64px] z-30 bg-paper/80 backdrop-blur-md border-b border-border-subtle overflow-x-auto">
        <div className="max-w-[1120px] mx-auto px-6 h-16 flex items-center justify-between gap-8 whitespace-nowrap">
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
          
          <div className="relative flex items-center min-w-[240px]">
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

      {/* Resources Grid */}
      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredResources.map((res, idx) => (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group flex flex-col p-6 bg-elevated border border-border-subtle rounded-radius-card hover:border-border-strong hover:shadow-workshop hover:-translate-y-0.5 transition-all cursor-pointer"
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
            <div className="text-center py-32 border border-dashed border-border-subtle rounded-radius-card">
              <p className="text-tx-tertiary mb-6">没有找到匹配的实验资源</p>
              <button 
                onClick={() => { setFilter('全部'); setSearchQuery(''); }}
                className="h-10 px-6 bg-inverse text-white text-sm font-medium rounded-radius-button hover:bg-black transition-colors"
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
