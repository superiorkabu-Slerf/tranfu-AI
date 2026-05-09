import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { PRODUCTS, PRODUCT_STATUSES } from '../data';

export const ProductsPage = () => {
  const [filter, setFilter] = useState<string>('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesFilter = filter === '全部' || p.status === filter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.oneLiner.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="section-shell">
          <div className="page-hero-card p-6 md:p-8">
          <span className="section-kicker mb-5">TRANSFU WORKBENCH / PRODUCTS</span>
          <h1 className="page-hero-title mb-6">
            我们正在真实构建的<br />AI 产品实验室
          </h1>
          <p className="page-hero-copy max-w-2xl">
            这里的每个项目都不是最终的结论，而是持续演进中的过程。我们保留所有的决策记录，包括那些被暂停和放弃的方向。
          </p>
          </div>
        </div>
      </section>

      <section className="filter-shell">
        <div className="section-shell flex h-16 items-center justify-between gap-8 whitespace-nowrap">
          <div className="flex items-center gap-6">
            <span className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest">Filter:</span>
            {['全部', ...PRODUCT_STATUSES].map(s => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  filter === s ? 'text-tx-primary' : 'text-tx-tertiary hover:text-tx-primary'
                }`}
              >
                {s}
                {filter === s && (
                  <motion.div layoutId="filter-underline" className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-tx-primary" />
                )}
              </button>
            ))}
          </div>
          
          <div className="relative flex items-center min-w-[240px] rounded-full border border-border-subtle bg-paper/80 px-4">
            <Search size={16} className="absolute left-0 text-tx-tertiary" />
            <input 
              type="text" 
              placeholder="搜索项目或描述..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent pl-7 py-2 text-sm text-tx-primary outline-none placeholder:text-tx-quaternary"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group cursor-pointer"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                <div className="aspect-[16/10] bg-surface rounded-[30px] overflow-hidden border border-border-subtle group-hover:border-border-strong transition-all mb-6 shadow-[0_8px_20px_rgba(61,50,36,0.04)]">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]" />
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="mono-label text-[11px] text-accent-practical uppercase">{product.status}</span>
                    <span className="w-1 h-1 rounded-full bg-border-bold" />
                    <span className="mono-label text-[11px] text-tx-quaternary uppercase">#{product.tags[0]}</span>
                  </div>
                  
                  <h3 className="text-[24px] serif-heading font-bold text-tx-primary mb-3 group-hover:text-accent-brand transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-tx-secondary text-base leading-relaxed mb-8 line-clamp-2">
                    {product.oneLiner}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-medium text-tx-primary border-t border-border-subtle pt-4 group-hover:gap-3 transition-all">
                    了解构建细节 <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-32 border border-dashed border-border-subtle rounded-[28px] bg-surface/60">
              <p className="text-tx-tertiary mb-6">没有找到匹配的产品实验项目</p>
              <button 
                onClick={() => { setFilter('全部'); setSearchQuery(''); }}
                className="primary-button h-10 px-6 text-sm"
              >
                清空所有筛选
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
