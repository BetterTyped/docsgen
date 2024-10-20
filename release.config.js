const getReleaseConfig = (pkg, dirname) => {
  const tagName = pkg.name.split("/")[1];
  return {
    // We want to publish only single release notes for the core package release config
    publish: "@semantic-release/npm",
    success: false,
    fail: false,
    tagFormat: tagName + "-v${version}",
    commitPaths: [`${dirname}/*`],
    branches: [
      {
        name: "main",
      },
      {
        name: "beta",
        prerelease: true,
      },
      {
        name: "alpha",
        prerelease: true,
      },
    ],
    release: {
      plugins: [
        [
          "@semantic-release/commit-analyzer",
          {
            releaseRules: [
              {
                scope: "no-release",
                release: false,
              },
              {
                breaking: true,
                release: "major",
              },
              {
                type: "feat",
                release: "minor",
              },
              {
                type: "refactor",
                scope: "core-*",
                release: "minor",
              },
              {
                type: "*",
                release: "patch",
              },
            ],
          },
        ],
        "@semantic-release/release-notes-generator",
        "@semantic-release/npm",
        [
          "@semantic-release/git",
          {
            assets: [`${dirname}/package.json`, `${dirname}/CHANGELOG.md`],
            message:
              `release(version): Release ${pkg.name} ` + "${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
          },
        ],
      ],
    },
  };
};

module.exports = {
  getReleaseConfig,
};
