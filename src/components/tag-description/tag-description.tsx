import { AllMarkdownRemarkResponse } from '../../graphql';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export interface TagDescriptionProps {
  tag: string;
}
export const TagDescription: React.FC<TagDescriptionProps> = ({ tag }) => {
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: frontmatter___order }
        filter: { fileAbsolutePath: { glob: "**/tags/*.md" } }
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            html
            headings(depth: h1) {
              id
              value
            }
            frontmatter {
              tags
            }
          }
        }
        pageInfo {
          totalCount
        }
      }
    }
  `);

  const markdownNodes = data.allMarkdownRemark.edges
    .map((edge) => edge.node)
    .filter((node) => node.frontmatter.tags.includes(tag));

  return (
    <div>
      {markdownNodes.map((node) => {
        const firstHeading = node.headings[0].value;
        const htmlWithoutFirstHeading = node.html.replace(`<h1>${firstHeading}</h1>`, '');
        return <div key={node.id} dangerouslySetInnerHTML={{ __html: htmlWithoutFirstHeading }} />;
      })}
    </div>
  );
};
