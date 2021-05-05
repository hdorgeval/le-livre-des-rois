import { EpisodeCard } from './episode-card-with-reign';
import { Layout, SEO, Title } from '../../components';
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
      <SEO title="Le Livre des Rois - Shâhnâmeh" contentType="website" description={tag} />
      <div>
        <Title text={tag} subtitle={''}></Title>
        <div>
          <TagDescription tag={tag} />
        </div>
        <Title text="" subtitle={`Tous les épisodes faisant référence au terme '${tag}'`}></Title>
        <div>
          {data.allMarkdownRemark.edges
            .map((nodeWrapper) => nodeWrapper.node)
            .map((node) => {
              return {
                ...node,
                timeToRead: toMinutes(node.timeToRead * 2),
              };
            })
            .map((node) => (
              <EpisodeCard {...node} key={node.id} index={Number(node.frontmatter.order)} />
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
      sort: { fields: fileAbsolutePath, order: ASC }
      filter: {
        fileAbsolutePath: { glob: "**/markdown/**/*.md" }
        frontmatter: { tags: { in: [$tag] } }
      }
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
            order
            reign
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
