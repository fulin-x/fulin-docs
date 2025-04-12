import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

const vitePressConfigs = {
  title: "伏麟的个人文档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: '目录',
    outline: [2, 3],
    logo: '/logo.svg',
    nav: [
      {
        text: '主页',
        items: [
          {
            text: 'Github',
            link: 'https://github.com/fulin-x'
          }
        ]
      }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fulin-x' }
    ],

    footer: {
      copyright: 'Copyright © 2025-present Fulin'
    }
  }
};

const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  documentRootPath: '/',
  collapsed: false,
  capitalizeFirst: true
};

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withSidebar(vitePressConfigs, vitePressSidebarOptions)
);
