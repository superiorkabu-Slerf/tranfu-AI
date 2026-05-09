import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { RESOURCES, PRODUCTS, INSIGHTS, EXPERIMENTS } from '../data';
import { 
  ArrowLeft, 
  Target, 
  Users, 
  Layout, 
  PlayCircle, 
  ShieldAlert, 
  ArrowRight,
  ExternalLink,
  Copy,
  ArrowUpRight
} from 'lucide-react';

export const ResourceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const resource = RESOURCES.find(r => r.id === Number(id));

  if (!resource) {
    return (
      <div className="pt-32 text-center bg-paper min-h-screen">
        <p className="text-tx-tertiary mb-6">未找到该资源信息</p>
        <Link to="/resources" className="text-accent-brand font-medium">返回资源列表</Link>
      </div>
    );
  }

  const relatedProduct = PRODUCTS.find(p => p.relatedResources?.includes(resource.id));
  const relatedInsight = INSIGHTS.find(i => i.relatedResources?.includes(resource.id));
  const relatedLab = EXPERIMENTS.find(e => e.relatedResources?.includes(resource.id));

  return (
    <div className="bg-paper min-h-screen">
      {/* Header Section */}
      <section className="pt-24 pb-16 border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <Link to="/resources" className="inline-flex items-center gap-2 text-xs font-medium text-tx-tertiary hover:text-tx-primary transition-colors mb-8 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO RESOURCES
          </Link>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="mono-label text-[11px] px-2 py-0.5 border border-accent-practical/20 text-accent-practical uppercase rounded-radius-badge">
                {resource.category}
              </span>
              <span className="mono-label text-[11px] text-tx-quaternary uppercase tracking-widest">
                {resource.maturity}
              </span>
            </div>
            <h1 className="text-[48px] serif-heading font-bold text-tx-primary mb-8 tracking-tighter leading-tight">
              {resource.name}
            </h1>
            <p className="text-xl text-tx-secondary leading-relaxed serif-heading">
              {resource.oneLiner}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-24">
            {/* Core Value */}
            <div className="p-10 bg-surface border border-border-subtle rounded-radius-card">
              <div className="flex items-center gap-3 mb-6 text-accent-brand">
                <Target size={20} />
                <h3 className="text-sm font-bold uppercase tracking-widest mono-label">解决的核心问题</h3>
              </div>
              <p className="text-lg text-tx-primary font-medium leading-relaxed">
                {resource.description}
              </p>
            </div>

            {/* Suitability */}
            <div className="space-y-8">
              <h3 className="text-[24px] serif-heading font-bold text-tx-primary pb-4 border-b border-border-subtle flex items-center gap-3">
                <Users size={20} className="text-tx-quaternary" /> 适合场景与用户
              </h3>
              <p className="text-tx-secondary leading-relaxed">
                {resource.suitability}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resource.problems.map((p: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 p-5 bg-surface border border-border-subtle rounded-radius-card">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-brand mt-2 flex-shrink-0" />
                    <span className="text-sm text-tx-primary font-medium">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="space-y-8">
              <h3 className="text-[24px] serif-heading font-bold text-tx-primary pb-4 border-b border-border-subtle flex items-center gap-3">
                <Layout size={20} className="text-tx-quaternary" /> 交付内容
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {resource.deliverables.map((d: string, idx: number) => (
                  <div key={idx} className="p-5 bg-paper border border-border-subtle rounded-radius-card flex items-center gap-4 text-sm font-bold text-tx-primary">
                    <div className="w-10 h-10 rounded-lg bg-surface border border-border-subtle text-accent-brand flex items-center justify-center flex-shrink-0">
                      <PlayCircle size={18} />
                    </div>
                    {d}
                  </div>
                ))}
              </div>
            </div>

            {/* Usage */}
            <div className="space-y-8">
              <h3 className="text-[24px] serif-heading font-bold text-tx-primary pb-4 border-b border-border-subtle flex items-center gap-3">
                <PlayCircle size={20} className="text-tx-quaternary" /> 使用建议
              </h3>
              <div className="p-8 bg-surface border border-border-subtle rounded-radius-card text-tx-secondary leading-relaxed">
                {resource.usage}
              </div>
            </div>

            {/* Boundaries */}
            {resource.boundaries && (
              <div className="space-y-8">
                <h3 className="text-[24px] serif-heading font-bold text-tx-primary pb-4 border-b border-border-subtle flex items-center gap-3">
                  <ShieldAlert size={20} className="text-tx-quaternary" /> 局限与注意
                </h3>
                <div className="p-8 bg-accent-alert/5 border border-accent-alert/10 rounded-radius-card">
                  <ul className="space-y-4">
                    {resource.boundaries.map((b: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-accent-alert font-medium leading-relaxed">
                        <ShieldAlert size={16} className="mt-0.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-10">
            <div className="p-10 bg-inverse text-white rounded-radius-card shadow-workshop sticky top-24">
              <h4 className="mono-label text-[10px] text-tx-quaternary uppercase tracking-widest mb-8">Take Action</h4>
              <div className="space-y-4">
                <button className="w-full h-14 bg-white text-black font-bold text-sm rounded-radius-button hover:bg-tx-quaternary transition-all flex items-center justify-center gap-2 group">
                  {resource.action || '立即获取'}
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <button className="w-full h-14 border border-white/20 text-white font-bold text-sm rounded-radius-button hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                  <Copy size={16} />
                  复制公开逻辑
                </button>
              </div>
              <p className="text-[10px] text-center mt-10 text-tx-tertiary leading-relaxed px-4">
                该资源属于 TRANSFU 公开实验的一部分，持续遵循实战派的迭代逻辑。
              </p>
            </div>

            {(relatedProduct || relatedInsight || relatedLab) && (
              <div className="p-8 border border-border-subtle rounded-radius-card bg-surface space-y-10">
                <h4 className="mono-label text-[10px] text-tx-tertiary uppercase tracking-widest">相关来源</h4>
                {relatedProduct && (
                  <div className="group cursor-pointer" onClick={() => navigate(`/products/${relatedProduct.id}`)}>
                    <p className="mono-label text-[9px] text-accent-brand uppercase mb-2">Origin Product</p>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[15px] font-bold text-tx-primary group-hover:text-accent-brand transition-colors leading-tight">{relatedProduct.name}</span>
                      <ExternalLink size={14} className="text-tx-quaternary" />
                    </div>
                  </div>
                )}
                {relatedInsight && (
                  <div className="group cursor-pointer" onClick={() => navigate(`/insights/${relatedInsight.id}`)}>
                    <p className="mono-label text-[9px] text-accent-alert uppercase mb-2">Related Insight</p>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[15px] font-bold text-tx-primary group-hover:text-accent-alert transition-colors leading-tight">{relatedInsight.title}</span>
                      <ExternalLink size={14} className="text-tx-quaternary" />
                    </div>
                  </div>
                )}
                {relatedLab && (
                  <div className="group cursor-pointer" onClick={() => navigate(`/lab/${relatedLab.id}`)}>
                    <p className="mono-label text-[9px] text-accent-practical uppercase mb-2">Lab Record</p>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[15px] font-bold text-tx-primary group-hover:text-accent-practical transition-colors leading-tight">{relatedLab.name}</span>
                      <ExternalLink size={14} className="text-tx-quaternary" />
                    </div>
                  </div>
                )}
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* Footer Nav */}
      <section className="py-24 border-t border-border-subtle bg-surface">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 gap-6">
            <h2 className="text-[32px] serif-heading font-bold text-tx-primary">更多可复用资源</h2>
            <Link to="/resources" className="text-sm font-bold text-tx-tertiary hover:text-tx-primary flex items-center gap-2">
              查看全部 <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {RESOURCES.filter(r => r.id !== Number(id)).slice(0, 4).map(r => (
              <Link key={r.id} to={`/resources/${r.id}`} className="p-6 bg-paper border border-border-subtle rounded-radius-card hover:border-border-strong hover:shadow-workshop transition-all group">
                <span className="mono-label text-[10px] text-tx-tertiary uppercase block mb-3">{r.type}</span>
                <h5 className="font-bold text-tx-primary mb-2 group-hover:text-accent-brand transition-colors leading-tight">{r.name}</h5>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
