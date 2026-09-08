import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages project site: https://zenithblue-dev.github.io/nativecode-ai/
// Served under the /nativecode-ai subpath, so `base` is required. All
// in-page asset URLs are relative (no leading slash). `dist/` uploads to
// Pages as-is.
export default defineConfig({
  site: "https://zenithblue-dev.github.io/nativecode-ai",
  base: "/nativecode-ai",
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
