export const profile = {
  name: 'Erkinov Jasur',
  initials: 'EJ',
  role: 'Junior Frontend Developer',
  email: 'erkinovjasur80@gmail.com',
  phone: '+998 91-776-26-92',
  phoneHref: 'tel:+998917762692',
  telegram: '@timurovccc',
  telegramUrl: 'https://t.me/timurovccc',
  github: 'github.com/erkinovjasur',
  githubUrl: 'https://github.com/erkinovjasur',
  linkedin: 'linkedin.com/in/erkinov-jasur',
  linkedinUrl: 'https://www.linkedin.com/in/jasur-erkinov-11bb4b3a4/',
  location: 'Tashkent, Uzbekistan',
};

export const socials = [
  { id: 'github', name: 'GitHub', href: profile.githubUrl, icon: 'github' },
  { id: 'linkedin', name: 'LinkedIn', href: profile.linkedinUrl, icon: 'linkedin' },
  { id: 'telegram', name: 'Telegram', href: profile.telegramUrl, icon: 'telegram' },
];

export const stats = [
  { id: 'projects', value: 3, suffix: '+' },
  { id: 'technologies', value: 8, suffix: '+' },
  { id: 'languages', value: 3, suffix: '' },
  { id: 'responsive', value: 100, suffix: '%' },
];

export const coreSkills = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 90 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'React', level: 85 },
  { name: 'JavaScript', level: 82 },
  { name: 'Git & GitHub', level: 80 },
  { name: 'Supabase', level: 72 },
  { name: 'AI Agents', level: 75 },
];

export const skillGroups = [
  { id: 'frontend', icon: 'code', items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'] },
  { id: 'data', icon: 'database', items: ['Supabase', 'REST API', 'JSON', 'LocalStorage'] },
  { id: 'tools', icon: 'tools', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel', 'Netlify'] },
  { id: 'ai', icon: 'bot', items: ['AI Agents', 'ChatGPT', 'Claude', 'GitHub Copilot'] },
];

export const projects = [
  {
    id: 'dachahub',
    category: 'web',
    image: '/projects/dachahub.svg',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://dachahub.vercel.app/',
    githubUrl: profile.githubUrl,
    featured: true,
  },
  {
    id: 'turarzone',
    category: 'web',
    image: '/projects/turarzone.svg',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://turarzone.vercel.app/',
    githubUrl: profile.githubUrl,
    featured: true,
  },
  {
    id: 'supabase',
    category: 'stack',
    image: '/projects/supabase.svg',
    tags: ['React', 'Tailwind CSS', 'Supabase'],
    liveUrl: '',
    githubUrl: profile.githubUrl,
    featured: false,
  },
];

export const projectFilters = [
  { id: 'all' },
  { id: 'web' },
  { id: 'stack' },
];

export const timeline = [
  { id: 'freelance', type: 'work', period: '2025 — Present', icon: 'briefcase' },
  { id: 'mars', type: 'education', period: '2024 — Present', icon: 'graduation' },
  { id: 'self', type: 'education', period: '2023 — 2024', icon: 'book' },
];

export const achievements = [
  { id: 'realProjects', icon: 'folder', value: '3+' },
  { id: 'responsive', icon: 'smartphone', value: '100%' },
  { id: 'multilingual', icon: 'languages', value: '3' },
  { id: 'cleanCode', icon: 'sparkles', value: '✓' },
];

export const values = [
  { id: 'clean', icon: 'braces' },
  { id: 'responsive', icon: 'smartphone' },
  { id: 'performance', icon: 'zap' },
];

export const navItems = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
