<h1 align="center">

  <img src="../../documentation/static/branding/icon-white.svg" width="260px" />

</h1>

<div align="center">

# @docsgen/core

**The engine behind docsgen. TypeDoc-powered generation pipeline, React page templates, and the `@import` remark plugin.**

**[Documentation](https://bettertyped.github.io/docsgen/) |
[Quick Start](https://bettertyped.github.io/docsgen/docs/getting-started/quick-start) |
[Guides](https://bettertyped.github.io/docsgen/docs/guides)**

[![npm](https://img.shields.io/npm/v/@docsgen/core)](https://www.npmjs.com/package/@docsgen/core)
[![downloads](https://img.shields.io/npm/dm/@docsgen/core)](https://www.npmjs.com/package/@docsgen/core)
[![license](https://img.shields.io/npm/l/@docsgen/core)](https://github.com/BetterTyped/docsgen/blob/main/License.md)

</div>

## About

`@docsgen/core` is the foundation of the docsgen ecosystem. It parses your TypeScript source code with TypeDoc,
transforms the reflections into structured React page templates, and writes MDX files that Docusaurus can serve as
beautiful API documentation. It also provides the `importer` remark plugin that lets you embed live API fragments in
hand-written guides.

## Key Capabilities

- **TypeDoc parsing pipeline** - Runs TypeDoc on your entry points and produces a JSON reflection of every exported
  symbol: classes, functions, types, enums, variables, and React components
- **Structured MDX output** - Generates one MDX page per symbol, organized into category folders (Classes, Functions,
  Types, Enums), with full parameter tables, return types, method lists, signatures, and JSDoc examples
- **`@import` remark plugin** - Embed live API fragments (method tables, parameter lists, type definitions, signatures)
  directly inside hand-written MDX files. They regenerate on every build, so guides never go stale
- **Per-kind page templates** - Dedicated React templates for each symbol kind: `ClassPage`, `FunctionPage`,
  `ComponentPage`, `TypePage`, `EnumPage`, `VarPage`, and `DefaultPage`, each with toggleable sections
- **Full customization** - Override any page template with a custom React renderer, control which sections appear, remap
  file names and categories, and filter symbols with `exclude` predicates
- **Monorepo support** - Generate docs for multiple packages in one pass with per-package configuration, optional index
  pages, and shared options
- **Watch mode** - TypeDoc regenerates on source changes during development

## Quick Start

```bash
npm install @docsgen/core
```

### Generation

The `generate` function runs the full pipeline: TypeDoc parsing, page rendering, and MDX writing.

```ts
import { generate } from "@docsgen/core";

await generate(context, {
  id: "api",
  outDir: "docs/api",
  packages: [
    {
      title: "my-library",
      dir: "../packages/my-library",
      entryPath: "src/index.ts",
    },
  ],
});
```

### Importer

The `importer` function returns a remark plugin that resolves `@import` directives in MDX files:

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

Then use `@import` in any MDX file:

```markdown
(@import my-library MyClass type=methods&display=table)

(@import my-library createClient type=parameters&display=table)

(@import my-library MyType type=definition)
```

### Available `@import` content types

| Type             | Description                              |
| ---------------- | ---------------------------------------- |
| `definition`     | Complete type/class definition           |
| `npm`            | npm install command                      |
| `import`         | Import statement                         |
| `details`        | Detailed symbol information              |
| `description`    | JSDoc description                        |
| `generics`       | Generic type parameters                  |
| `method`         | Single method (use `name=` to select)    |
| `methods`        | All methods table                        |
| `name`           | Symbol name                              |
| `parameter`      | Single parameter (use `name=` to select) |
| `parameters`     | All parameters table                     |
| `preview`        | Brief symbol preview                     |
| `property`       | Single property (use `name=` to select)  |
| `properties`     | All properties                           |
| `returns`        | Return type information                  |
| `returnsPreview` | Brief return type preview                |
| `signature`      | Function/method signature                |
| `sources`        | Source file information                  |
| `type`           | Type information                         |

Display modes: `table`, `grid`, `block`.

## Page Templates

Each symbol kind gets a dedicated page with relevant sections:

| Page            | Sections                                                                                       |
| --------------- | ---------------------------------------------------------------------------------------------- |
| `ClassPage`     | Name, Description, Sources, Import, Definition, Npm, Parameters, Properties, Methods, Examples |
| `ComponentPage` | Intro, Usage, Props (Preview + Parameters)                                                     |
| `FunctionPage`  | Intro, Usage, Parameters, Returns                                                              |
| `TypePage`      | Intro, Preview, Structure                                                                      |
| `EnumPage`      | Intro, Preview                                                                                 |
| `VarPage`       | Intro, Preview, Structure                                                                      |
| `DefaultPage`   | Intro, Preview, Structure                                                                      |

Every section can be toggled on/off or replaced with a custom React renderer via `PluginOptions.pages`.

## Configuration

### `PluginOptions`

| Option            | Type                      | Description                          |
| ----------------- | ------------------------- | ------------------------------------ |
| `id`              | `string`                  | Unique plugin instance identifier    |
| `outDir`          | `string`                  | Output directory for generated files |
| `packages`        | `PackageOptions[]`        | Array of packages to document        |
| `generateMdx`     | `boolean`                 | Generate MDX files (default: `true`) |
| `tsConfigPath`    | `string`                  | Path to tsconfig                     |
| `typeDocOptions`  | `Partial<TypeDocOptions>` | TypeDoc configuration overrides      |
| `watch`           | `boolean`                 | Enable watch mode                    |
| `addMonorepoPage` | `boolean`                 | Generate monorepo index page         |
| `addPackagePage`  | `boolean`                 | Generate per-package index pages     |
| `logLevel`        | `LogLevel`                | Logging verbosity                    |
| `pages`           | `PagesOptions`            | Per-kind page template overrides     |

### `PackageOptions`

| Option                 | Type                 | Description                     |
| ---------------------- | -------------------- | ------------------------------- |
| `title`                | `string`             | Package display name            |
| `dir`                  | `string`             | Path to the package directory   |
| `entryPath`            | `string \| string[]` | Entry point file(s)             |
| `showImports`          | `boolean`            | Show import statements on pages |
| `orderCategories`      | `string[]`           | Category sidebar order          |
| `excludeCategories`    | `string[]`           | Categories to exclude           |
| `additionalCategories` | `object[]`           | Extra categories to add         |
| `fileNameMapper`       | `function`           | Custom file name mapping        |
| `nameMapper`           | `function`           | Custom display name mapping     |
| `kindMapper`           | `function`           | Custom kind/category mapping    |
| `exclude`              | `function`           | Predicate to filter symbols     |

## Documentation

- [Getting Started](https://bettertyped.github.io/docsgen/docs/getting-started/installation)
- [Configuration](https://bettertyped.github.io/docsgen/docs/getting-started/configuration)
- [Importer](https://bettertyped.github.io/docsgen/docs/getting-started/importer)
- [Customization](https://bettertyped.github.io/docsgen/docs/getting-started/customization)
- [Guides](https://bettertyped.github.io/docsgen/docs/guides)

## License

[Apache-2.0](https://github.com/BetterTyped/docsgen/blob/main/License.md)
