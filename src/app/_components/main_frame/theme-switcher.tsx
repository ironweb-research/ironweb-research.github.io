'use client';

import { memo, useEffect, useState} from 'react';
import styles from './switch.module.css';

const MODES = ['system', 'dark', 'light'] as const;
const STORAGE_KEY = 'this-theme';
type AppThemeMode = typeof MODES[number];

const applyThemeToDOM = (mode: AppThemeMode) => {
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const resolvedMode = mode === 'system' ? (systemPrefersDark ? 'dark' : 'light') : mode;
  const classList = document.documentElement.classList;

  classList.toggle('dark', resolvedMode === 'dark');
  document.documentElement.setAttribute('data-mode', mode);
};

// Run script before hydration to avoid FOUC
const InlineThemeScript = memo(() => {
  const scriptContent = `
    (() => {
      try {
        const STORAGE_KEY = '${STORAGE_KEY}';
        const mode = localStorage.getItem(STORAGE_KEY) || 'system';
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const resolved = mode === 'system' ? (prefersDark ? 'dark' : 'light') : mode;

        document.documentElement.classList.toggle('dark', resolved === 'dark');
        document.documentElement.setAttribute('data-mode', mode);
      } catch (e) {
        console.error('Theme script error', e);
      }
    })();
  `;

  return (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: scriptContent }}
    />
  );
});

const ThemeSwitchButton = () => {
  const [mode, setMode] = useState<AppThemeMode>(() => {
    if (typeof window === 'undefined') return 'system';
    return (localStorage.getItem(STORAGE_KEY) as AppThemeMode) ?? 'system';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);
    applyThemeToDOM(mode);
  }, [mode]);

  const cycleTheme = () => {
    const nextIndex = (MODES.indexOf(mode) + 1) % MODES.length;
    setMode(MODES[nextIndex]);
  };

  return (
    <button
      suppressHydrationWarning
      onClick={cycleTheme}
      aria-label="Switch Themes"
      className={styles.switch}
    />
  );
};

export const ThemeSwitcher = () => (
  <>
    <InlineThemeScript />
    <ThemeSwitchButton />
  </>
);
