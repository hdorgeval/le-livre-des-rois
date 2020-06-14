import styles from './tag-template.module.scss';
import { Layout, SEO, Title, EpisodeLink } from '../../components';
import { AllMarkdownRemarkResponse, PageContext } from '../../graphql';
import { toMinutes } from '../../tools';
import { TagDescription } from '../../components/tag-description/tag-description';
import React from 'react';
import { graphql } from 'gatsby';

export interface TagTemplateProps {
  data: AllMarkdownRemarkResponse;
  pageContext: PageContext;
}
export const TagTemplate: React.FC<TagTemplateProps> = ({ data, pageContext }) => {
  const { tag } = pageContext;
  return (
    <Layout>
      <SEO title="Le Livre des Rois" contentType="website" description={tag} />
      <div>
        <Title text={tag} subtitle={''}></Title>
        <div className={styles.content}>
          <TagDescription tag={tag} />
        </div>
        <Title text="" subtitle={`Tous les épisodes faisant référence au terme '${tag}'`}></Title>
        <div className={styles.content}>
          {data.allMarkdownRemark.edges
            .map((nodeWrapper) => nodeWrapper.node)
            .map((node) => {
              return {
                ...node,
                timeToRead: toMinutes(node.timeToRead * 2),
              };
            })
            .map((node) => (
              <EpisodeLink {...node} key={node.id} timeUnit="minute" />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: frontmatter___order, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(truncate: true, pruneLength: 120)
          fields {
            slug
          }
          frontmatter {
            image
            title
            tags
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
        }
      }
    }
  }
`;

export default TagTemplate;
