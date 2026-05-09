import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border-subtle bg-paper">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-inverse text-white flex items-center justify-center font-bold text-[10px] rounded-sm">T</div>
            <span className="text-sm font-bold serif-heading text-tx-primary tracking-tighter">TRANFU</span>
          </Link>
          <div className="hidden md:flex items-center gap-4 border-l border-border-subtle pl-6">
            <Link to="/products" className="text-[12px] mono-label text-tx-tertiary hover:text-tx-primary transition-colors">产品 Product</Link>
            <Link to="/resources" className="text-[12px] mono-label text-tx-tertiary hover:text-tx-primary transition-colors">资源 Resource</Link>
            <Link to="/lab" className="text-[12px] mono-label text-tx-tertiary hover:text-tx-primary transition-colors">实验室 Lab</Link>
          </div>
        </div>

        <div className="flex items-center gap-6 text-[11px] mono-label text-tx-quaternary uppercase tracking-widest">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span>© 2024 TRANFU WORKBENCH</span>
            <span className="hidden md:inline-block opacity-30">|</span>
            <span className="text-[10px] tracking-normal">浙ICP备2024090101号-1</span>
          </div>
          <div className="flex items-center gap-4 hidden lg:flex border-l border-border-subtle pl-4 ml-4">
            <a href="#" className="hover:text-tx-secondary transition-colors">微信</a>
            <a href="#" className="hover:text-tx-secondary transition-colors">Github</a>
            <a href="#" className="hover:text-tx-secondary transition-colors">X</a>
            <a href="#" className="hover:text-tx-secondary transition-colors">小红书</a>
          </div>
          <Link to="/about" className="hover:text-tx-secondary transition-colors underline-offset-4 underline decoration-transparent hover:decoration-tx-quaternary">关于我们 About</Link>
        </div>
      </div>
    </footer>
  );
};
