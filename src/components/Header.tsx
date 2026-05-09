import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: '首页', path: '/' },
    { name: '产品', path: '/products' },
    { name: '资源', path: '/resources' },
    { name: '资讯', path: '/insights' },
    { name: '公开实验室', path: '/lab' },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={`section-shell transition-all duration-300 ${
          isScrolled ? 'translate-y-0' : ''
        }`}
      >
        <div className="mx-auto flex h-16 items-center justify-between rounded-full border border-border-subtle bg-surface/74 px-3 sm:px-4 shadow-[0_10px_30px_rgba(61,50,36,0.05)] backdrop-blur-xl">
          <Link to="/" className="flex items-center gap-3 rounded-full px-2 py-1">
            <div className="logo-block flex h-10 w-10 items-center justify-center rounded-2xl bg-tx-primary text-sm font-bold text-surface">
              T
            </div>
            <div className="leading-none">
              <div className="serif-heading text-[22px] font-bold text-tx-primary">TRANFU</div>
              <div className="mono-label hidden text-[10px] uppercase text-tx-quaternary sm:block">
                AI Product Practice
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-accent-brand-soft text-accent-brand'
                      : 'text-tx-tertiary hover:bg-surface hover:text-tx-primary'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/cobuild" className="primary-button hidden h-11 px-5 text-sm sm:inline-flex">
              提交需求
            </Link>
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-default bg-paper/70 text-tx-primary md:hidden"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label="切换导航"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-3 rounded-[28px] border border-border-default bg-surface/92 p-4 shadow-workshop backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `rounded-2xl px-4 py-3 text-base font-semibold transition-all ${
                        isActive
                          ? 'bg-accent-brand-soft text-accent-brand'
                          : 'text-tx-primary hover:bg-paper'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <Link to="/cobuild" className="primary-button mt-2 w-full">
                  提交需求
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
