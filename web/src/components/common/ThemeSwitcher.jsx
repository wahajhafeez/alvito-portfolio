import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={toggleTheme}
      className="glass flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:text-primary"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </motion.button>
  );
};

export default ThemeSwitcher;
