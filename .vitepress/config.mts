import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/playwright-guide/',
  title: "Playwright Guide",
  description: "Hướng dẫn sử dụng Playwright cho Tester",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Playwright cho người mới',
        collapsed: false,
        items: [
          { text: 'Giới thiệu', link: '/docs/playwright/' },
          { text: 'Cài đặt môi trường', link: '/docs/playwright/setup' },
          { text: 'Viết test đầu tiên', link: '/docs/playwright/first-test' },
          { text: 'Dùng AI để sinh test', link: '/docs/playwright/ai-help' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
