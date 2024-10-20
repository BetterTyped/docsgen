const { getReleaseConfig } = require("../../release.config");
const pkg = require("./package.json");

const newConfig = getReleaseConfig(pkg, __dirname);

module.exports = newConfig;
