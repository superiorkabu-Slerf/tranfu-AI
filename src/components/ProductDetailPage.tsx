import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS, RESOURCES, INSIGHTS, EXPERIMENTS } from '../data';
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertCircle, PlayCircle, ExternalLink, ArrowRight } from 'lucide-react';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="pt-32 text-center bg-paper min-h-screen">
        <p className="text-tx-tertiary mb-6">未找到该项目信息</p>
        <Link to="/products" className="text-accent-brand font-medium">返回项目列表</Link>
      </div>
    );
  }

  const relatedResources = RESOURCES.filter(r => product.relatedResources?.includes(r.id));
  const relatedInsights = INSIGHTS.filter(i => product.relatedInsights?.includes(i.id));
  const relatedLab = EXPERIMENTS.filter(e => product.relatedLab?.includes(e.id));

  return (
    <div className="bg-paper min-h-screen">
      {/* Header Section */}
      <section className="pt-24 pb-16 border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <Link to="/products" className="inline-flex items-center gap-2 text-xs font-medium text-tx-tertiary hover:text-tx-primary transition-colors mb-8 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            返回项目列表
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="mono-label text-[11px] px-2 py-0.5 border border-accent-brand/20 text-accent-brand uppercase rounded-radius-badge">
                  {product.status}
                </span>
                <span className="mono-label text-[11px] text-tx-quaternary uppercase tracking-widest">
                  版本 2.0.4
                </span>
              </div>
              <h1 className="text-[48px] serif-heading font-bold text-tx-primary mb-6 tracking-tighter leading-tight">
                {product.name}
              </h1>
              <p className="text-xl text-tx-secondary leading-relaxed mb-10">
                {product.oneLiner}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="h-[48px] px-8 bg-inverse text-white text-sm font-bold rounded-radius-button hover:bg-black transition-all flex items-center gap-2 group">
                  立即体验 <ExternalLink size={16} />
                </button>
                <Link to="/cobuild" className="h-[48px] px-8 border border-border-default text-tx-primary text-sm font-bold rounded-radius-button hover:bg-surface transition-all flex items-center gap-2">
                  关于共建 <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
            <div className="aspect-[16/10] bg-surface rounded-radius-card overflow-hidden border border-border-subtle">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Info */}
      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-surface rounded-radius-card border border-border-subtle hover:border-border-strong transition-colors">
              <div className="w-10 h-10 rounded-lg bg-paper border border-border-subtle flex items-center justify-center text-accent-brand mb-6">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-tx-primary mb-4">适用群体</h3>
              <p className="text-sm text-tx-secondary leading-relaxed">{product.suitability}</p>
            </div>

            <div className="p-8 bg-surface rounded-radius-card border border-border-subtle hover:border-border-strong transition-colors">
              <div className="w-10 h-10 rounded-lg bg-paper border border-border-subtle flex items-center justify-center text-accent-alert mb-6">
                <AlertCircle size={20} />
              </div>
              <h3 className="text-lg font-bold text-tx-primary mb-4">解决的核心问题</h3>
              <ul className="space-y-2">
                {product.problems.map((p, i) => (
                  <li key={i} className="text-sm text-tx-secondary flex gap-2">
                    <span className="text-tx-quaternary">•</span> {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-surface rounded-radius-card border border-border-subtle hover:border-border-strong transition-colors">
              <div className="w-10 h-10 rounded-lg bg-paper border border-border-subtle flex items-center justify-center text-accent-practical mb-6">
                <PlayCircle size={20} />
              </div>
              <h3 className="text-lg font-bold text-tx-primary mb-4">当下的交付结果</h3>
              <p className="text-sm text-tx-secondary leading-relaxed">{product.results}</p>
            </div>
          </div>

          <div className="mt-20 p-12 bg-elevated border border-border-subtle rounded-radius-card">
            <h3 className="text-[24px] serif-heading font-bold text-tx-primary mb-6">构建笔记与边界说明</h3>
            <div className="prose prose-sm max-w-none text-tx-secondary leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-12">
              <p>{product.description}</p>
              <div className="p-6 bg-paper border border-border-subtle rounded-radius-card italic text-xs text-tx-tertiary">
                我们正在实验室中推进该项目的 REV: 2.1.0 版本。如果你有更具体的工业场景或定制化需求，建议查看相关的资源或实验日志。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linked Assets */}
      <section className="py-24 bg-surface border-t border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Resources */}
            <div>
              <div className="flex items-center justify-between mb-8 group cursor-pointer" onClick={() => navigate('/resources')}>
                <h4 className="mono-label text-xs text-tx-tertiary uppercase tracking-widest border-b border-tx-quaternary pb-1">相关资源</h4>
                <ArrowRight size={14} className="text-tx-quaternary group-hover:text-tx-primary transition-all" />
              </div>
              <div className="space-y-4">
                {relatedResources.map(res => (
                  <Link key={res.id} to={`/resources/${res.id}`} className="block p-5 bg-paper border border-border-subtle rounded-radius-card hover:border-accent-brand transition-colors group">
                    <span className="mono-label text-[10px] text-accent-brand uppercase block mb-2">{res.type}</span>
                    <h5 className="text-[15px] font-bold text-tx-primary mb-1 group-hover:text-accent-brand transition-colors">{res.name}</h5>
                    <p className="text-xs text-tx-tertiary line-clamp-1">{res.oneLiner}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Insights */}
            <div>
              <div className="flex items-center justify-between mb-8 group cursor-pointer" onClick={() => navigate('/insights')}>
                <h4 className="mono-label text-xs text-tx-tertiary uppercase tracking-widest border-b border-tx-quaternary pb-1">相关判断</h4>
                <ArrowRight size={14} className="text-tx-quaternary group-hover:text-tx-primary transition-all" />
              </div>
              <div className="space-y-4">
                {relatedInsights.map(insight => (
                  <Link key={insight.id} to={`/insights/${insight.id}`} className="flex items-center gap-4 p-4 bg-paper border border-border-subtle rounded-radius-card hover:border-accent-brand transition-colors group">
                    <img src={insight.image} alt="" className="w-12 h-12 rounded bg-surface object-cover transition-transform group-hover:scale-105" />
                    <div>
                      <h5 className="text-sm font-bold text-tx-primary leading-tight mb-1 group-hover:text-accent-brand transition-colors">{insight.title}</h5>
                      <span className="mono-label text-[9px] text-tx-tertiary uppercase tracking-widest">{insight.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Labs */}
            <div>
              <div className="flex items-center justify-between mb-8 group cursor-pointer" onClick={() => navigate('/lab')}>
                <h4 className="mono-label text-xs text-tx-tertiary uppercase tracking-widest border-b border-tx-quaternary pb-1">实验进展</h4>
                <ArrowRight size={14} className="text-tx-quaternary group-hover:text-tx-primary transition-all" />
              </div>
              <div className="space-y-4">
                {relatedLab.map(lab => (
                  <Link key={lab.id} to={`/lab/${lab.id}`} className="block p-5 bg-paper border border-border-subtle rounded-radius-card hover:border-accent-brand transition-colors group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="mono-label text-[10px] text-accent-practical uppercase">{lab.status}</span>
                      <span className="mono-label text-[10px] text-tx-quaternary uppercase">{lab.recentUpdate.split(' / ')[0]}</span>
                    </div>
                    <h5 className="text-[15px] font-bold text-tx-primary mb-2 group-hover:text-accent-brand transition-colors">{lab.name}</h5>
                    <p className="text-xs text-tx-tertiary line-clamp-2 leading-relaxed">{lab.motivation}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
