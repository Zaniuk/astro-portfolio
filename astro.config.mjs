import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  base: "/",
  site: "https://test-portfolio.zaniuk.tech",
  integrations: [tailwind(), sitemap({
    changefreq: "weekly",
    priority: 0.7,
    lastmod: new Date(),
    entryLimit: 10000
  }), robotsTxt(), react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});
