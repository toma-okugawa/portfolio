import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://t-okugawa.dev',
  build: {
    // すべてのCSSをHTMLにインライン化する。外部CSS 2本(約45KB)がレンダリングをブロックし、
    // モバイルの FCP/LCP を約1.8秒遅らせていた(Lighthouse 2026-08-28)。
    inlineStylesheets: 'always',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ja: 'ja' },
      },
    }),
    tailwind(),
  ],
});