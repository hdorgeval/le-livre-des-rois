import { graphql } from 'gatsby';

export const EpisodesFragment = graphql`
  fragment Episodes on MarkdownRemarkConnection {
    edges {
      node {
        excerpt(truncate: true, pruneLength: 200)
        frontmatter {
          date
          image
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
        fields {
          slug
        }
      }
    }
  }
`;
