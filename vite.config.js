import { defineConfig } from "vite";

import path from "path";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ["./node_modules/@uswds/uswds/packages"],
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "assets/uswds/img": path.resolve(__dirname, "./node_modules/@uswds/uswds/dist/img"),
      "assets/uswds/fonts": path.resolve(__dirname, "./node_modules/@uswds/uswds/dist/fonts")
    }
  }
});