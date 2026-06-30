// Navigation structure — `key` maps to a translation in locales (nav.*, footer.groups.*)
export const NAV_LINKS = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/services' },
  { key: 'work', href: '/work' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
];

// Footer link groups — `group` + `key` map to footer.groups.<group>.links.<key>
export const FOOTER_LINKS = [
  {
    group: 'studio',
    links: [
      { key: 'services', href: '/services' },
      { key: 'work', href: '/work' },
      { key: 'about', href: '/about' },
      { key: 'contact', href: '/contact' },
    ],
  },
  {
    group: 'services',
    links: [
      { key: 'design', href: '/services' },
      { key: 'marketing', href: '/services' },
      { key: 'landing', href: '/services' },
      { key: 'apps', href: '/services' },
    ],
  },
];

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/wasifhafeez', icon: 'Github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/wasifhafeez', icon: 'Linkedin' },
  { label: 'Twitter', href: 'https://twitter.com/wasifhafeez', icon: 'Twitter' },
  { label: 'Email', href: 'mailto:alvitotech@gmail.com', icon: 'Mail' },
];
