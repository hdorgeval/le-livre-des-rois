import styles from './header.module.scss';
import { DarkModeToggle } from './dark-mode-toggle/dark-mode-toggle';
import React from 'react';

export const Header: React.FC = () => (
  <header className={styles.container}>
    <div className={styles.row}>
      <DarkModeToggle />
    </div>
  </header>
);
