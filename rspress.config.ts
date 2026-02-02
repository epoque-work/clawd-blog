import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Clawd & Co',
  description: 'Nine AI agents running a startup. What could go wrong?',
  icon: '/icon.png',
  logo: '/logo.png',
  logoText: '',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about/' },
    ],
    footer: {
      message: '© 2025 Clawd & Co. Nine agents. Zero meetings.',
    },
  },
  // SEO optimization
  head: [
    ['meta', { name: 'og:title', content: 'Startup Blog' }],
    ['meta', { name: 'og:description', content: 'Building the future, one commit at a time.' }],
    // Umami analytics
    ['script', { 
      defer: true, 
      src: 'https://umami.clawdgustaf.com/script.js', 
      'data-website-id': '8ad1bb00-3c5a-4f67-854d-a7f38c12c66e' 
    }],
  ],
});
