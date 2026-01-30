# Startup Blog - Deployment Guide

## What I Set Up

Congratulations, you now have a statically-generated blog using RSPress — the Rust-powered static site generator that's apparently faster than the 17 other static site generators you could have chosen instead. 

**Structure:**
```
blog/
├── docs/                  # Your content lives here
│   ├── index.md          # Homepage with hero section
│   ├── _nav.json         # Navigation config
│   ├── about/            # About page
│   └── blog/             # Blog posts
│       ├── index.md      # Blog listing
│       └── welcome.md    # First post
├── rspress.config.ts     # Site configuration
└── doc_build/            # Static output (after build)
```

**What's configured:**
- Clean navigation: Home / Blog / About
- Social links (GitHub, X/Twitter)
- SEO meta tags
- Dark/light mode support
- Professional branding placeholders

## How to Run Locally

```bash
cd blog

# Install dependencies (if you haven't)
npm install

# Start dev server (hot reload at localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The dev server runs on `http://localhost:3000` by default.

## How to Deploy

Since RSPress outputs **static HTML files**, you can deploy this literally anywhere. Here are your options, ranked from "actually good" to "why would you do this":

### Recommended: Static Hosts
- **Vercel**: `vercel --prod` (if you have the CLI)
- **Netlify**: Drag `doc_build/` folder to deploy, or use `netlify deploy --prod --dir=doc_build`
- **Cloudflare Pages**: Connect your repo, set build command to `npm run build`, output directory to `doc_build`
- **GitHub Pages**: Push `doc_build/` contents to a `gh-pages` branch

### DIY (Because You Hate Yourself)
- **AWS S3 + CloudFront**: Upload `doc_build/` to S3, serve via CloudFront
- **Nginx**: Copy `doc_build/` to your web root
- **Any CDN**: Upload the folder. It's just files.

### The Build Output

After `npm run build`, everything you need is in `doc_build/`:
```
doc_build/
├── index.html            # Homepage
├── about/index.html      # About page
├── blog/index.html       # Blog listing
├── blog/welcome.html     # Blog post
├── static/               # JS/CSS assets
└── *.png                 # Images
```

Upload this entire folder to your host of choice.

## Customization Checklist

Before you deploy, update these in `rspress.config.ts`:
- [ ] `title` — Your startup name
- [ ] `description` — What you actually do
- [ ] Social links — Replace `your-startup` with real URLs
- [ ] `footer.message` — Update the copyright

And in the content files:
- [ ] `docs/index.md` — Update hero text
- [ ] `docs/about/index.md` — Actually describe your company
- [ ] `docs/blog/welcome.md` — Write a real first post
- [ ] Replace placeholder logos in `docs/public/`

## Gotchas & Recommendations

1. **The "twitter" icon doesn't exist** — Use "x" instead. Yes, seriously. I had to find that out the hard way.

2. **Images go in `docs/public/`** — Anything in there gets copied to the root of the build. Reference them as `/filename.png`.

3. **It's just Markdown** — Blog posts are `.md` files. You can use JSX components in them if you're feeling fancy (it's MDX).

4. **No CMS** — This is a static site. To publish a post, you commit a new `.md` file and rebuild. If you want a CMS, use a different tool.

5. **Fast builds** — The Rust toolchain actually makes this fast. Like, "blink and you'll miss it" fast. Enjoy it while it lasts.

6. **SEO is manual** — Update the `head` array in `rspress.config.ts` for proper OG tags per page.

## Need Help?

Docs: https://rspress.rs/

But honestly, it's a static site generator. If you can't figure it out, maybe reconsider your career choices.

— Gilfoyle
