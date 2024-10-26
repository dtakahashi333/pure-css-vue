// References:
// - https://blog.ridaeh.com/getting-started-creating-a-vue-3-components-library-with-vite-%EF%B8%8F-a670618dab54
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // tell the build process to treat this project as library
      entry: path.resolve(__dirname, "src/index.js"),
      name: "PureCSSVue",
      fileName: "pure-css-vue",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
