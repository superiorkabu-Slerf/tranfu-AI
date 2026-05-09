import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpenText, CirclePlay, Github, MessageCircleMore, MessagesSquare, PenSquare, Radio, Sparkles } from 'lucide-react';
import { STAGE_STATS } from '../data';

const SOCIAL_CHANNELS = [
  {
    name: '小红书',
    handle: '@Tranfu',
    href: '#',
    desc: '更新更轻、更适合快速看完的实践切片。',
    icon: Sparkles,
    tone: 'bg-accent-orange/60 border-[rgba(231,154,79,0.18)]',
  },
  {
    name: '抖音',
    handle: '@Tranfu',
    href: '#',
    desc: '看我们把复杂问题压成更短的视频表达。',
    icon: CirclePlay,
    tone: 'bg-accent-purple/52 border-[rgba(123,104,217,0.18)]',
  },
  {
    name: 'bilibili',
    handle: '@Tranfu',
    href: '#',
    desc: '更完整的产品过程、方法拆解和公开记录。',
    icon: Radio,
    tone: 'bg-accent-brand-soft/78 border-accent-brand-border',
  },
  {
    name: '知乎',
    handle: '@Tranfu',
    href: '#',
    desc: '偏判断、复盘和思考链条的长文本输出。',
    icon: BookOpenText,
    tone: 'bg-accent-green/60 border-[rgba(91,170,122,0.18)]',
  },
  {
    name: 'X',
    handle: '@Tranfu',
    href: '#',
    desc: '面向更开放语境的实时表达与阶段观察。',
    icon: PenSquare,
    tone: 'bg-surface/92 border-border-default',
  },
  {
    name: 'GitHub',
    handle: 'github.com/tranfu',
    href: '#',
    desc: '看代码、结构、实验记录和公开项目沉淀。',
    icon: Github,
    tone: 'bg-surface/92 border-border-default',
  },
  {
    name: '私域微信群',
    handle: '需求共建群',
    href: '#',
    desc: '更近距离地交流场景、问题和下一步共建机会。',
    icon: MessagesSquare,
    tone: 'bg-accent-yellow/88 border-[rgba(23,38,64,0.08)]',
  },
];

export const AboutPage = () => {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="section-shell">
          <div className="page-hero-card p-6 md:p-8">
          <span className="section-kicker mb-5">TRANSFU WORKBENCH / ABOUT US</span>
          <h1 className="page-hero-title mb-6">
            如果你想了解 Tranfu 是什么、<br />
            为什么公开，以及我们在练什么。
          </h1>
          <p className="page-hero-copy max-w-2xl">
            我们不仅仅是在做 AI 产品，更是在探索一套“不仅能把事做完，还能让过程变得可沉淀、可复用、可公开”的工作方式。
          </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="section-shell grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] serif-heading font-bold text-tx-primary mb-6">实践而非口号</h2>
            <div className="space-y-6 text-tx-secondary leading-relaxed">
              <p>
                Tranfu（望船夫）是一个致力于 AI 产品深度实践的工作坊。我们不仅关注最终的产品交付，更关注在构建过程中形成的思维模型、Prompt 技能和工程闭环。
              </p>
              <p>
                在这个网站上，你看到的不只是漂亮的 Demo，还有真实的决策记录。我们会公开那些甚至还没有结果的尝试，因为产品构建的真实感恰恰隐藏在这些“断片”的过程里。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] serif-heading font-bold text-tx-primary mb-6">Build in Public 的中国叙事</h2>
            <div className="space-y-6 text-tx-secondary leading-relaxed">
              <p>
                我们相信，“准备好了再展示”会过滤掉 90% 有价值的信息。真正的共鸣和信任，来自于对他人在处理复杂问题、面对不确定性、甚至在遭遇失败时的真实观察。
              </p>
              <p>
                这套公开构建的策略被我们称为“养成记”。它让一支团队的成长轨迹，变成用户可以追踪的项目叙事，并最终沉淀为可被他人直接带走的工程资源。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-24">
        <div className="section-shell">
          <div className="soft-panel p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-[32px] serif-heading font-bold text-tx-primary mb-6">我们现在的坐标</h2>
              <p className="text-lg text-tx-secondary leading-relaxed mb-8">
                现在的 Tranfu 仍然处在能力建设阶段。我们正在用 Agent 和 Skill 重构产品开发流，但这仍是一个寻找平衡点的旅程。
              </p>
              <div className="p-6 border border-tx-primary/10 rounded-[26px] bg-paper italic text-tx-tertiary">
                “我们不追求完美的开始，我们只追求真实的演进。”
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {STAGE_STATS.map((stat) => (
                <div key={stat.label} className="p-6 bg-paper border border-border-subtle rounded-[24px]">
                  <div className="text-[32px] font-mono font-bold text-tx-primary mb-1">{stat.value}</div>
                  <div className="mono-label text-[11px] text-accent-brand uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[620px]">
              <span className="section-kicker mb-4">Social & Community</span>
              <h2 className="text-[34px] leading-[1.1] md:text-[46px] font-semibold text-tx-primary">如果你想继续跟着我们看，就在这些地方找到我们。</h2>
            </div>
            <p className="max-w-[360px] text-[15px] text-tx-tertiary">
              有的平台适合看短更新，有的平台适合看长复盘，也有适合更近距离交流的私域入口。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SOCIAL_CHANNELS.map((channel, index) => {
              const Icon = channel.icon;

              return (
                <motion.a
                  key={channel.name}
                  href={channel.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`group rounded-[28px] border p-5 transition-all hover:-translate-y-1 hover:shadow-workshop ${channel.tone}`}
                >
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-surface/86 text-tx-primary">
                      <Icon size={20} />
                    </div>
                    <span className="mono-label text-[10px] uppercase text-tx-quaternary">{channel.handle}</span>
                  </div>

                  <h3 className="mb-2 text-[24px] leading-[1.2] font-semibold text-tx-primary">{channel.name}</h3>
                  <p className="mb-5 text-sm text-tx-secondary">{channel.desc}</p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-tx-primary">
                    前往查看
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.a>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#" className="primary-button h-[46px] px-8 text-sm">
              加入私域微信群
            </a>
            <a href="#" className="secondary-button h-[46px] px-8 text-sm">
              查看 GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
