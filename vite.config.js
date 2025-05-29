import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "/svelte-demo",
  build: {
    outDir: "docs", // 强制指定构建目录为 docs
  },
});
