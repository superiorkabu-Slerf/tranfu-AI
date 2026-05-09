import React from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data';

export const ProductShowcase = () => {
  const navigate = useNavigate();
  const featured = PRODUCTS[0];
  const others = PRODUCTS.slice(1, 3);

  return (
    <section className="pt-32 pb-24">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-[32px] serif-heading font-bold text-tx-primary">在做的东西</h2>
          <span className="mono-label text-[11px] text-tx-quaternary pt-2">/ INTERNAL BUILD</span>
        </div>
        <p className="text-tx-tertiary text-base">有的能用了，有的还在修，有的可能明天就砍掉。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Primary Product (2/3 width) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-8 group cursor-pointer"
          onClick={() => navigate(`/products/${featured.id}`)}
        >
          <div className="relative aspect-[16/10] bg-surface rounded-radius-card overflow-hidden border border-border-subtle group-hover:border-border-strong transition-all mb-8 shadow-sm">
            <img 
              src={featured.image} 
              alt={featured.name} 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
            />
            {/* Status Sticker */}
            <div className="status-sticker">
              {featured.status === '进行中' ? 'LIVE TESTING' : featured.status.toUpperCase()}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="mono-label text-[11px] px-2 py-0.5 border border-tx-tertiary/20 text-tx-tertiary uppercase rounded-radius-badge">
                  {featured.status}
                </span>
                <span className="mono-label text-[11px] text-tx-quaternary uppercase">
                  #{featured.tags[0]}
                </span>
              </div>
              <h3 className="text-[32px] serif-heading font-bold text-tx-primary mb-4 group-hover:text-accent-brand transition-colors">
                {featured.name}
              </h3>
              <p className="text-tx-secondary text-lg max-w-xl">
                {featured.oneLiner}
              </p>
            </div>
            <div className="text-tx-tertiary group-hover:text-tx-primary transition-colors flex items-center gap-2 font-medium">
              See Project <ArrowRight size={18} />
            </div>
          </div>
        </motion.div>

        {/* Secondary Products (1/3 width vertical) */}
        <div className="md:col-span-4 flex flex-col gap-12 pt-0 md:pt-4">
          {others.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer border-b border-border-subtle pb-8 last:border-0"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="mono-label text-[11px] text-accent-practical uppercase">{product.status}</span>
              </div>
              <h4 className="text-[24px] serif-heading font-bold text-tx-primary mb-3 group-hover:text-accent-brand transition-colors">
                {product.name}
              </h4>
              <p className="text-sm text-tx-tertiary line-clamp-2 leading-relaxed mb-4">
                {product.oneLiner}
              </p>
            </motion.div>
          ))}
          
          <Link 
            to="/products"
            className="flex items-center justify-center h-[44px] border border-border-default rounded-radius-button text-sm font-medium hover:bg-surface transition-all"
          >
            查看全站项目集 →
          </Link>
        </div>
      </div>
    </section>
  );
};
