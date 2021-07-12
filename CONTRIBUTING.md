# Contributing to le-livre-des-rois

We'd love to accept your patches and contributions and help make this project even better than it is today!

As a contributor, here are the guidelines we would like you to follow:

- [Getting started](#Getting-started)
- [Commit Messages Guidelines](#Commit-Messages-Guidelines)
- [Documentation Guidelines](#Documentation-Guidelines)
- [Dependencies Guidelines](#Dependencies-Guidelines)
- [Dev mode vs Prod mode](#Dev-mode-versus-production-mode)

## Getting started

1. Clone this repository

```bash
git clone https://github.com/hdorgeval/le-livre-des-rois
cd le-livre-des-rois
```

2. Install dependencies

```bash
npm install
```

3. To run the website in dev mode

```bash
npm start
open localhost:8000
```

4. To run the website in production mode

```bash
npm run build
npm run serve
open localhost:9000
```

5. Working with VS Code

If you are using VS Code, it is recommanded to install the recommanded extensions.

## Commit Messages Guidelines

Commit messages should follow the Semantic Commit Messages format:

```txt
label(namespace): title

description

footer
```

1. _label_ is one of the following:

   - `chore` - build-related work, a change in the package.json file, a change in a configuration file or a change to a script file.
   - `docs` - changes to docs, e.g. `docs(api.md): ..` to change documentation.
   - `feat` - a new feature.
   - `fix` - a bug fix.
   - `refactor` - a code change that neither fixes a bug nor adds a feature
   - `style` - a change in the code style: spaces/alignment/wrapping etc.
   - `test` - adding missing tests or correcting existing tests.

2. _namespace_ is put in parentheses after label and is mandatory. Must be lowercase.
3. _title_ is a brief summary of changes.
4. _description_ is **optional**, new-line separated from title and is in present tense.
5. _footer_ is **optional**, new-line separated from _description_ and contains "fixes" / "references" attribution to GitHub issues.
6. _footer_ should also include "BREAKING CHANGE" if current API clients will break due to this change. It should explain what changed and how to get the old behavior.

Example:

```txt
fix(page): fix page.pizza method

This patch fixes page.pizza so that it works with iframes.

Fixes #123, Fixes #234

BREAKING CHANGE: page.pizza now delivers pizza at home by default.
To deliver to a different location, use "deliver" option:
  `page.pizza({deliver: 'work'})`.
```

## Committing strategy

A commiting strategy has been implemented in order to be able to easily track modifications on each separate markdown file in the repo:

- If you modify the content of one or more markdown files, do not commit manually those changes but run the npm script `auto-commit-formatted-episodes`.

- If you modify the frontmatter tags of one or more markdown files, do not commit manually those changes but run the npm script `auto-commit-episodes-with-updated-tags`.

- For any other changes, first run the npm script `auto-commit`, then manually commit any remaining changes.

If you are not sure about how to lable the commit, or how many files to put in the same commit, you can look at the [commits history](https://github.com/hdorgeval/le-livre-des-rois/commits/master).

Every commit, once pushed, goes directly into production. So if you are not sure of what you have done, run this npm script before pushing all commits: `auto-commit-skip-netlify`.

## Documentation Guidelines

### Markdown Guidelines

- You should follow this [GitHub Guide on Markdown](https://guides.github.com/features/mastering-markdown/)

### Code Comment

- Comments inside code should be generally avoided. If the code would not be understood without comments, consider re-writing the code to make it self-explanatory.

## Dependencies Guidelines

For all dependencies (both production and development):

- **Do not add** a dependency if the desired functionality is easily implementable.
- If adding a dependency, it should be well-maintained and trustworthy.

A barrier for introducing new production dependencies is especially high:

- **Do not add** production dependency unless it's critical to project success.

## Dev mode versus Production mode

If you change/add a React component, or if you change any CSS style, please run the website in both dev mode with `npm start` and prod mode with `npm run gatsby-build; npm run serve`, and ensure that the website renders the same in both mode.

If the `gatsby-build` fails with strange reasons due to your changes, this resource might help you : [Debugging HTML Builds in Gatsby](https://www.gatsbyjs.com/docs/debugging-html-builds/).

## Before pushing

Always run the `build` script before pushing:

```bash
npm run build
```
