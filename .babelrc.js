const styleXPlugin = require("@stylexjs/babel-plugin");

module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
  plugins: [
    [
      styleXPlugin,
      {
        // We use the babelrc only for testing
        test: true,
        // Required for CSS variable support
        unstable_moduleResolution: {
          // type: 'commonJS' | 'haste'
          // default: 'commonJS'
          type: "commonJS",
          // The absolute path to the root directory of your project
          rootDir: __dirname,
        },
      },
    ],
  ],
};
