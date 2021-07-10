import { MarkdownRemarkResponse } from '../../../graphql';
import { Layout } from '../../../components/fr';
import { SEO } from '../../../components';
import React from 'react';
import { graphql, Link } from 'gatsby';
import './episode-template.css';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

const firstSlug = '/01-kaioumors/01-commencement-du-recit/';

interface MarkdownTemplateProps {
  data: MarkdownRemarkResponse;
  pageContext: {
    previousSlug: string | null;
    nextSlug: string | null;
    slug: string;
    reignTitle: string | null;
    reignSlug: string | null;
    lastUpdate: string | null;
    pageTitle: string | null;
    status: 'draft' | 'ready' | null;
    githubPageUrl: string | null;
  };
}
export const MarkdownTemplate: React.FC<MarkdownTemplateProps> = ({ data, pageContext }) => {
  const markdownData = data.markdownRemark;
  const firstHeading = markdownData.headings[0].value;

  const note = '<sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup>';
  const hasTitleNote = markdownData.html.includes(`<h1>${firstHeading}${note}</h1>`);

  const htmlWithoutFirstHeading = hasTitleNote
    ? markdownData.html.replace(`<h1>${firstHeading}${note}</h1>`, '')
    : markdownData.html.replace(`<h1>${firstHeading}</h1>`, '');

  const image = getImage(data.file);
  const lastUpdate = React.useMemo(() => {
    if (pageContext.lastUpdate) {
      return new Date(pageContext.lastUpdate).toLocaleDateString('fr', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    }
    return '';
  }, [pageContext]);

  const isDraft = React.useMemo(() => pageContext.status === 'draft', [pageContext.status]);
  const isReady = React.useMemo(() => pageContext.status === 'ready', [pageContext.status]);
  const hasGithubPageUrl = React.useMemo(
    () => pageContext.githubPageUrl !== null,
    [pageContext.githubPageUrl],
  );

  return (
    <Layout>
      <SEO
        lang="fr"
        title={pageContext.pageTitle || 'Le Livre des Rois - Shâhnâmeh'}
        contentType="website"
        description={firstHeading}
      />
      <div>
        <div className="card bg-dark text-white">
          <div
            id="episode-title"
            className="card-header text-light text-center text-uppercase border-bottom border-bottom-1 border-secondary pb-0 mb-0"
          >
            {pageContext.reignTitle && <h1>{pageContext.reignTitle}</h1>}
            <h2 className="card-title text-truncate">
              {firstHeading}
              {hasTitleNote ? <span dangerouslySetInnerHTML={{ __html: note }}></span> : ''}
            </h2>
          </div>
          {isDraft && (
            <div className="text-center fs-6 border-bottom border-bottom-1 border-secondary py-2 px-4">
              <div className="badge bg-primary text-wrap">
                Cette page peut présenter des erreurs qui seront bientôt corrigées. Merci pour votre
                compréhension.
              </div>
            </div>
          )}

          <div className="card-body card-text pb-1">
            <div className="container">
              {image && (
                <GatsbyImage image={image} className="card-img mb-4" alt="..."></GatsbyImage>
              )}
              <div
                id="episode-content"
                dangerouslySetInnerHTML={{ __html: htmlWithoutFirstHeading }}
              />
              {pageContext.lastUpdate && (
                <p className="font-monospace text-muted float-end fs-6">
                  <small>Dernière mise à jour : {lastUpdate}</small>
                </p>
              )}
            </div>
          </div>

          <div className="card-footer">
            <ul className="pagination pagination-lg justify-content-center">
              <li className="page-item w-50">
                {pageContext.previousSlug && firstSlug !== pageContext.slug && (
                  <Link
                    className="page-link text-center text-light bg-dark"
                    to={pageContext.previousSlug}
                    aria-label="épisode précédent"
                  >
                    Épisode précédent
                  </Link>
                )}
              </li>
              <li className="page-item w-50">
                {pageContext.nextSlug && (
                  <Link
                    className="page-link text-center text-light bg-dark"
                    to={pageContext.nextSlug}
                    aria-label="épisode suivant"
                  >
                    Épisode suivant
                  </Link>
                )}
              </li>
            </ul>

            {isReady && hasGithubPageUrl && (
              <div className="d-flex justify-content-center">
                <a
                  className="page-link btn btn-outline-light text-light bg-dark"
                  href={pageContext.githubPageUrl || ''}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Proposer une correction sur GitHub"
                >
                  <i className="bi bi-github text-light me-3"></i>
                  Proposer une correction
                  <i className="bi bi-box-arrow-up-right ms-3"></i>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!, $image: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      headings {
        value
        depth
      }
    }
    file(relativePath: { glob: $image }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, height: 200, layout: CONSTRAINED, aspectRatio: 4)
      }
    }
  }
`;

export default MarkdownTemplate;
