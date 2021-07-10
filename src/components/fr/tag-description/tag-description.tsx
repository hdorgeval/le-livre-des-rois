import { AllMarkdownRemarkResponse } from '../../../graphql';
import { LeafletMap, Title } from '../../common';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export interface TagDescriptionProps {
  tag: string;
}
export const TagDescription: React.FC<TagDescriptionProps> = ({ tag }) => {
  const markdownData = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
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
              geo_data
            }
          }
        }
      }
    }
  `);

  const markdownNodes = markdownData.allMarkdownRemark.edges
    .map((edge) => edge.node)
    .filter((node) => node.frontmatter.tags.includes(tag));

  if (markdownNodes.length === 0) {
    return null;
  }

  return (
    <div className="text-light mb-4">
      {markdownNodes.map((node) => {
        const firstHeading = node.headings[0].value;
        const htmlWithoutFirstHeading = node.html.replace(`<h1>${firstHeading}</h1>`, '');
        return (
          <div key={node.id}>
            <div
              id="episode-content"
              dangerouslySetInnerHTML={{ __html: htmlWithoutFirstHeading }}
            />
            {node.frontmatter.geo_data && (
              <>
                <Title text="" subtitle={`Cartographie associée au terme '${tag}'`}></Title>
                <LeafletMap geoJsonFilename={node.frontmatter.geo_data} />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
