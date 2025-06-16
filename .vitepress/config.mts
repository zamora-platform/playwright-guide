import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/playwright-guide/',
  title: 'Playwright Guide',
  description: 'Hướng dẫn sử dụng Playwright cho Tester',
  head: [['link', { rel: 'icon', href: '/playwright-guide/favicon.ico' }]],

  themeConfig: {
    logo: '/img/logo.png',

    nav: [
      { text: 'Trang chủ', link: '/' },
      { text: 'Tài nguyên', link: '/docs/playwright/resources' },
    ],

    sidebar: [
      {
        text: 'Playwright cho người mới',
        collapsed: false,
        items: [
          { text: '🎭 Giới thiệu', link: '/docs/playwright/' },
          { text: '⚙️ Cài đặt môi trường', link: '/docs/playwright/setup' },
          { text: '✍️ Viết test đầu tiên', link: '/docs/playwright/first-test' },
          { text: '🤖 Dùng AI để tạo test', link: '/docs/playwright/ai-assist' },
          { text: '🎯 Các selector thường gặp', link: '/docs/playwright/selectors' },
        ]
      }
    ],

    footer: {
      message: 'Hướng dẫn dành cho người mới học Playwright',
      copyright: 'Bản quyền © 2025 Zamora Platform',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zamora-platform/playwright-guide' }
    ],
  }
})
