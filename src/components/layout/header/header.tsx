import styles from './header.module.scss';
import { DarkModeToggle } from './dark-mode-toggle/dark-mode-toggle';
import { GithubButton } from './github-button/github-button';
import { HomeButton } from './home-button/home-button';
import { TagsButton } from './tags-button/tags-button';
import { GenealogiesButton } from './genealogies-button/genealogies-button';
import React from 'react';

export const Header: React.FC = () => (
  <header className={styles.container}>
    <div className={styles.row}>
      <HomeButton />
      <TagsButton />
      <GenealogiesButton />
      {/* <GithubButton /> */}
      <DarkModeToggle />
    </div>
  </header>
);
