import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  build: {
    minify: "terser",
    rollupOptions: { treeshake: "recommended" },
  },
});
