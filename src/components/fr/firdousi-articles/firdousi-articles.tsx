import { ArticleCard } from '.';
import { AllMarkdownRemarkResponse } from '../../../graphql';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const FirdousiArticles: React.FC = () => {
  // prettier-ignore
  const data = useStaticQuery<AllMarkdownRemarkResponse>(graphql`
    {
      allMarkdownRemark(
        sort: {fields: frontmatter___order, order: ASC}, filter: {fileAbsolutePath: {glob: "**/markdown/fr/00-firdousi/*"}, frontmatter: {order: {}}}
      ) {
        edges {
          node {
            excerpt(truncate: true, pruneLength: 200)
            frontmatter {
              date
              image
              tags
              lang
              reign_slug
              episode_slug
            }
            id
            timeToRead
            headings {
              value
              depth
            }
            wordCount {
              words
              paragraphs
              sentences
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="row">
        {data.allMarkdownRemark.edges
          .map((nodeWrapper) => nodeWrapper.node)
          .map((node) => (
            <div className="col-sm-6 col-lg-3" key={node.id}>
              <ArticleCard key={node.id} {...node} />
            </div>
          ))}
      </div>
    </>
  );
};
