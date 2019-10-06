import 'jest';
import { extractCodeFrom } from './markdown-code';
import { HtmlAST } from '../../graphql';

test('Should get graph data', () => {
  // Given
  const htmlAst: HtmlAST = {
    type: 'root',
    children: [
      {
        type: 'element',
        tagName: 'h1',
        properties: {},
        children: [
          {
            type: 'text',
            value: 'Lohrasp',
          },
        ],
      },
      {
        type: 'text',
        value: '\n',
      },
      {
        type: 'element',
        tagName: 'pre',
        properties: {},
        children: [
          {
            type: 'element',
            tagName: 'code',
            properties: {
              className: ['language-Lohrasp'],
            },
            children: [
              {
                type: 'text',
                value:
                  'graph TD\nLohrasp --a pour fils--> Guschtasp\nLohrasp --a pour fils--> Zerir\nKitaboun --choisi--> Guschtasp\nKitaboun --fille du--> K(Kaisar du pays de Roum)\n',
              },
            ],
          },
        ],
      },
    ],
    data: {
      quirksMode: false,
    },
  };

  // When
  const result = extractCodeFrom(htmlAst).withClassName('language-Lohrasp');

  // Then
  const expectedResult = `graph TD
Lohrasp --a pour fils--> Guschtasp
Lohrasp --a pour fils--> Zerir
Kitaboun --choisi--> Guschtasp
Kitaboun --fille du--> K(Kaisar du pays de Roum)
`;
  expect(result).toEqual(expectedResult);
});
