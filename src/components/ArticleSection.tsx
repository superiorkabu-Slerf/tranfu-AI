import React from 'react';
import { motion } from 'motion/react';
import { INSIGHTS } from '../data';
import { ArrowRight, BookOpen, Quote } from 'lucide-react';

export const ArticleSection = ({ onNavigate, onSelectInsight }: { 
  onNavigate: (page: string) => void,
  onSelectInsight: (id: number) => void
}) => {
  return (
    <section id="insights" className="py-40 bg-bg-main relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <h2 className="text-sm font-bold text-accent-purple-dark uppercase tracking-[0.4em] mb-10 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-accent-purple-dark" />
            Insights / 真实判断
            <span className="w-12 h-px bg-accent-purple-dark" />
          </h2>
          <h3 className="text-5xl md:text-8xl font-serif font-bold text-text-title tracking-tighter leading-[0.95] mb-12">
            不是由于资讯堆砌，<br/>而是由于<span className="text-accent-purple-dark italic">实践</span>深研。
          </h3>
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-medium">
            这些不是泛泛而谈的行业新闻，而是我们在做项目时的真实判断逻辑、经验教训与避坑指南。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {INSIGHTS.slice(0, 4).map((article, idx) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer border-l-4 border-text-title/5 pl-12 py-4 hover:border-brand-blue transition-all"
              onClick={() => onSelectInsight(article.id)}
            >
              <div className="mb-6">
                <span className="text-[11px] font-bold text-brand-blue uppercase tracking-widest">{article.category}</span>
                <span className="mx-3 text-text-title/10">/</span>
                <span className="text-[11px] font-bold text-text-hint uppercase tracking-widest">{article.date}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-text-title group-hover:text-brand-blue transition-colors leading-[1.2] mb-8 tracking-tight">
                {article.title}
              </h3>
              <p className="text-lg text-text-body font-medium leading-relaxed mb-8 line-clamp-3">
                {article.oneLiner || article.summary}
              </p>
              <div className="flex items-center gap-4 text-sm font-bold text-text-title group-hover:gap-6 transition-all">
                Read Entry <ArrowRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 p-16 md:p-24 bg-bg-warm-white rounded-[64px] border border-text-title/5 relative overflow-hidden group">
          <div className="relative z-10 max-w-2xl">
            <Quote size={48} className="text-accent-purple-dark/20 mb-8" />
            <h4 className="text-3xl md:text-4xl font-serif font-bold text-text-title mb-8 leading-tight tracking-tight">
              “不求每个结论都对，但求每个判断都有据可循。这是我们公开过程的核心价值。”
            </h4>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => onNavigate('资讯')}
                className="h-16 px-10 rounded-full bg-text-title text-white font-bold text-sm hover:bg-brand-blue transition-all"
              >
                查看全部深度专题
              </button>
              <button 
                onClick={() => onNavigate('需求共建')}
                className="text-sm font-bold text-text-title hover:text-brand-blue transition-colors flex items-center gap-2 group/btn"
              >
                提供你的问题场景
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-full bg-accent-purple/10 translate-x-32 skew-x-12 group-hover:translate-x-12 transition-transform duration-1000" />
        </div>
      </div>
    </section>
  );
};
