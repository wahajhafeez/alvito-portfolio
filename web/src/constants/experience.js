// Studio journey / milestones — structure only (rendered as a timeline).
// `icon` maps to a lucide-react icon in TimelineSection. `technologies` are proper
// nouns and stay untranslated. Translatable text lives in locales:
// experience.items.<id>.{title,company,location,period,description} and experience.type.<type>
export const EXPERIENCE_ITEMS = [
  {
    id: 1,
    type: 'milestone',
    technologies: ['React', 'Node.js', 'MongoDB', 'Figma'],
    icon: 'Rocket',
  },
  {
    id: 2,
    type: 'milestone',
    technologies: ['Branding', 'Figma', 'Social Media', 'Paid Ads'],
    icon: 'Palette',
  },
  {
    id: 3,
    type: 'milestone',
    technologies: ['React', 'Next.js', 'React Native', 'Node.js', 'Web Apps', 'Mobile Apps'],
    icon: 'Target',
  },
  {
    id: 4,
    type: 'milestone',
    technologies: ['Web Apps', 'Mobile Apps', 'Growth', 'Support'],
    icon: 'Users',
  },
];
