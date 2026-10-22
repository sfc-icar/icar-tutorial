import { defineConfig } from 'astro/config';

// 公開先: https://icar.sfc.wide.ad.jp/icar-tutorial/
export default defineConfig({
  site: 'https://icar.sfc.wide.ad.jp',
  base: '/icar-tutorial',
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
