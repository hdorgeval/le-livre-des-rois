import styles from '../header.module.scss';
import React from 'react';

export const GithubButton: React.FC = () => (
  <a
    href="https://www.github.com/hdorgeval/le-livre-des-rois"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className={styles.buttonGithub}>GitHub</div>
  </a>
);
