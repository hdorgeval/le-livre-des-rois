import { MarkdownRemarkResponse } from '../../graphql';
import { Layout, Title, SEO } from '../../components';
import React from 'react';
import { graphql } from 'gatsby';

interface MarkdownTemplateProps {
  data: MarkdownRemarkResponse;
}
export const MarkdownTemplate: React.FC<MarkdownTemplateProps> = ({ data }) => {
  const markdownData = data.markdownRemark;
  const firstHeading = markdownData.headings[0].value;
  const htmlWithoutFirstHeading = markdownData.html.replace(`<h1>${firstHeading}</h1>`, '');

  return (
    <Layout>
      <SEO title="Le Livre des Rois - Shâhnâmeh" contentType="website" description={firstHeading} />
      <div>
        <Title text={firstHeading} subtitle=""></Title>
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
        <div dangerouslySetInnerHTML={{ __html: htmlWithoutFirstHeading }} />
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
