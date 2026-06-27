import { useEffect } from 'react';
import useUiStore from '@/store/uiStore';

export const useTheme = () => {
  const { theme, setTheme, toggleTheme } = useUiStore();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);

  return { theme, setTheme, toggleTheme };
};

// Call once in App.jsx to apply theme on mount without re-render loops
export const useThemeInit = () => {
  const theme = useUiStore((s) => s.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);
};
