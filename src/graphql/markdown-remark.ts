import { ImageDataLike } from 'gatsby-plugin-image';

export interface AllMarkdownRemarkResponse {
  allMarkdownRemark: AllMarkdownRemark;
}

export interface MarkdownRemarkResponse {
  markdownRemark: MarkdownNode;
  file: ImageDataLike;
}
export interface AllMarkdownRemark {
  edges: MardownNodeWrapper[];
  group: MarkdownGroupedTag[];
  totalCount: number;
}

export interface MarkdownGroupedTag {
  fieldValue: string;
  totalCount: number;
}

export interface MardownNodeWrapper {
  node: MarkdownNode;
  next: MarkdownNode | null;
  previous: MarkdownNode | null;
}

export interface MarkdownNode {
  next: MarkdownNode | null;
  previous: MarkdownNode | null;
  excerpt: string;
  fields: MarkdownExtraFields;
  frontmatter: MarkdownFrontmatter;
  headings: MarkdownHeading[];
  html: string;
  htmlAst: HtmlAST;
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
  episode_slug: string | null;
  geo_data: string | null;
  image: string;
  lang: string;
  order: string;
  reign_slug: string | null;
  reign: string;
  tags: string[];
  thumbnail: string;
  title: string;
}

export interface HtmlAST {
  type: 'element' | 'root' | 'text';
  tagName?: 'code' | 'pre' | 'h1';
  properties?: HtmlProperties;
  value?: string;
  children?: HtmlAST[];
}

export const emptyHtmlAst: HtmlAST = {
  type: 'root',
};

export interface HtmlProperties {
  className?: string[];
}
