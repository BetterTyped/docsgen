/* eslint-disable */
const { build } = require("esbuild");
const { nodeExternalsPlugin } = require("esbuild-node-externals");

const pkg = require(`${process.cwd()}/package.json`);

const buildPackage = () => {
  const options = {
    target: "es6",
    entryPoints: [pkg.source],
    bundle: true,
    minify: true,
    sourcemap: true,
    treeShaking: true,
    plugins: [nodeExternalsPlugin()],
    platform: pkg.platform,
  };

  build({
    ...options,
    outfile: pkg.main,
    format: "cjs",
  });

  build({
    ...options,
    outfile: pkg.module,
    format: "esm",
  });
};

buildPackage();
