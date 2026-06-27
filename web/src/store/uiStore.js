import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUiStore = create(
  persist(
    (set) => ({
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),

      isLoading: true,
      setLoading: (val) => set({ isLoading: val }),

      commandPaletteOpen: false,
      setCommandPaletteOpen: (val) => set({ commandPaletteOpen: val }),
      toggleCommandPalette: () =>
        set((state) => ({ commandPaletteOpen: !state.commandPaletteOpen })),

      activeSection: 'home',
      setActiveSection: (section) => set({ activeSection: section }),

      activeFilter: 'all',
      setActiveFilter: (filter) => set({ activeFilter: filter }),
    }),
    {
      name: 'portfolio-ui',
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);

export default useUiStore;
