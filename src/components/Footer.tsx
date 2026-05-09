import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="pb-10 pt-14">
      <div className="section-shell">
        <div className="mb-8 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(23,38,64,0.14),transparent)]" />

        <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[560px]">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-tx-primary text-sm font-bold text-surface">T</div>
              <span className="serif-heading text-[24px] font-bold text-tx-primary">TRANFU</span>
            </div>
            <p className="text-[15px] text-tx-secondary">
              做真实产品，公开真实过程，把有用的判断和结构留给真正准备动手的人。
            </p>
          </div>

          <Link to="/cobuild" className="primary-button self-start">
            发起需求共建
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-sm text-tx-tertiary">
            <Link to="/products" className="hover:text-tx-primary">产品</Link>
            <Link to="/resources" className="hover:text-tx-primary">资源</Link>
            <Link to="/insights" className="hover:text-tx-primary">资讯</Link>
            <Link to="/lab" className="hover:text-tx-primary">公开实验室</Link>
            <Link to="/about" className="hover:text-tx-primary">关于我们</Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.18em] text-tx-quaternary mono-label">
            <span>© 2024 TRANFU WORKBENCH</span>
            <a href="#" className="hover:text-tx-secondary">WeChat</a>
            <a href="#" className="hover:text-tx-secondary">Twitter</a>
            <a href="#" className="hover:text-tx-secondary">Newsletter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
