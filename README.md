<h1 align="center">

  <img src="./documentation/static/branding/icon-white.svg" width="260px" />

</h1>

<div align="center">

**Beautiful API docs from TypeScript source. Zero effort.**

Generate fully structured, always-accurate API documentation for your Docusaurus site directly from TypeScript source
code. Every page stays in sync with your code automatically.

**[Documentation](https://docs.docsgen.dev/) |
[Quick Start](https://docs.docsgen.dev/docs/getting-started/quick-start) |
[Guides](https://docs.docsgen.dev/docs/guides)**

[![npm](https://img.shields.io/npm/v/@docsgen/core)](https://www.npmjs.com/package/@docsgen/core)
[![npm](https://img.shields.io/npm/v/@docsgen/docusaurus)](https://www.npmjs.com/package/@docsgen/docusaurus)
[![license](https://img.shields.io/npm/l/@docsgen/core)](https://github.com/BetterTyped/docsgen/blob/main/License.md)

</div>

<br />

## Quick Start

### 1. Install

```bash
npm install @docsgen/core @docsgen/docusaurus
```

### 2. Add the plugin

```ts
import plugin from "@docsgen/docusaurus";

const config = {
  plugins: [
    [
      "@docsgen/docusaurus",
      {
        id: "api",
        outDir: "docs/api",
        packages: [
          {
            title: "my-library",
            dir: "../packages/my-library",
            entryPath: "src/index.ts",
          },
        ],
      },
    ],
  ],
};
```

### 3. Build

```bash
npm run build
```

That's it. Structured MDX pages for every class, function, type, and enum appear in `docs/api/`, organized by category
and always matching your source.

## Why docsgen?

- **Always accurate** - Pages regenerate on every build from your TypeScript source. Change a type, rename a method, add
  a parameter: the docs update automatically.
- **Structured output** - Classes, functions, types, enums, and variables each get dedicated pages with parameters,
  return types, method tables, signatures, and examples.
- **Embed API in guides** - Use the `@import` directive to embed live API fragments (method tables, parameter lists,
  type definitions) inside hand-written MDX. They never go stale.
- **Monorepo ready** - Generate docs for multiple packages in a single Docusaurus site with per-package configuration,
  separate entry points, and optional index pages.
- **Fully customizable** - Override page templates per kind, control which sections render, remap file names, filter
  symbols, and reorder categories.
- **Built on TypeDoc** - Leverages TypeDoc for parsing with full support for JSDoc tags, generics, and complex type
  hierarchies.

---

## Packages

| Package                                                                                     | Version                                                                                                       | Downloads                                                                                                            |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [@docsgen/core](https://github.com/BetterTyped/docsgen/tree/main/packages/core)             | [![npm](https://img.shields.io/npm/v/@docsgen/core)](https://www.npmjs.com/package/@docsgen/core)             | [![downloads](https://img.shields.io/npm/dm/@docsgen/core)](https://www.npmjs.com/package/@docsgen/core)             |
| [@docsgen/docusaurus](https://github.com/BetterTyped/docsgen/tree/main/packages/docusaurus) | [![npm](https://img.shields.io/npm/v/@docsgen/docusaurus)](https://www.npmjs.com/package/@docsgen/docusaurus) | [![downloads](https://img.shields.io/npm/dm/@docsgen/docusaurus)](https://www.npmjs.com/package/@docsgen/docusaurus) |

---

## Examples

### Generated output structure

```
docs/api/
  my-library/
    index.mdx
    Classes/
      MyClass.mdx
    Functions/
      myFunction.mdx
    Types/
      MyType.mdx
    Enums/
      MyEnum.mdx
```

### Embed API fragments in guides

Add the `importer` remark plugin to your Docusaurus config:

```ts
import { importer } from "@docsgen/core";

const config = {
  presets: [
    [
      "classic",
      {
        docs: {
          remarkPlugins: [
            importer({
              packageRoute: "api",
              apiDir: "docs/api",
            }),
          ],
        },
      },
    ],
  ],
};
```

Then use `@import` directives in any MDX file:

```markdown
(@import my-library MyClass type=methods&display=table)

(@import my-library createClient type=parameters&display=table)

(@import my-library MyClass type=properties&display=grid)
```

This renders live, always-up-to-date API fragments directly in your hand-written documentation.

## Documentation

- [Getting Started](https://docs.docsgen.dev/docs/getting-started/installation)
- [Quick Start](https://docs.docsgen.dev/docs/getting-started/quick-start)
- [Configuration](https://docs.docsgen.dev/docs/getting-started/configuration)
- [Importer](https://docs.docsgen.dev/docs/getting-started/importer)
- [Customization](https://docs.docsgen.dev/docs/getting-started/customization)
- [Guides](https://docs.docsgen.dev/docs/guides)

---

## Help us keep working on this project

Sponsoring is an important part of docsgen's growth. We strongly encourage you to help us maintain the project and shape
its future.

- [Become a Sponsor on GitHub](https://github.com/sponsors/prc5)

## How can I support the developers?

- Star our GitHub repo
- Create pull requests, submit bugs, suggest new features or documentation updates
- Spread the word

## Contributing

We welcome contributions of all kinds. Check the
[Contributing Guide](https://github.com/BetterTyped/docsgen/blob/main/Contributing.md), fork the repository, make your
changes, and send a pull request. We will be glad to consider your suggestions.

## License

[Apache-2.0](https://github.com/BetterTyped/docsgen/blob/main/License.md)

## Contact

If you have questions, start a new discussion thread on the
[docsgen GitHub](https://github.com/BetterTyped/docsgen/discussions). For direct inquiries, reach out via email (listed
on our profiles).
