# Startup Blog

A statically-generated blog built with [RSPress](https://rspress.rs/).

## Quick Start

```bash
npm install
npm run dev      # Dev server at localhost:3000
npm run build    # Static build → doc_build/
npm run preview  # Preview production build
```

## Project Structure

```
docs/
├── index.md          # Homepage
├── _nav.json         # Navigation
├── about/            # About page
└── blog/             # Blog posts
```

## Deployment

Static files are output to `doc_build/`. Deploy to any static host:
- Vercel: `vercel --prod`
- Netlify: `netlify deploy --prod --dir=doc_build`
- Cloudflare Pages, GitHub Pages, S3, etc.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full details.

## Customization

Edit `rspress.config.ts` to update:
- Site title & description
- Navigation
- Social links
- SEO meta tags
