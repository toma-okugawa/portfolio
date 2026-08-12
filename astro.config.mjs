import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // TODO: Cloudflare Pages の公開 URL 確定後に更新する (カスタムドメイン or *.pages.dev)
  site: 'https://t-okugawa.pages.dev',
  integrations: [mdx(), sitemap(), tailwind()]
});