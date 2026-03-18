// ─── HEXAVERSE STUDIO — TypeScript Interfaces ────────────────────────────────

export interface Founder {
  name: string;
  role: string;
  bio: string[];
  principles: string[];
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  skills: FounderSkill[];
}

export interface FounderSkill {
  name: string;
  level: number; // 0–100
  label: 'Expert' | 'Advanced' | 'Proficient';
}

export interface Service {
  id: string;
  number: string;
  category: string;
  icon: string; // lucide icon name
  title: string;
  description: string;
  tags: string[];
}

export interface Project {
  id: string;
  category: 'web' | 'mobile' | 'api';
  categoryLabel: string;
  name: string;
  description: string;
  emoji: string;
  stack: string[];
  url?: string;
}

export interface Pillar {
  icon: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  responseTime: string;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

export const founderData: Founder = {
  name: 'Reza Maulana',
  role: 'Founder & Chief Architect',
  bio: [
    'Reza Maulana is the founder and chief architect of HEXAVERSE STUDIO. With over five years building production systems across fintech, SaaS, and enterprise platforms, his work is defined by an obsession with structural integrity and long-term code health.',
    'He approaches every project as an architect first: designing the system\'s bones before a single line of implementation is written. His philosophy is simple — code should be readable by humans, modular by design, and performant by default.',
    'Reza specializes in backend system architecture on Laravel and Node.js, frontend engineering with React and Next.js, and cross-platform mobile development.',
  ],
  principles: [
    'Write code as if the next developer is a senior who hates magic — make it explicit.',
    'Performance is architecture. A slow system is a broken system by design.',
    'Modularity is not a luxury. It is the only path to sustainable software.',
    'Every abstraction must earn its place. Complexity without purpose is debt.',
  ],
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
  },
  skills: [
    { name: 'Software Architecture', level: 95, label: 'Expert' },
    { name: 'Laravel / PHP',         level: 92, label: 'Expert' },
    { name: 'Node.js / TypeScript',  level: 88, label: 'Advanced' },
    { name: 'React / Next.js',       level: 90, label: 'Expert' },
    { name: 'React Native / Flutter',level: 82, label: 'Advanced' },
    { name: 'System Design / DDD',   level: 94, label: 'Expert' },
  ],
};

export const servicesData: Service[] = [
  {
    id: 'architecture',
    number: '01',
    category: 'ARCHITECTURE',
    icon: 'Layers',
    title: 'Software Architecture',
    description: 'Domain-driven design, hexagonal architecture, and event-driven systems built for longevity. We design systems that grow without rot.',
    tags: ['DDD', 'Clean Arch', 'CQRS', 'Event-Driven', 'Microservices'],
  },
  {
    id: 'web',
    number: '02',
    category: 'WEB',
    icon: 'Layout',
    title: 'Web Development',
    description: 'Full-stack web platforms with Laravel and Node.js backends, React/Next.js frontends, and API architectures that scale to millions of requests.',
    tags: ['Laravel', 'Node.js', 'Next.js', 'REST', 'GraphQL'],
  },
  {
    id: 'mobile',
    number: '03',
    category: 'MOBILE',
    icon: 'Smartphone',
    title: 'Mobile Applications',
    description: 'Cross-platform mobile applications with React Native and Flutter — native performance, shared codebase, seamless UX on iOS and Android.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
  },
  {
    id: 'backend',
    number: '04',
    category: 'BACKEND',
    icon: 'Database',
    title: 'API & Backend Systems',
    description: 'High-throughput API design, database optimization, caching layers, and message queue systems that handle production load gracefully.',
    tags: ['REST API', 'PostgreSQL', 'Redis', 'RabbitMQ'],
  },
  {
    id: 'devops',
    number: '05',
    category: 'DEVOPS',
    icon: 'Radio',
    title: 'DevOps & Infrastructure',
    description: 'CI/CD pipelines, containerized deployments, cloud infrastructure on AWS/GCP, and monitoring setups that give you full operational visibility.',
    tags: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
  },
  {
    id: 'audit',
    number: '06',
    category: 'AUDIT',
    icon: 'CheckSquare',
    title: 'Code & Architecture Audit',
    description: 'Deep structural review of existing codebases — identifying architectural debt, performance bottlenecks, and security vulnerabilities.',
    tags: ['Code Review', 'Perf Audit', 'Security'],
  },
];

export const projectsData: Project[] = [
  {
    id: 'nexapay',
    category: 'web',
    categoryLabel: 'Web · Fintech',
    name: 'NexaPay — Digital Banking Platform',
    description: 'Multi-tenant banking dashboard with real-time transaction processing, role-based access control, and regulatory compliance module.',
    emoji: '🏦',
    stack: ['Laravel', 'Next.js', 'PostgreSQL'],
  },
  {
    id: 'kiramat',
    category: 'mobile',
    categoryLabel: 'Mobile · E-Commerce',
    name: 'Kiramat — UMKM Marketplace App',
    description: 'Cross-platform mobile marketplace for Indonesian SMEs. Features offline mode, OTP auth, and integrated payment gateway.',
    emoji: '🛒',
    stack: ['React Native', 'Node.js', 'Redis'],
  },
  {
    id: 'fluxcore',
    category: 'api',
    categoryLabel: 'API · Infrastructure',
    name: 'FluxCore — High-Throughput API Gateway',
    description: 'API gateway handling 2M+ daily requests with rate limiting, JWT auth, request routing, and analytics pipeline.',
    emoji: '⚡',
    stack: ['Node.js', 'Redis', 'Kafka'],
  },
  {
    id: 'opsmatrix',
    category: 'web',
    categoryLabel: 'Web · SaaS',
    name: 'OpsMatrix — Enterprise Analytics SaaS',
    description: 'Multi-tenant SaaS analytics platform with real-time data visualization, custom report builder, and webhook integrations.',
    emoji: '📊',
    stack: ['Next.js', 'Laravel', 'TimescaleDB'],
  },
  {
    id: 'meditrack',
    category: 'mobile',
    categoryLabel: 'Mobile · Health-Tech',
    name: 'MediTrack — Patient Management App',
    description: 'Healthcare app for clinic management — patient records, appointment scheduling, and encrypted health data storage.',
    emoji: '🏥',
    stack: ['Flutter', 'Laravel', 'MySQL'],
  },
  {
    id: 'authnest',
    category: 'api',
    categoryLabel: 'API · Security',
    name: 'AuthNest — SSO & Identity Service',
    description: 'Single sign-on identity provider with OAuth2, PKCE flow, multi-factor authentication, and enterprise LDAP integration.',
    emoji: '🔐',
    stack: ['Node.js', 'OAuth2', 'PostgreSQL'],
  },
];

export const pillarsData: Pillar[] = [
  {
    icon: 'Zap',
    title: 'High-Performance First',
    description: 'Sub-second load times, efficient queries, and runtime optimization are not features — they are prerequisites.',
  },
  {
    icon: 'Layers',
    title: 'Modular Architecture',
    description: 'Clean separations, reusable modules, and domain-driven design that grows with your product — never against it.',
  },
  {
    icon: 'Box',
    title: 'Resource Efficiency',
    description: 'We engineer lean systems — minimal resource footprint, maximum throughput, zero technical debt accumulation.',
  },
];

export const contactInfo: ContactInfo = {
  email: 'hello@hexaverse.studio',
  location: 'Banyuwangi, East Java, Indonesia',
  responseTime: 'Within 24 hours',
};
