import styles from './about.module.scss';
import { Layout, Title } from '../components';
import React from 'react';

export default () => (
  <Layout>
    <div>
      <Title text="A propos du Livre des Rois" subtitle="" />
      <div className={styles.content}>
        <h2>Le concept</h2>
        <p>
          L&apos; objectif est de transcrire l&apos;oeuvre de Ferdowsi au format Markdown de façon à
          la rendre vivante et à pouvoir l&apos;enrichir de récits connexes tels que ceux apportés à
          la Bibliothèque Royale par M. Anquetil Du Perron en 1762.
        </p>
        <p>
          Tous les documents dont il est fait référence sur ce site sont issus de la Bibliothèque
          Nationale de France (
          <a href="https://gallica.bnf.fr" target="_blank" rel="noopener noreferrer">
            gallica.bnf.fr
          </a>
          )
        </p>
        <p>
          Compte-tenu de l&apos;importance de l&apos;oeuvre de Ferdowsi, ce site sera toujours en
          mode &apos;work in progress&apos;.
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
      </div>
    </div>
  </Layout>
);
