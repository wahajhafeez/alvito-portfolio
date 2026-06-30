import { useNavigate } from 'react-router';
import { Command } from 'cmdk';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Home, User, Briefcase, LayoutGrid, Mail, Github, ExternalLink, Moon, Sun
} from 'lucide-react';
import { useCommandPalette } from '@/hooks/useCommandPalette';
import { useTheme } from '@/hooks/useTheme';

// Structure only — `tKey` resolves the label, `label` is for untranslated proper nouns
const COMMANDS = [
  { groupKey: 'navigate', tKey: 'nav.home', icon: Home, href: '/' },
  { groupKey: 'navigate', tKey: 'nav.services', icon: LayoutGrid, href: '/services' },
  { groupKey: 'navigate', tKey: 'nav.work', icon: Briefcase, href: '/work' },
  { groupKey: 'navigate', tKey: 'nav.about', icon: User, href: '/about' },
  { groupKey: 'navigate', tKey: 'nav.contact', icon: Mail, href: '/contact' },
  { groupKey: 'links', label: 'GitHub', icon: Github, href: 'https://github.com/wasifhafeez', external: true },
];

const CommandPalette = () => {
  const { t } = useTranslation();
  const { commandPaletteOpen, setCommandPaletteOpen } = useCommandPalette();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleSelect = (cmd) => {
    setCommandPaletteOpen(false);
    if (cmd.action) {
      cmd.action();
    } else if (cmd.external) {
      window.open(cmd.href, '_blank');
    } else if (cmd.href) {
      navigate(cmd.href);
    }
  };

  const allCommands = [
    ...COMMANDS,
    {
      groupKey: 'actions',
      id: 'theme',
      label: theme === 'dark' ? t('commandPalette.switchToLight') : t('commandPalette.switchToDark'),
      icon: theme === 'dark' ? Sun : Moon,
      action: toggleTheme,
    },
  ];

  const groupKeys = [...new Set(allCommands.map((c) => c.groupKey))];

  return (
    <AnimatePresence>
      {commandPaletteOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
          onClick={() => setCommandPaletteOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            className="glass relative w-full max-w-lg overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Command className="bg-transparent">
              <div className="flex items-center border-b border-border px-4">
                <span className="mr-2 text-muted-foreground">⌘</span>
                <Command.Input
                  placeholder={t('commandPalette.placeholder')}
                  className="flex-1 bg-transparent py-4 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                  autoFocus
                />
              </div>
              <Command.List className="max-h-72 overflow-y-auto p-2">
                <Command.Empty className="py-8 text-center text-sm text-muted-foreground">
                  {t('commandPalette.empty')}
                </Command.Empty>
                {groupKeys.map((groupKey) => (
                  <Command.Group
                    key={groupKey}
                    heading={t(`commandPalette.groups.${groupKey}`)}
                    className="[&>[cmdk-group-heading]]:px-2 [&>[cmdk-group-heading]]:py-1.5 [&>[cmdk-group-heading]]:text-xs [&>[cmdk-group-heading]]:font-medium [&>[cmdk-group-heading]]:text-muted-foreground"
                  >
                    {allCommands
                      .filter((c) => c.groupKey === groupKey)
                      .map((cmd) => {
                        const label = cmd.tKey ? t(cmd.tKey) : cmd.label;
                        return (
                          <Command.Item
                            key={cmd.tKey || cmd.id || cmd.label}
                            value={label}
                            onSelect={() => handleSelect(cmd)}
                            className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors aria-selected:bg-primary/10 aria-selected:text-primary"
                          >
                            <cmd.icon size={15} className="shrink-0" />
                            {label}
                            {cmd.external && (
                              <ExternalLink size={12} className="ml-auto text-muted-foreground" />
                            )}
                          </Command.Item>
                        );
                      })}
                  </Command.Group>
                ))}
              </Command.List>
              <div className="border-t border-border px-4 py-2 text-xs text-muted-foreground">
                <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">Esc</kbd> {t('commandPalette.escToClose')}
              </div>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
