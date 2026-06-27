export const SKILL_CATEGORIES = [
  {
    category: 'Design & Branding',
    color: '#8b5cf6',
    skills: ['Figma', 'UI/UX Design', 'Branding', 'Design Systems', 'Prototyping', 'Webflow'],
  },
  {
    category: 'Marketing',
    color: '#ec4899',
    skills: ['Social Media', 'Meta Ads', 'SEO', 'Content Strategy', 'Email', 'Analytics'],
  },
  {
    category: 'Frontend',
    color: '#6366f1',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'GSAP'],
  },
  {
    category: 'Backend',
    color: '#06b6d4',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Socket.io', 'Stripe', 'JWT'],
  },
  {
    category: 'Mobile & Database',
    color: '#22c55e',
    skills: ['React Native', 'Expo', 'MongoDB', 'PostgreSQL', 'Firebase', 'Redis'],
  },
  {
    category: 'DevOps & Cloud',
    color: '#f59e0b',
    skills: ['Docker', 'Git', 'Vercel', 'Render', 'MongoDB Atlas', 'Cloudinary'],
  },
];

// For the 3D sphere — flat list of tech names
export const ALL_SKILLS = SKILL_CATEGORIES.flatMap((cat) => cat.skills);
