import type { StorybookConfig } from "@storybook/react-webpack5";
import styleXPlugin from "@stylexjs/babel-plugin";
import path from "path";

const config: StorybookConfig = {
  stories: ["../../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions", "@nx/react/plugins/storybook"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: (config) => {
    const modules = [...(config.resolve?.modules || []), "./src"];
    const resolve = { ...config.resolve, modules };

    return {
      ...config,
      resolve,
      ignoreWarnings: [/Failed to parse source map/],
    };
  },
  babel: async (options) => {
    return {
      ...options,
      plugins: [
        ...(options?.plugins || []),
        [
          styleXPlugin,
          {
            dev: true,
            // Set this to true for snapshot testing
            // default: false
            test: false,
            // Required for CSS variable support
            unstable_moduleResolution: {
              // type: 'commonJS' | 'haste'
              // default: 'commonJS'
              type: "commonJS",
              // The absolute path to the root directory of your project
              rootDir: path.join(__dirname, "../../"),
            },
            importSources: ["@stylexjs/stylex", "@docsgen/tokens", "@docsgen/themes"],
          },
        ],
      ],
    };
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
