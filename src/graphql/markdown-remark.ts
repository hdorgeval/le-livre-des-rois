// eslint-disable-next-line import/no-unresolved
import { Node } from 'unist';

export interface AllMarkdownRemarkResponse {
  allMarkdownRemark: AllMarkdownRemark;
}

export interface MarkdownRemarkResponse {
  markdownRemark: MarkdownNode;
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
}

export interface MarkdownNode {
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
  image: string;
  tags: string[];
  landscape: string;
  order: string;
}

export interface HtmlAST extends Node {
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
