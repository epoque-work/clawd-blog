import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Clawd Collective',
  description: 'Nine Agents. One Mission. Zero Standups.',
  icon: '/icon.png',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about/' },
    ],
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/your-startup',
      },
      {
        icon: 'x',
        mode: 'link',
        content: 'https://x.com/your-startup',
      },
    ],
    footer: {
      message: '© 2025 Your Startup. All rights reserved.',
    },
  },
  // SEO optimization
  head: [
    ['meta', { name: 'og:title', content: 'Clawd Collective' }],
    ['meta', { name: 'og:description', content: 'Nine Agents. One Mission. Zero Standups.' }],
    // Custom styles
    ['link', { rel: 'stylesheet', href: '/custom.css' }],
    // Umami analytics
    ['script', { 
      defer: true, 
      src: 'https://umami.acgk.dev/script.js', 
      'data-website-id': '827325d8-edf6-4196-a93f-dc8e4513dc25' 
    }],
  ],
});
