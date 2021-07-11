import { Title, SEO } from '../../components';
import { FirdousiArticles, Layout } from '../../components/fr';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => (
  <Layout>
    <SEO
      lang="fr"
      title="A propos | Le Livre des Rois | Shâhnâmeh"
      contentType="website"
      description="A propos du Livre des Rois"
    />
    <div>
      <Title text="A propos du Livre des Rois" subtitle="" />
      <div className="container text-light">
        <p>
          L&apos; objectif est de transcrire l&apos;oeuvre de{' '}
          <a
            className="text-light"
            href="https://fr.wikipedia.org/wiki/Ferdowsi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firdousi
          </a>{' '}
          au format Markdown de façon à la rendre vivante et à pouvoir l&apos;enrichir de récits
          connexes tels que ceux apportés à la Bibliothèque Royale par Anquetil du Perron en 1762.
        </p>
        <p>
          Tout le contenu de ce site provient de la Bibliothèque Nationale de France (
          <a
            className="text-light"
            href="https://gallica.bnf.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            gallica.bnf.fr
          </a>
          ) et provient des &nbsp;
          <a
            className="text-light"
            href="https://www.notesdumontroyal.com/recherche/le+livre+des+rois"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notes du mont Royal
          </a>
          .
        </p>
        <p>
          Toutes les photos sont issues de{' '}
          <a
            className="text-light"
            href="https://source.unsplash.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            unsplash.com
          </a>
          .
        </p>
        <p>
          Compte-tenu de l&apos;importance de l&apos;oeuvre de Firdousi, ce site sera en mode
          &apos;work in progress&apos; pour une durée indéterminée.
        </p>
        <p>
          Les contributeurs sont les bienvenus sur la source de ce site située sur{' '}
          <a
            className="text-light"
            href="https://github.com/hdorgeval/le-livre-des-rois"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          Pour toute question/suggestion/feedback, vous pouvez ouvrir une{' '}
          <a
            className="text-light"
            href="https://github.com/hdorgeval/le-livre-des-rois/discussions"
            target="_blank"
            rel="noopener noreferrer"
          >
            discussion
          </a>{' '}
          sur GitHub;
        </p>
        <p>
          I am looking for a Web Designer to create a better user experience and an Artist to
          replace photos by illustrations/drawings. Feel free to introduce yourself in the{' '}
          <a
            className="text-light"
            href="https://github.com/hdorgeval/le-livre-des-rois/discussions"
            target="_blank"
            rel="noopener noreferrer"
          >
            discussions
          </a>{' '}
          on Github;
        </p>

        <FirdousiArticles />
      </div>
    </div>
  </Layout>
);
