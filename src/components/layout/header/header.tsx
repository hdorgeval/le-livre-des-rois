import { HomeButton } from './home-button/home-button';
import { TagsButton } from './tags-button/tags-button';
import { GenealogiesButton } from './genealogies-button/genealogies-button';
import React from 'react';

export const Header: React.FC = () => (
  <header>
    <div>
      <HomeButton />
      <TagsButton />
      <GenealogiesButton />
      {/* <GithubButton /> */}
      {/* <DarkModeToggle /> */}
    </div>
  </header>
);
