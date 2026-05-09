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
    <div className="bg-paper min-h-screen">
      {/* Header Section */}
      <section className="pt-24 pb-16 border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <span className="mono-label text-[12px] text-tx-tertiary uppercase mb-4 block">TRANSFU WORKBENCH / PRODUCTS</span>
          <h1 className="text-[48px] serif-heading font-bold text-tx-primary mb-6 tracking-tighter">
            我们正在真实构建的<br />AI 产品实验室
          </h1>
          <p className="text-lg text-tx-secondary max-w-2xl leading-relaxed">
            这里的每个项目都不是最终的结论，而是持续演进中的过程。我们保留所有的决策记录，包括那些被暂停和放弃的方向。
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[64px] z-30 bg-paper/80 backdrop-blur-md border-b border-border-subtle overflow-x-auto">
        <div className="max-w-[1120px] mx-auto px-6 h-16 flex items-center justify-between gap-8 whitespace-nowrap">
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
          
          <div className="relative flex items-center min-w-[240px]">
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

      {/* Product List */}
      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-6">
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
                <div className="aspect-[16/10] bg-surface rounded-radius-card overflow-hidden border border-border-subtle group-hover:border-border-strong transition-all mb-6">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
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
            <div className="text-center py-32 border border-dashed border-border-subtle rounded-radius-card">
              <p className="text-tx-tertiary mb-6">没有找到匹配的产品实验项目</p>
              <button 
                onClick={() => { setFilter('全部'); setSearchQuery(''); }}
                className="h-10 px-6 bg-inverse text-white text-sm font-medium rounded-radius-button hover:bg-black transition-colors"
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
