import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

const aliases = {
  types: resolve(__dirname, "src/types"),
  pages: resolve(__dirname, "src/pages"),
  plugin: resolve(__dirname, "src/plugin"),
  importer: resolve(__dirname, "src/importer"),
  constants: resolve(__dirname, "src/constants"),
  helpers: resolve(__dirname, "src/helpers"),
  docs: resolve(__dirname, "src/docs"),
  parsing: resolve(__dirname, "src/parsing"),
  snapshots: resolve(__dirname, "src/snapshots"),
};

const aliasKeys = Object.keys(aliases);

export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: "./tsconfig.json" })],
  resolve: { alias: aliases },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
    },
    rollupOptions: {
      external: (id) => {
        if (id.startsWith(".") || id.startsWith("/")) return false;
        if (aliasKeys.some((key) => id === key || id.startsWith(`${key}/`))) return false;
        return true;
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.spec.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["lcov", "clover", "json", "text"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "**/*.spec.*",
        "**/__tests__/**",
        "**/__stories__/**",
        "**/__mocks__/**",
        "**/types/**",
        "**/constants/**",
        "**/index.ts",
        "**/__snapshots__/**",
      ],
    },
  },
});
