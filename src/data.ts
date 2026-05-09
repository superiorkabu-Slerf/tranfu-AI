export const NAVIGATION = [
  { name: '首页', href: '首页' },
  { name: '产品', href: '产品' },
  { name: '资源', href: '资源' },
  { name: '资讯', href: '资讯' },
  { name: '公开实验室', href: '公开实验室' },
  { name: '关于我们', href: '关于我们' },
];

export const ENTRIES = [
  {
    title: '看资讯与判断',
    description: '看我们最近在研究什么、怎么判断、哪些结论已经踩实，哪些还只是阶段性答案。',
    buttonText: '去看资讯',
    path: '/insights',
    theme: 'blue',
  },
  {
    title: '拿走资源',
    description: '把已经验证过的技能、提示词、流程、记录方式和轻量工具直接拿走。',
    buttonText: '去拿资源',
    path: '/resources',
    theme: 'orange',
  },
  {
    title: '直接用产品',
    description: '先看现在已经能用、正在验证、或值得继续关注的项目，再决定要不要深入了解。',
    buttonText: '去看产品',
    path: '/products',
    theme: 'green',
  },
];

export const STAGE_STATS = [
  { label: '项目样本', value: 6, detail: '覆盖构思、验证、进行、上线、暂停和放弃等真实状态。' },
  { label: '方法与资源', value: 7, detail: '已经沉淀出可继续复用的方法记录和结构化资产。' },
  { label: '问题专题', value: 4, detail: '围绕真实高频问题组织，不按抽象知识分类堆内容。' },
  { label: '实验入口', value: 2, detail: '已经有可对外展示的阶段性能力入口。' },
];

export const PRODUCT_STATUSES = ['全部', '可直接体验', '验证中', '进行中', '研究中', '已暂停', '已放弃'] as const;

export const PRODUCTS = [
  {
    id: 1,
    name: 'AI 中转站',
    status: '可直接体验',
    oneLiner: '把常用 AI 能力整理成更容易测试、切换和进入的使用入口。',
    description: '把多个模型能力整理成一个更稳定、更容易接入的使用入口，减少接模型时的试错成本。适合需要快速验证 AI 功能、又不想被模型接入细节拖慢节奏的团队。',
    suitability: '适合已经明确要用 AI 做事，但不想把时间耗在来回找入口、切换工具和重复试错上的用户。',
    problems: [
      '不知道从哪个入口开始',
      '不同能力分散在不同地方，切来切去很乱',
      '想先快速判断一套入口是否顺手，而不是先研究复杂配置'
    ],
    results: '你现在可以先体验一版经过整理的使用入口，看它是否更符合你的使用习惯。',
    link: '#',
    tags: ['稳定', '效率'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    relatedResources: [1, 2, 3], // IDs or names of resources
    relatedInsights: [1, 2],
    relatedLab: [2],
  },
  {
    id: 2,
    name: '生图网站',
    status: '可直接体验',
    oneLiner: '把图像生成这件事做得更直接，让你更快从想法走到第一张能用的图。',
    description: '让不熟悉模型和参数的人，也能更快生成接近需求的图片结果。适合想快速出图、做内容配图、海报草稿或视觉方案的人。',
    suitability: '适合想快速出图、验证视觉方向或做内容试稿的人。',
    problems: [
      '不是每个人都想研究复杂参数',
      '参数配置过于繁琐',
      '出图结果难以预测'
    ],
    results: '当前可作为轻量入口体验，重点验证的是上手效率和出图反馈。',
    link: '#',
    tags: ['创意', '视觉'],
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'AI 社媒工具',
    status: '验证中',
    oneLiner: '把选题、草稿、整理和发布前准备串成一个更顺手的内容工作流。',
    description: '帮助团队更快完成选题整理、内容起草、发布协作和复用，让社媒运营不再全靠手工拼接。适合需要持续做内容、但流程分散、素材容易丢、重复劳动很多的小团队。',
    suitability: '适合需要持续做内容输出、运营账号或需要批量整理表达的人。',
    problems: [
      '选题记录零散',
      '素材重复利用率低',
      '不仅仅是写一句话，而是减少从想法到发布前准备之间反复切换工具的成本'
    ],
    results: '当前仍在验证中，适合关注方向、看进展和提前判断是否值得等。',
    link: '#',
    tags: ['协作', '内容'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    name: '统一接口研究入口',
    status: '研究中',
    oneLiner: '围绕多模型与多入口的接入方式做统一梳理，目标是减少不同能力之间的切换成本。',
    description: '我们正在研究如何建立一套更标准化的模型调用层，让开发者和产品经理在验证想法时无需关心底层的接口琐事。',
    suitability: '开发者与产品团队。',
    problems: ['接口门槛高', '多模型切换复杂', '测试环境不统一'],
    results: '这是一个偏底层的研究项目，目前以文档和方案评审为主。',
    link: '#',
    tags: ['标准化', '接口'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    name: '会议到行动链路整理',
    status: '验证中',
    oneLiner: '从会议纪要到任务跟进的链路整理，重点不是摘要本身，而是如何让决策不丢。',
    description: '重点解决会后执行力缺失的问题。通过结构化的记录和自动化同步，确保每一个决定都有动作承接。',
    suitability: '管理密集的团队。',
    problems: ['会后无动作', '决策过程不可溯', '任务分解耗时'],
    results: '正在部分真实场景中测试闭环效率。',
    link: '#',
    tags: ['执行', '流程'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    name: '泛 AI 资讯聚合站',
    status: '已放弃',
    oneLiner: '我们曾尝试做一个更泛的 AI 资讯聚合入口，但最终放弃了。',
    description: '信息很多，但很难形成真正值得反复回来使用的价值，最终不如把精力放在资源、产品和判断本身。',
    suitability: '寻找通用 AI 资讯的用户。',
    problems: ['内容同质化严重', '用户粘性低', '难以建立竞争壁垒'],
    results: '记录了我们为何停止该方向的判断逻辑。',
    link: '#',
    tags: ['已降级', '已归档'],
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800',
  }
];

export const RESOURCE_CATEGORIES = [
  { name: '全部', desc: '查看所有资源' },
  { name: '技能', desc: '把一件常做的事变得更容易上手' },
  { name: '智能体', desc: '把判断和提问流程结构化' },
  { name: '提示词', desc: '把高频表达固定下来' },
  { name: '任务包', desc: '把一整段执行流程整理好' },
  { name: '方法模板', desc: '把复杂任务拆成能重复使用的结构' },
  { name: '经验文档', desc: '把做过的坑和判断直接讲清楚' },
];

export const PROBLEM_GROUPS = [
  '先判断值不值得做',
  '先把需求讲清楚',
  '先把提示词调稳定',
  '先把会议和决策理顺',
  '先整理成可复用流程',
];

export const RESOURCES = [
  { 
    id: 1,
    name: '项目判断智能体', 
    type: '智能体', 
    action: '立即体验', 
    category: '智能体',
    maturity: '可直接使用',
    problem_group: '先判断值不值得做',
    oneLiner: '在一个方向真正开做之前，帮你先判断它值不值得做、应该先问什么、风险在哪。',
    description: '输入项目想法、目标用户和大致场景后，它会帮你判断这件事值不值得做、最先该验证什么、下一步应该怎么推进。',
    suitability: '适合产品、创始人、运营或任何经常面对“这个想法要不要继续往下推”的人。',
    problems: [
      '不确定一个新方向是否值得投入',
      '在多个方向之间犹豫不决',
      '担心过早投入到错误的题目中'
    ],
    deliverables: [
      '一套判断新项目的提问结构',
      '一版目标与风险梳理框架',
      '适合继续讨论的初步判断底稿'
    ],
    usage: '把你现在想推进的方向丢进去，先回答它给你的问题，再看最终暴露出来的信息缺口和风险点。',
    boundaries: [
      '它帮助你先问对问题，不代表最终结论一定正确',
      '它更适合前期判断，不替代后期执行验证'
    ],
    who: '适合手里有想法，但不想一上来就盲目开发的人。'
  },
  { 
    id: 2,
    name: 'PRD 撰写技能', 
    type: '技能', 
    action: '查看技能', 
    category: '技能',
    maturity: '可直接使用',
    problem_group: '先把需求讲清楚',
    oneLiner: '帮任何人更轻松地写出一版结构完整、问题清楚、方便继续沟通的 PRD 初稿。',
    description: '根据需求描述、会议纪要、草图或已有想法，快速整理出一版结构完整、可继续细化的 PRD 初稿。',
    suitability: '适合产品、运营、创始人，或任何需要先把需求讲清楚的人。',
    problems: [
      '知道方向但很难落实到文档',
      '文档空白期太长，不知道怎么起头',
      '需要快速与研发、设计对齐初版想法'
    ],
    deliverables: [
      '一套写 PRD 的提问结构',
      '一版可直接套用的需求骨架',
      '适合继续补充的字段提示'
    ],
    usage: '先把你当前想解决的问题写出来，再顺着这套技能给出的结构补目标、用户、流程、范围和边界。先把文档写出来，再去做第二轮细化。',
    boundaries: [
      '它适合帮你起草，不负责替你判断需求真假',
      '如果输入信息过少，输出也会偏空',
      '更适合先快速成稿，再结合真实项目继续改'
    ],
    who: '适合产品、运营、创始人或任何需要先把需求讲清楚的人。'
  },
  { 
    id: 3,
    name: '提示词质检看板', 
    type: '方法模板', 
    action: '查看结构', 
    category: '方法模板',
    maturity: '拿去后需自行调整',
    problem_group: '先把提示词调稳定',
    oneLiner: '帮你检查一个提示词到底清不清楚、稳不稳定、能不能交给别人继续用。',
    description: '把提示词的目标、版本、修改原因和结果表现放进同一套记录结构里，方便团队持续优化，而不是反复从头试。',
    suitability: '适合已经在写提示词，但总觉得结果忽好忽坏、难以复用的人。',
    problems: [
      '提示词结果不稳定且难以优化',
      '多版本迭代混乱，不记得为什么改',
      '提示词难以在团队内有效复用'
    ],
    deliverables: [
      '提示词评审核对表',
      '结构化提示词管理模板',
      'QA 记录日志格式'
    ],
    usage: '你可以用它来评审现有提示词，发现信息缺口、表达歧义和不稳定环节。',
    boundaries: [
      '它更适合评审和修正，不是自动替你生成最佳提示词',
      '如果你的目标本身不清楚，再好的评审也只能帮你发现问题',
      '更适合团队协作时统一检查口径'
    ],
    who: '适合经常写提示词、改提示词、协作调提示词的团队或个人。'
  },
  { 
    id: 4,
    name: '会议记忆引擎', 
    type: '任务包', 
    action: '查看进展', 
    category: '任务包',
    maturity: '整理中',
    problem_group: '先把会议和决策理顺',
    oneLiner: '把多轮会议纪要整理成可以追踪的决策脉络，减少“开过会，但没人记得最后怎么定的”这种情况。',
    description: '把一场会议里的结论、待办、风险和后续动作整理成可检索、可继续使用的项目记忆。',
    suitability: '适合需要反复讨论、多人协作、决策容易丢失上下文的团队。',
    problems: [
      '会议结论难以沉淀为动作',
      '多人协作导致信息严重断层',
      '决策背景在时间推移中丢失'
    ],
    deliverables: [
      '会议决策追踪模板',
      '行动项自动化同步流程',
      '结构化项目记忆索引'
    ],
    usage: '你可以把会议内容从单次摘要，升级成可继续追踪的事项、判断和待办线索。',
    boundaries: [
      '它更适合持续协作，不适合只开一次就结束的临时讨论',
      '如果团队没有明确的后续责任人，再好的结构也会断掉',
      '当前更适合用来搭建方法，不是即插即用的完整系统'
    ],
    who: '适合会议很多、信息容易散、会后经常忘记为什么这样决定的团队。'
  },
];

export const INSIGHT_CATEGORIES = [
  { name: '全部', desc: '查看所有判断与记录' },
  { name: '学习记录', desc: '我们在研究 AI 过程中真实记录的笔记' },
  { name: '方法总结', desc: '适合想直接拿判断框架的人' },
  { name: '项目复盘', desc: '适合想看一个方向为什么这样做的人' },
  { name: '技巧经验', desc: '在真实操作中沉淀的小切片' },
  { name: '阶段观察', desc: '对行业或项目的阶段性看法' },
  { name: '养成记切片', desc: '网站与产品的生长记录' },
];

export const INSIGHTS = [
  { 
    id: 1,
    title: '为什么我们把提示词评审从“感觉”改成“看板”', 
    date: '2024.03.15', 
    category: '方法总结',
    oneLiner: '提示词写得不稳，不一定是模型问题，很多时候是输入结构和检查方式的问题。',
    summary: '我们一度认为提示词的好坏全靠模型悟性。后来发现，如果评审流程不透明、版本不追踪，优化就成了盲打。这篇总结了我们建立看板的判断逻辑。',
    relatedResources: [3],
    relatedProducts: [3],
    relatedLab: [2],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 2,
    title: '做会议记忆引擎时，我们先解决的不是摘要，而是决策追踪', 
    date: '2024.03.10', 
    category: '项目复盘',
    oneLiner: '如果会议只生成摘要，信息还是会丢。我们真正想解决的是：这个决定是谁提的、为什么定、后面有没有改。',
    summary: '单次摘要解决不了长期决策链条的断层。我们在复盘中发现，追溯“为什么这么定”比“今天说了啥”对小团队更有价值。',
    relatedResources: [4],
    relatedProducts: [5],
    relatedLab: [2],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 3,
    title: '为什么我们放弃了做泛 AI 资讯聚合站', 
    date: '2024.03.02', 
    category: '阶段观察',
    oneLiner: '信息可以很多，但未必值得留下。放弃这个方向，反而让网站主线更清楚。',
    summary: '我们一度想做一个更泛的 AI 资讯聚合入口，但很快发现：信息变多，并不等于价值变强。对真正要做事的人来说，更重要的是能不能拿走资源、用上产品、看到真实判断。',
    relatedResources: [1, 2],
    relatedProducts: [6],
    relatedLab: [1],
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: '网站结构与内容主线调整观察',
    date: '2024.03.20',
    category: '养成记切片',
    oneLiner: '网站不只是展示，它本身就是一个不断验证“什么内容对用户真正有用”的实验。',
    summary: '从 V1 到 V1.1，我们砍掉了抽象方法论，强化了“带走资源”和“直达产品”。这是我们近一月的调整观察。',
    relatedLab: [1],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  }
];

export const EXPERIMENT_STAGES = ['全部', '进行中', '刚开始', '暂停观察', '已归档'] as const;

export const EXPERIMENTS = [
  {
    id: 1,
    name: '中转站入口整理实验',
    status: '进行中',
    motivation: '我们发现，入口很多不等于更好用。这个实验的目标，是把“能不能顺利开始使用”拆成更容易判断的步骤。',
    phase: '已完成第一轮入口梳理，正在继续验证状态反馈与使用顺序。',
    recentUpdate: '05.08 / 中转站补了一轮入口状态提示，重点观察第一次进入时是否更容易判断下一步。',
    outputs: [
      '一版入口结构整理',
      '相关状态提示规则',
      '一条对应方法记录'
    ],
    process: [
      { title: '入口收拢', desc: '先收入口、看重复和混乱点' },
      { title: '目标重排', desc: '开始把入口按使用目标重排' },
      { title: '状态提示', desc: '补充状态提示，降低第一次判断成本' },
      { title: '顺序测试', desc: '继续测试不同入口顺序对使用意愿的影响' }
    ],
    pitfalls: '一开始我们更关注“入口全不全”，后来发现真正影响使用的是“用户能不能马上判断下一步”。于是重点从堆能力，转成了先整理进入顺序。',
    nextSteps: [
      '继续观察不同入口顺序的使用深度',
      '补全主要入口的快速上手指南',
      '测试一键切换不同模型入口的反馈'
    ],
    relatedResources: [3],
    relatedProducts: [1],
    relatedInsights: [3]
  },
  {
    id: 2,
    name: '会议记忆链路实验',
    status: '进行中',
    motivation: '单次会议摘要很快会失效，我们真正想解决的是决策、判断和后续动作怎么在多轮讨论里不丢。',
    phase: '已跑通基础整理流程，正在补“决策变更”和“后续追踪”的衔接。',
    recentUpdate: '05.07 / 会议记忆链路增加了“决策变化”标注，避免后续只看到结论看不到变化原因。',
    outputs: [
      '一套会议记忆整理结构',
      '一版决策追踪字段',
      '会议记忆引擎初版方法'
    ],
    process: [
      { title: '摘要验证', desc: '先测试单次会议摘要是否够用' },
      { title: '结构拆解', desc: '开始把纪要拆成议题、判断、结论、后续动作' },
      { title: '关联建立', desc: '继续补多轮会议之间的关联关系' }
    ],
    pitfalls: '一开始我们以为“总结得更好”就够了，后来发现真正的问题不是语言组织，而是上下文记忆和后续追踪。',
    nextSteps: [
      '补多轮会议之间的议题关联',
      '补责任人与后续动作的衔接字段',
      '测试这套结构能不能更顺滑地接到任务整理'
    ],
    relatedResources: [4],
    relatedProducts: [5],
    relatedInsights: [2]
  },
  {
    id: 3,
    name: '项目判断结构实验',
    status: '进行中',
    motivation: '很多方向不是做不出来，而是一开始就没判断清楚值不值得做。这个实验想把前期判断拆成更稳定的提问结构。',
    phase: '已形成第一版判断框架，正在补边界情况和反例验证。',
    recentUpdate: '05.06 / 项目判断结构补了两条反例，用来测试在信息不足时是否会给出误导性建议。',
    outputs: [
      '项目判断智能体',
      '相关提问结构',
      '一篇阶段观察记录'
    ],
    process: [
      { title: '框架形成', desc: '已形成第一版判断框架' },
      { title: '边界探索', desc: '正在补边界情况 and 反例验证' }
    ],
    pitfalls: '我们发现过度依赖 AI 的打分会让人忽略核心风险。于是将“结论”弱化，将“暴露信息缺口”作为主要产出。',
    nextSteps: [
      '引入更多真实失败案例进行测试',
      '优化低信息量输入的提示逻辑',
      '输出一份关于前期判断陷阱的复盘'
    ],
    relatedResources: [1],
    relatedProducts: [1, 4],
    relatedInsights: [3]
  }
];

export const LAB_UPDATES = [
  {
    project: '中转站入口整理实验',
    status: '进行中',
    update: '补了一轮入口状态提示，重点观察第一次进入时是否更容易判断下一步。',
    timestamp: '05.08',
    labId: 1
  },
  {
    project: '会议记忆链路实验',
    status: '进行中',
    update: '增加了“决策变化”标注，避免后续只看到结论看不到变化原因。',
    timestamp: '05.07',
    labId: 2
  },
  {
    project: '项目判断结构实验',
    status: '进行中',
    update: '补了两条反例，用来测试在信息不足时是否会给出误导性建议。',
    timestamp: '05.06',
    labId: 3
  },
  {
    project: '公开实验室',
    status: '已上线',
    update: '页面结构初步对齐，开始进入内容细化阶段。',
    timestamp: '05.05',
    labId: null
  }
];

export const FAQS = [
  { question: 'Tranfu 到底是什么？', answer: 'Tranfu 是一支围绕 AI 产品实践运转的团队。我们一边做项目，一边把过程中形成的方法、资源、判断和试错公开出来。' },
  { question: '这里和普通 AI 资讯站有什么不同？', answer: '这里的内容不是为了追热点而组织，而是围绕真实项目推进形成的。重点不是“今天发生了什么”，而是“这件事值不值得做、怎么做、做完沉淀了什么”。' },
  { question: '我不懂 AI，也可以直接用你们的产品吗？', answer: '可以。产品页会尽量少讲术语，多讲它能帮你解决什么问题。如果现在没有现成产品，也可以提交需求进入共建筛选。' },
  { question: '如果没有现成产品，我接下来该怎么办？', answer: '你可以通过需求共建入口描述自己的问题。我们会筛选适合的题目继续沟通，部分题目会进入免费共建或公开实验。' },
  { question: '网站里的内容是不是都来自你们团队自己做的项目？', answer: '第一版是。我们优先公开团队自己做出来、做过、改过、放弃过的内容，而不是靠外部资讯和别人案例把页面填满。' },
];
