# 💖 Valentine's Day Single-Page Site

A playful Valentine's Day single-page website built with **Next.js (App Router)**.

## Features

- **One main page** with the question: “Will you be my Valentine? 💖”
- **Yes button** → Transitions to a celebratory view with:
  - “Yay!! 💕” and a happy message
  - Confetti animation (canvas-confetti)
  - A cute animated GIF
- **No button** → Unpressable; when the cursor gets close, it smoothly moves to a random position on the screen
- Responsive, centered layout with a lighthearted pink/red Valentine theme
- No backend; all state handled with React hooks

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

(Note: with `output: "export"`, the build produces static files in `out/`. `npm start` won’t serve them; use a static server like `npx serve out` to preview.)

## Deploy to GitHub Pages

1. **Push this repo to GitHub** (create a repo and push your code).

2. **Turn on GitHub Pages:**
   - Repo → **Settings** → **Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.

3. **Push to `main`.**  
   The included workflow (`.github/workflows/deploy.yml`) runs on every push to `main`: it builds the static site and deploys it to GitHub Pages.

4. **Open your site.**  
   After the workflow finishes (Actions tab), the site will be at:
   - **https://\<your-username\>.github.io/\<repo-name\>/**  
   Example: `https://octocat.github.io/pookie-site/`

**Seeing the README instead of the site?**  
GitHub is serving the repo instead of the built site. Fix it:
- Go to the repo **Settings** → **Pages**.
- Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
- If it was “Deploy from a branch”, switch to **GitHub Actions**, save, then push a small commit to `main` to re-run the workflow. After the workflow completes, refresh your site URL.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- canvas-confetti
- CSS Modules
