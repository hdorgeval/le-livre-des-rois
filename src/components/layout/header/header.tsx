import styles from './header.module.scss';
import { DarkModeToggle } from './dark-mode-toggle/dark-mode-toggle';
import { GithubButton } from './github-button/github-button';
import React from 'react';

export const Header: React.FC = () => (
  <header className={styles.container}>
    <div className={styles.row}>
      <GithubButton />
      <DarkModeToggle />
    </div>
  </header>
);
