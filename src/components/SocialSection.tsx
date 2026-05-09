import React from 'react';
import { MessageSquare, Twitter, Mail } from 'lucide-react';

export const SocialSection = () => {
  return (
    <section className="py-24 bg-bg-warm-white border-y border-text-title/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-text-title mb-4">加入我们的连接。</h2>
          <p className="text-text-muted">想实时看到进展或跟我们聊聊？欢迎在以下渠道找到我们。</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="flex items-center gap-3 px-8 py-4 bg-bg-main rounded-2xl border border-text-title/5 hover:border-brand-blue/30 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-accent-green/20 text-accent-green-dark flex items-center justify-center">
              <MessageSquare size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-text-title">微信群</p>
              <p className="text-[10px] text-text-hint">加入私域连接</p>
            </div>
          </a>
          
          <a href="#" className="flex items-center gap-3 px-8 py-4 bg-bg-main rounded-2xl border border-text-title/5 hover:border-brand-blue/30 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-brand-blue-bg text-brand-blue flex items-center justify-center">
              <Twitter size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-text-title">X 平台</p>
              <p className="text-[10px] text-text-hint">日常随想与进展</p>
            </div>
          </a>

          <a href="#" className="flex items-center gap-3 px-8 py-4 bg-bg-main rounded-2xl border border-text-title/5 hover:border-brand-blue/30 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-accent-orange/20 text-accent-orange-dark flex items-center justify-center">
              <Mail size={20} />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-text-title">周报订阅</p>
              <p className="text-[10px] text-text-hint">每周深度复盘</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
