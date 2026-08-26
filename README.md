# Vikas Rathod Portfolio

A React + Vite portfolio site showcasing Python, LLM, conversational AI, and automation work with animated sections and Three.js visuals.

## View locally

```bash
npm install
npm run dev -- --host 0.0.0.0
```

After the dev server starts, open the local URL printed by Vite, usually:

- http://localhost:5173/


## 24/7 live deployment

This repo includes a GitHub Pages workflow that builds and publishes the static portfolio whenever changes are pushed to GitHub.

Expected live URL after a successful deployment:

- https://vikas-8262.github.io/VBR_PortFolio/

To make the portfolio visible 24/7:

1. Push this repository to GitHub.
2. Open the repository settings in GitHub.
3. Go to **Pages**.
4. Set **Build and deployment** source to **GitHub Actions**.
5. Push this branch to GitHub. The workflow is configured to run on every branch push, so you do not have to wait for a merge before deploying.
6. Open the live URL shown in the completed **Deploy portfolio to GitHub Pages** workflow.

If https://vikas-8262.github.io/VBR_PortFolio/ still shows GitHub's 404 page, the repository has not published a Pages deployment yet. Check the repository's **Actions** tab and rerun the **Deploy portfolio to GitHub Pages** workflow after enabling GitHub Pages with **GitHub Actions** as the source.

The deployment workflow builds with `VITE_BASE_PATH=/VBR_PortFolio/` so assets resolve correctly at the GitHub Pages project URL. Local builds use a relative asset base by default for previews and custom domains.

## Production preview

```bash
npm run build
npm run preview -- --host 0.0.0.0
```

Vite will print the preview URL in the terminal.

## Available scripts

- `npm run dev` - start the Vite development server.
- `npm run build` - create a production build.
- `npm run preview` - serve the production build locally.
- `npm run lint` - run Oxlint checks.
