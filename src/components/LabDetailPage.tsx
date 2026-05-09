import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { EXPERIMENTS, PRODUCTS, RESOURCES, INSIGHTS } from '../data';
import { 
  ArrowLeft, 
  Activity, 
  Layout, 
  PlayCircle, 
  ShieldAlert, 
  ArrowRight,
  ExternalLink,
  Milestone,
  Lightbulb
} from 'lucide-react';

export const LabDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const experiment = EXPERIMENTS.find(e => e.id === Number(id));

  if (!experiment) {
    return (
      <div className="pt-32 text-center bg-paper min-h-screen">
        <p className="text-tx-tertiary mb-6">未找到该实验信息</p>
        <Link to="/lab" className="text-accent-brand font-medium">返回实验室列表</Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => experiment.relatedProducts?.includes(p.id));
  const relatedResources = RESOURCES.filter(r => experiment.relatedResources?.includes(r.id));
  const relatedInsights = INSIGHTS.filter(i => experiment.relatedInsights?.includes(i.id));

  return (
    <div className="bg-paper min-h-screen">
      {/* Lab Header */}
      <section className="pt-24 pb-16 border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <Link to="/lab" className="inline-flex items-center gap-2 text-xs font-medium text-tx-tertiary hover:text-tx-primary transition-colors mb-8 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO LAB
          </Link>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="mono-label text-[11px] px-2 py-0.5 border border-accent-practical/20 text-accent-practical uppercase rounded-radius-badge">
                实验项目
              </span>
              <span className="mono-label text-[11px] text-tx-quaternary uppercase tracking-widest">
                STAGE: {experiment.status}
              </span>
            </div>
            <h1 className="text-[48px] serif-heading font-bold text-tx-primary mb-8 tracking-tighter leading-tight">
              {experiment.name}
            </h1>
            <div className="p-10 bg-surface border border-border-subtle rounded-radius-card">
              <p className="text-lg text-tx-primary font-medium leading-relaxed italic border-l-4 border-accent-practical pl-6">
                “{experiment.motivation}”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Main Content */}
      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-24">
            {/* Phase */}
            <div className="space-y-6">
              <h3 className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest pb-4 border-b border-border-subtle flex items-center gap-2">
                <Activity size={14} /> Current Phase
              </h3>
              <div className="text-2xl serif-heading font-bold text-tx-primary leading-relaxed">
                {experiment.phase}
              </div>
            </div>

            {/* Process */}
            <div className="space-y-10">
              <h3 className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest pb-4 border-b border-border-subtle flex items-center gap-2">
                <Milestone size={14} /> Path Log
              </h3>
              <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-border-subtle">
                {experiment.process.map((p, idx) => (
                  <div key={idx} className="flex gap-10 relative">
                    <div className="w-[24px] h-[24px] rounded-full bg-paper border border-tx-primary flex items-center justify-center flex-shrink-0 z-10 text-[10px] font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-[18px] font-bold text-tx-primary mb-3 leading-tight">{p.title}</h4>
                      <p className="text-sm text-tx-secondary leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="space-y-8">
              <h3 className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest pb-4 border-b border-border-subtle flex items-center gap-2">
                <Layout size={14} /> Lab Outputs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {experiment.outputs.map((o, idx) => (
                  <div key={idx} className="p-5 bg-surface border border-border-subtle rounded-radius-card flex items-center gap-4 text-sm font-bold text-tx-primary">
                    <PlayCircle size={18} className="text-accent-practical" />
                    {o}
                  </div>
                ))}
              </div>
            </div>

            {/* Pitfalls & Insights */}
            <div className="space-y-8">
              <h3 className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest pb-4 border-b border-border-subtle flex items-center gap-2">
                <ShieldAlert size={14} /> Pitfalls & Adjustments
              </h3>
              <div className="p-8 bg-accent-alert/5 border border-accent-alert/10 rounded-radius-card">
                <p className="text-base text-tx-secondary italic leading-relaxed">
                  "{experiment.pitfalls}"
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="space-y-8">
              <h3 className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest pb-4 border-b border-border-subtle flex items-center gap-2">
                <Lightbulb size={14} /> Next Steps
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experiment.nextSteps.map((s, idx) => (
                  <div key={idx} className="p-5 border border-border-subtle rounded-radius-card flex items-start gap-3">
                    <ArrowRight size={14} className="mt-0.5 text-tx-quaternary" />
                    <span className="text-sm text-tx-secondary font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-10">
            <div className="p-8 border border-border-subtle rounded-radius-card bg-surface sticky top-24">
              <h4 className="mono-label text-[10px] text-tx-tertiary uppercase tracking-widest mb-10">Linked Documents</h4>
              
              <div className="space-y-12">
                {relatedProducts.length > 0 && (
                  <div>
                    <h5 className="mono-label text-[9px] text-tx-quaternary uppercase mb-6 flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent-brand rounded-full" /> Origin Product
                    </h5>
                    <div className="space-y-4">
                      {relatedProducts.map(p => (
                        <Link key={p.id} to={`/products/${p.id}`} className="flex items-center justify-between group">
                          <span className="text-sm font-bold text-tx-primary group-hover:text-accent-brand transition-colors">{p.name}</span>
                          <ExternalLink size={14} className="text-tx-quaternary" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {relatedResources.length > 0 && (
                  <div>
                    <h5 className="mono-label text-[9px] text-tx-quaternary uppercase mb-6 flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent-alert rounded-full" /> Linked Resources
                    </h5>
                    <div className="space-y-4">
                      {relatedResources.map(r => (
                        <Link key={r.id} to={`/resources/${r.id}`} className="flex items-center justify-between group">
                          <span className="text-sm font-bold text-tx-primary group-hover:text-accent-alert transition-colors">{r.name}</span>
                          <ExternalLink size={14} className="text-tx-quaternary" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {relatedInsights.length > 0 && (
                  <div>
                    <h5 className="mono-label text-[9px] text-tx-quaternary uppercase mb-6 flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent-brand rounded-full" /> Related Journal
                    </h5>
                    <div className="space-y-4">
                      {relatedInsights.map(i => (
                        <Link key={i.id} to={`/insights/${i.id}`} className="flex items-center justify-between group">
                          <span className="text-sm font-bold text-tx-primary group-hover:text-accent-brand transition-colors">{i.title}</span>
                          <ExternalLink size={14} className="text-tx-quaternary" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Lab Nav Footer */}
      <section className="py-24 border-t border-border-subtle bg-inverse text-white">
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <h2 className="text-[32px] serif-heading font-bold mb-16">更多实验室公开动态</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {EXPERIMENTS.filter(e => e.id !== Number(id)).slice(0, 3).map(e => (
              <Link key={e.id} to={`/lab/${e.id}`} className="p-8 border border-white/10 rounded-radius-card bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
                <div className="mono-label text-[10px] text-tx-quaternary uppercase mb-4">{e.status}</div>
                <h5 className="text-[18px] font-bold text-white mb-4 group-hover:text-accent-practical transition-colors leading-tight">{e.name}</h5>
                <p className="text-xs text-tx-tertiary line-clamp-2 leading-relaxed">{e.motivation}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
