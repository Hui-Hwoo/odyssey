## [Hwoo](https://hwoo.me)

Personal website of Hwoo. Built with **React 18 + TypeScript + Vite**.

### Develop

```bash
npm install     # install dependencies
npm run dev     # start local dev server at http://localhost:3000
```

### Build & preview

```bash
npm run build   # type-check + production build into build/
npm run preview # serve the production build locally
```

### Deploy

Deployment is **fully automated** via GitHub Actions. Every push to `main`
builds the site and publishes it to GitHub Pages at [hwoo.me](https://hwoo.me)
(see `.github/workflows/deploy.yml`). Pull requests run a type-check + build
check (`.github/workflows/ci.yml`).

> One-time setup: in the repo's **Settings → Pages**, set **Source** to
> **GitHub Actions**. The custom domain is kept via `public/CNAME`.

### Environment variables

Secrets are **not** committed. Copy `.env.example` to `.env` and fill in values
if you wire up the offline Notion data script (`npm run parse`). The deployed
site reads no secrets at runtime.

### References

-   [Template](https://alshedivat.github.io/al-folio/projects/)
-   [SPA on GitHub Pages](https://github.com/rafgraph/spa-github-pages)
