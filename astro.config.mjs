import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://site03.360winspt.com",
  integrations: [sitemap()],
});
