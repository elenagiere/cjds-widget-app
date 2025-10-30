import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  preview: {
    port: 8889, // <-- sets the preview port
    host: true, // optional: allows access from network
  },
});
