import { EpisodeCard } from './episode-card-with-reign';
import { SEO, Title } from '../../../components';
import { AllMarkdownRemarkResponse, PageContext } from '../../../graphql';
import { Layout, TagDescription } from '../../../components/fr';
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
      <SEO
        lang="fr"
        title={`${tag} | Lexique | Le Livre des Rois | Shâhnâmeh`}
        contentType="website"
        description={tag}
      />
      <div>
        <Title text={tag} subtitle={''}></Title>
        <div className="container">
          <div>
            <TagDescription tag={tag} />
          </div>
          <Title text="" subtitle={`Tous les épisodes faisant référence au terme '${tag}'`}></Title>
          <div>
            {data.allMarkdownRemark.edges
              .map((nodeWrapper) => nodeWrapper.node)
              .map((node) => (
                <EpisodeCard {...node} key={node.id} index={Number(node.frontmatter.order)} />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: fileAbsolutePath, order: ASC }
      filter: {
        fileAbsolutePath: { glob: "**/markdown/fr/**/*.md" }
        frontmatter: { tags: { in: [$tag] } }
      }
    ) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 120)
          fields {
            slug
          }
          frontmatter {
            order
            reign
          }
          id
          headings {
            value
            depth
          }
        }
      }
    }
  }
`;

export default TagTemplate;
