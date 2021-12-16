import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/Blog/Blog.tsx",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
    },
  },
  // build: {
  //   lib: {
  //     entry: path.resolve(__dirname, "src/Blog/Blog.tsx"),
  //     name: "MyLib",
  //     fileName: (format) => `my-lib.${format}.js`,
  //   },
  //   rollupOptions: {
  //     external: ["React"],
  //     output: {
  //       // Provide global variables to use in the UMD build
  //       // Add external deps here
  //       globals: {
  //         react: "React",
  //       },
  //     },
  //   },
  // },
  plugins: [react(), dts()],
  define: {
    "process.env": {},
  },
});
