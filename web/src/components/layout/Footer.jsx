import { NavLink } from 'react-router';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';
import { SOCIAL_LINKS, FOOTER_LINKS } from '@/constants/navigation';
import { BRAND, TAGLINE } from '@/constants/site';

const ICON_MAP = { Github, Linkedin, Mail, Twitter };

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="gradient-text font-space text-2xl font-bold">{BRAND.name}</span>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">{TAGLINE}</p>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = ICON_MAP[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="glass flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary"
                  >
                    {Icon && <Icon size={15} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link groups */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <p className="mb-3 text-sm font-semibold text-foreground">{group.title}</p>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Crafted with <Heart size={12} className="text-red-400" /> by{' '}
            <span className="text-primary">{BRAND.name}</span> &mdash; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
