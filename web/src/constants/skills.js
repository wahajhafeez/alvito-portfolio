// Skill categories — structure only. Skill names are proper nouns and stay
// untranslated. The category label lives in locales: skills.categories.<id>
export const SKILL_CATEGORIES = [
  {
    id: 'design',
    color: '#8b5cf6',
    skills: ['Figma', 'UI/UX Design', 'Branding', 'Design Systems', 'Prototyping', 'Webflow'],
  },
  {
    id: 'marketing',
    color: '#ec4899',
    skills: ['Social Media', 'Meta Ads', 'SEO', 'Content Strategy', 'Email', 'Analytics'],
  },
  {
    id: 'frontend',
    color: '#6366f1',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'GSAP'],
  },
  {
    id: 'backend',
    color: '#06b6d4',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Socket.io', 'Stripe', 'JWT'],
  },
  {
    id: 'mobile',
    color: '#22c55e',
    skills: ['React Native', 'Expo', 'MongoDB', 'PostgreSQL', 'Firebase', 'Redis'],
  },
  {
    id: 'devops',
    color: '#f59e0b',
    skills: ['Docker', 'Git', 'Vercel', 'Render', 'MongoDB Atlas', 'Cloudinary'],
  },
];

// For the 3D sphere — flat list of tech names
export const ALL_SKILLS = SKILL_CATEGORIES.flatMap((cat) => cat.skills);
