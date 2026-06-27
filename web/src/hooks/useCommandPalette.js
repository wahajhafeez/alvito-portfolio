import { useEffect } from 'react';
import useUiStore from '@/store/uiStore';

export const useCommandPalette = () => {
  const { commandPaletteOpen, toggleCommandPalette, setCommandPaletteOpen } = useUiStore();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleCommandPalette();
      }
      if (e.key === 'Escape' && commandPaletteOpen) {
        setCommandPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [commandPaletteOpen, toggleCommandPalette, setCommandPaletteOpen]);

  return { commandPaletteOpen, setCommandPaletteOpen };
};
