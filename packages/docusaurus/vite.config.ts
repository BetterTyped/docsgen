import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

const aliases = {
  helpers: resolve(__dirname, "src/helpers"),
  plugin: resolve(__dirname, "src/plugin"),
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
    include: ["src/**/*.spec.{ts,tsx}", "__tests__/**/*.spec.{ts,tsx}"],
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
      ],
    },
  },
});
