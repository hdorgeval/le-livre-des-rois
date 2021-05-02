import { MarkdownRemarkResponse } from '../../graphql';
import { Layout, SEO } from '../../components';
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

  return (
    <Layout>
      <SEO title="Le Livre des Rois - Shâhnâmeh" contentType="website" description={firstHeading} />
      <div>
        <div className="card bg-dark text-white">
          <div
            id="episode-title"
            className="card-header text-light text-center text-uppercase border-bottom border-bottom-1 border-secondary pb-0 mb-0"
          >
            <h1 className="card-title text-truncate">
              {firstHeading}
              {hasTitleNote ? <span dangerouslySetInnerHTML={{ __html: note }}></span> : ''}
            </h1>
          </div>
          <div className="card-body card-text">
            {image && <GatsbyImage image={image} className="card-img mb-4" alt="..."></GatsbyImage>}
            <div
              id="episode-content"
              dangerouslySetInnerHTML={{ __html: htmlWithoutFirstHeading }}
            />
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!, $image: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        image
        tags
      }
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
