import { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Calendar } from 'lucide-react';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';
import useUiStore from '@/store/uiStore';
import { NAV_LINKS } from '@/constants/navigation';
import { BRAND, PRIMARY_CTA } from '@/constants/site';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleCommandPalette = useUiStore((s) => s.toggleCommandPalette);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass' : 'bg-transparent'
      )}
    >
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="group flex items-baseline gap-0.5">
          <span className="gradient-text font-space text-xl font-bold">{BRAND.short}</span>
          <span className="hidden text-sm text-muted-foreground transition-colors group-hover:text-foreground sm:block">
            {BRAND.logoSuffix}
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                cn(
                  'relative rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-primary/10"
                      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <button
            onClick={toggleCommandPalette}
            className="glass hidden items-center gap-2 rounded-lg px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground lg:flex"
          >
            <Terminal size={13} /> <span>⌘K</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => window.Calendly?.initPopupWidget({ url: PRIMARY_CTA.href })}
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-all hover:bg-primary/90 hover:-translate-y-0.5 md:flex"
          >
            <Calendar size={14} />
            {PRIMARY_CTA.label}
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="glass rounded-lg p-2 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-strong overflow-hidden border-t border-border md:hidden"
          >
            <nav className="container-custom flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) =>
                    cn(
                      'rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <button
                onClick={() => window.Calendly?.initPopupWidget({ url: PRIMARY_CTA.href })}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white shadow-md shadow-primary/25"
              >
                <Calendar size={15} />
                {PRIMARY_CTA.label}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
