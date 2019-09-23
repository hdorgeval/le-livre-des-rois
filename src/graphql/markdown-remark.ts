export interface AllMarkdownRemarkResponse {
  allMarkdownRemark: AllMarkdownRemark;
}

export interface MarkdownRemarkResponse {
  markdownRemark: MarkdownNode;
}
export interface AllMarkdownRemark {
  edges: MardownNodeWrapper[];
}

export interface MardownNodeWrapper {
  node: MarkdownNode;
}

export interface MarkdownNode {
  excerpt: string;
  fields: MarkdownExtraFields;
  frontmatter: MarkdownFrontmatter;
  headings: MarkdownHeading[];
  html: string;
  id: string;
  timeToRead: number;
  wordCount: MarkdownWordCount;
}
export interface MarkdownWordCount {
  paragraphs: number;
  sentences: number;
  words: number;
}
export interface MarkdownHeading {
  depth: number;
  value: string;
}
export interface MarkdownExtraFields {
  slug: string;
}
export interface MarkdownFrontmatter {
  date: string;
  image: string;
  keywords: string;
  title: string;
}
