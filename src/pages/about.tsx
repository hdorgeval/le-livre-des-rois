import styles from './about.module.scss';
import { Layout, Title, FirdousiArticles } from '../components';
import React from 'react';

export default () => (
  <Layout>
    <div>
      <Title text="A propos du Livre des Rois" subtitle="" />
      <div className={styles.content}>
        <h2>Le concept</h2>
        <p>
          L&apos; objectif est de transcrire l&apos;oeuvre de Firdousi au format Markdown de façon à
          la rendre vivante et à pouvoir l&apos;enrichir de récits connexes tels que ceux apportés à
          la Bibliothèque Royale par M. Anquetil du Perron en 1762.
        </p>
        <p>
          Tous les documents dont il est fait référence sur ce site sont issus de la Bibliothèque
          Nationale de France (
          <a href="https://gallica.bnf.fr" target="_blank" rel="noopener noreferrer">
            gallica.bnf.fr
          </a>
          ) et issus des &nbsp;
          <a
            href="https://www.notesdumontroyal.com/recherche/le+livre+des+rois"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notes du mont Royal
          </a>
          .
        </p>
        <p>
          Compte-tenu de l&apos;importance de l&apos;oeuvre de Firdousi, ce site sera en mode
          &apos;work in progress&apos; pour une durée indéterminée.
        </p>
        <p>
          Les contributeurs sont les bienvenus sur la source de ce site situé sur{' '}
          <a
            href="https://github.com/hdorgeval/le-livre-des-rois"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          Pour toute question/suggestion/feedback, veuillez ouvrir une{' '}
          <a
            href="https://github.com/hdorgeval/le-livre-des-rois/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            issue
          </a>{' '}
          sur GitHub;
        </p>
        <br />
        <FirdousiArticles />
      </div>
    </div>
  </Layout>
);
