# Valentine's Day Single-Page Site

A playful Valentine's Day single-page website built with **Next.js (App Router)**.

Deployed at: https://aaksay1.github.io/pookie-site/
## Features

- **One main page** with the question: “Will you be my Valentine? 💖”
- **Yes button** → Transitions to a celebratory view with:
  - “Yay!!” and a happy message
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

## Build

```bash
npm run build
npm start
```

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- canvas-confetti
- CSS Modules
