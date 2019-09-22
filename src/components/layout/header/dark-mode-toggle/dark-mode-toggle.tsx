import styles from '../header.module.scss';
import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

interface ThemeTogglerProps {
  theme: string;
  toggleTheme: (theme: string) => void;
}

export const DarkModeToggle: React.FC = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }: ThemeTogglerProps) => (
      <button
        className={styles.buttonToggleTheme}
        onClick={() => (theme === 'dark' ? toggleTheme('light') : toggleTheme('dark'))}
      >
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    )}
  </ThemeToggler>
);
