import path from "node:path";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginLess } from "@rsbuild/plugin-less";

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://api-driver.marsview.cc",
    },
  },
  plugins: [pluginReact(), pluginLess()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
