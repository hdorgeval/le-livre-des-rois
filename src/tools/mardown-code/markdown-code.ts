import { HtmlAST } from '../../graphql';
import extractFromAst from 'unist-util-visit';
// eslint-disable-next-line import/no-unresolved
import { Node, Parent } from 'unist';

type Test<T extends Node> = TestType<T> | TestObject<T> | TestFunction<T>;
type TestFunction<T extends Node> = (node: unknown, index?: number, parent?: Parent) => node is T;
type TestType<T extends Node> = T['type'];
type TestObject<T extends Node> = Partial<T>;

const codeNodeWithClassNameFilter = (className: string) => (node: HtmlAST): boolean => {
  if (node.tagName !== 'code') {
    return false;
  }
  return (
    node.properties !== undefined &&
    Array.isArray(node.properties.className) &&
    node.properties.className.includes(className) &&
    Array.isArray(node.children)
  );
};
export const extractCodeFrom = (ast: HtmlAST) => {
  let code: string | undefined = undefined;
  return {
    withClassName: (className: string): string | undefined => {
      extractFromAst<HtmlAST>(
        ast,
        codeNodeWithClassNameFilter(className) as Test<HtmlAST>,
        (node) => {
          if (Array.isArray(node.children)) {
            code = node.children[0].value;
          }
        },
      );
      return code;
    },
  };
};
