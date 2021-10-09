# LT<sub>E</sub>X LS — LT<sub>E</sub>X Language Server

`ltex` is used both:

- As a live tool within Visual Studio Code for grammar/spelling checking and fixing markdown content whatever the language used (French, English, Persian, etc...).
  This VS Code extension enables you to correct grammar and spelling errors found in the markdown file, on the fly, as if you were in Microsoft Office word;

- As a command-line tool for automating all aspects regarding spell checking:
  - check how many errors are still left in markdown files;
  - generate source code that will process the markdown files in order to auto-fix remaining spelling errors.

## Usage

- Install the command-line tool by downloading the software from [GitHub valentjn/ltex-ls](https://github.com/valentjn/ltex-ls/releases/latest).

- Place the software folder at the root of this project.

For example, if the latest vesion is `12.4.0` you should have a folder named `ltex-ls-12.4.0` at the root of this project:

```text
ltex-ls-12.4.0
  |- bin
    |- ltex-ls
  |- lib
  LICENCE.md
  README.md
```

- Ensure this version is targeted in the file `exec-ltex.ts` located in the folder `src\tools\fr\ltex`.
