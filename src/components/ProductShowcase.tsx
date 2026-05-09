import React from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data';
import { DottedCluster, LoopArrow } from './Doodles';

export const ProductShowcase = () => {
  const navigate = useNavigate();
  const featured = PRODUCTS[0];
  const others = PRODUCTS.slice(1, 3);

  return (
    <section className="relative py-24 md:py-30">
      <div className="absolute left-0 top-20 h-44 w-44 rounded-full bg-accent-orange/45 blur-3xl" />
      <div className="absolute right-10 top-10 h-40 w-40 rounded-full bg-accent-brand-soft blur-3xl" />

      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[640px]">
          <span className="section-kicker mb-4">Products In Motion</span>
          <h2 className="text-[36px] leading-[1.1] md:text-[50px] font-semibold">先看已经长出来的，再决定要不要继续深入。</h2>
        </div>
        <p className="max-w-[380px] text-[15px] text-tx-tertiary">
          不同阶段的产品放在一起看，能更快判断它们现在处于可体验、验证中，还是还在摸索。
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => navigate(`/products/${featured.id}`)}
          className="group relative overflow-hidden rounded-[38px] border border-border-default bg-surface/84 p-5 text-left shadow-workshop transition-all hover:-translate-y-1"
        >
          <div className="absolute inset-x-5 top-5 flex items-center justify-between">
            <span className="status-sticker">{featured.status}</span>
            <span className="rounded-full border border-border-subtle bg-paper/90 px-3 py-1 text-[11px] text-tx-tertiary mono-label uppercase">
              #{featured.tags[0]}
            </span>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-[30px] border border-border-subtle bg-[linear-gradient(180deg,rgba(255,253,248,0.2),rgba(23,38,64,0.18))]">
            <img
              src={featured.image}
              alt={featured.name}
              className="aspect-[16/10] w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,247,239,0.00),rgba(23,38,64,0.08))]" />

            <div className="absolute left-5 top-5 rounded-[24px] border border-white/30 bg-surface/92 p-4 shadow-float">
              <p className="text-xs font-semibold text-tx-primary">入口状态</p>
              <div className="mt-3 flex gap-2">
                <span className="rounded-full bg-accent-green px-3 py-1 text-[10px] font-semibold text-accent-green-strong">Ready</span>
                <span className="rounded-full bg-accent-brand-soft px-3 py-1 text-[10px] font-semibold text-accent-brand">Switch</span>
              </div>
            </div>

            <div className="absolute bottom-5 right-5 w-[58%] rounded-[26px] border border-white/30 bg-surface/92 p-4 shadow-float sm:w-[46%]">
              <div className="mb-3 flex items-center justify-between text-xs">
                <span className="font-semibold text-tx-primary">上手进度</span>
                <span className="text-accent-brand">72%</span>
              </div>
              <div className="mb-4 h-2 overflow-hidden rounded-full bg-divider/80">
                <div className="h-full w-[72%] rounded-full bg-accent-brand" />
              </div>
              <div className="space-y-2 text-[11px] text-tx-secondary">
                <div className="flex items-center justify-between"><span>模型入口整理</span><span>done</span></div>
                <div className="flex items-center justify-between"><span>切换反馈</span><span>testing</span></div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-7 flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-[32rem]">
              <h3 className="mb-3 text-[30px] md:text-[38px] leading-[1.14] font-semibold text-tx-primary">
                {featured.name}
              </h3>
              <p className="text-[16px] text-tx-secondary">{featured.oneLiner}</p>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-tx-primary">
              查看项目
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </motion.button>

        <div className="relative flex flex-col gap-5 lg:pt-10">
          <LoopArrow className="absolute -top-8 right-8 hidden text-accent-orange-strong/45 lg:block" />
          {others.map((product, idx) => (
            <motion.button
              type="button"
              key={product.id}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => navigate(`/products/${product.id}`)}
              className={`group rounded-[30px] border p-5 text-left transition-all hover:-translate-y-1 hover:shadow-workshop ${
                idx === 0
                  ? 'border-[rgba(231,154,79,0.24)] bg-accent-orange/52'
                  : 'border-[rgba(91,170,122,0.2)] bg-accent-green/56'
              }`}
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="rounded-full bg-surface/90 px-3 py-1 text-[10px] font-semibold text-tx-primary mono-label uppercase">
                  {product.status}
                </span>
                <span className="text-xs text-tx-quaternary">0{idx + 2}</span>
              </div>
              <h4 className="mb-3 text-[24px] leading-[1.2] font-semibold text-tx-primary">{product.name}</h4>
              <p className="text-sm text-tx-secondary">{product.oneLiner}</p>
            </motion.button>
          ))}

          <div className="rounded-[28px] border border-border-default bg-surface/70 p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="section-kicker !mb-0">Collection</span>
              <DottedCluster className="text-tx-faint" />
            </div>
            <p className="mb-5 text-sm text-tx-tertiary">整站项目集里同时包含稳定入口、验证中原型和被放弃的方向。</p>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-brand">
              查看全站项目集
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
