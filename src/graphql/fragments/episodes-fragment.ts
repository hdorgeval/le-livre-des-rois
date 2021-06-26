import { graphql } from 'gatsby';

export const EpisodesFragment = graphql`
  fragment Episodes on MarkdownRemarkConnection {
    edges {
      node {
        excerpt(truncate: true, pruneLength: 200)
        id
        headings {
          value
          depth
        }
        fields {
          slug
        }
      }
    }
  }
`;
