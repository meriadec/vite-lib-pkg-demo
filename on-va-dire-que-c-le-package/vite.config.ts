import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "on-va-dire-que-c-le-package",
      formats: ["es"],
      fileName: "index",
    },
  },
  plugins: [dts()],
});
