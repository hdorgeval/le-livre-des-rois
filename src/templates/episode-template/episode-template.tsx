import { MarkdownRemarkResponse } from '../../graphql';
import { Layout, SEO } from '../../components';
import React from 'react';
import { graphql } from 'gatsby';
import './episode-template.css';

interface MarkdownTemplateProps {
  data: MarkdownRemarkResponse;
}
export const MarkdownTemplate: React.FC<MarkdownTemplateProps> = ({ data }) => {
  const markdownData = data.markdownRemark;
  const firstHeading = markdownData.headings[0].value;

  const note = '<sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup>';
  const hasTitleNote = markdownData.html.includes(`<h1>${firstHeading}${note}</h1>`);

  const htmlWithoutFirstHeading = hasTitleNote
    ? markdownData.html.replace(`<h1>${firstHeading}${note}</h1>`, '')
    : markdownData.html.replace(`<h1>${firstHeading}</h1>`, '');

  return (
    <Layout>
      <SEO title="Le Livre des Rois - Shâhnâmeh" contentType="website" description={firstHeading} />
      <div>
        <div className="card bg-dark text-white">
          <div className="card-header text-light text-center text-uppercase border-bottom border-bottom-1 border-secondary pb-0 mb-3">
            <h1 className="card-title text-truncate">
              {firstHeading}
              {hasTitleNote ? <span dangerouslySetInnerHTML={{ __html: note }}></span> : ''}
            </h1>
          </div>
          <div className="card-body card-text">
            <div
              style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#fafafa',
                backgroundImage: `Url(${markdownData.frontmatter.landscape}/960x200)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                marginBottom: '30px',
              }}
            ></div>
            <div
              id="episode-content"
              dangerouslySetInnerHTML={{ __html: htmlWithoutFirstHeading }}
            />
          </div>
          <div className="card-footer text-muted"></div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        landscape
        tags
      }
      headings {
        value
        depth
      }
    }
  }
`;

export default MarkdownTemplate;
