# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
# Start both api (port 5000) and web (port 5173) concurrently
npm run dev

# Start individually
npm run dev:api
npm run dev:web

# Seed MongoDB with initial projects
npm run seed
```

### Frontend only
```bash
cd web
npm run dev       # Vite dev server
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run lint      # ESLint
```

### Backend only
```bash
cd api
npm run dev       # nodemon src/server.js
npm start         # node src/server.js (production)
npm run seed      # Seed projects into MongoDB
```

## Environment Setup

### Backend (`api/.env`)
Copy `api/.env.example` to `api/.env` and fill in:
```
MONGODB_URI=mongodb+srv://...   # MongoDB Atlas connection string
GMAIL_USER=wasifhafeez26@gmail.com
GMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx   # 16-char Google App Password
ADMIN_SECRET=your-secret                  # For POST/DELETE /api/projects
FRONTEND_URL=http://localhost:5173
```

**Gmail App Password setup:**
1. Enable 2-Step Verification on Google Account
2. Go to myaccount.google.com/apppasswords
3. Generate App Password for "Mail"
4. Use the 16-character password as `GMAIL_APP_PASSWORD`

### Frontend (`web/.env`)
Copy `web/.env.example` to `web/.env`:
```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_ADMIN_SECRET=your-secret   # Must match api ADMIN_SECRET
```

## Architecture

### Monorepo Structure
```
portfolio/
├── api/          # Express.js + MongoDB backend
├── web/          # React 19 + Vite frontend
└── package.json  # Root scripts (concurrently)
```

### Backend (`api/`)
- **Entry:** `src/server.js` → connects MongoDB → starts Express
- **App config:** `src/app.js` — CORS, rate limiting, routes, error handler
- **Pattern:** `routes → controllers → models/services`
- **Config:** All env vars loaded in `src/config/env.js`
- **Email:** NodeMailer Gmail SMTP in `src/services/emailService.js` — sends notification to wasifhafeez26@gmail.com + auto-reply to sender
- **Auth:** `x-admin-secret` header required for POST/DELETE `/api/projects` (no JWT)
- **Rate limiting:** Contact form: 5 per 15 min; general: 100 per 15 min

**API Endpoints:**
- `GET /health` — health check
- `GET /api/projects?category=fullstack&featured=true` — list projects
- `POST /api/projects` — create project (requires x-admin-secret header)
- `DELETE /api/projects/:id` — delete project (requires x-admin-secret header)
- `POST /api/contact` — submit contact form → sends email

### Frontend (`web/src/`)
- **Entry:** `main.jsx` → QueryClientProvider → App → AppRoutes
- **Routing:** React Router v7 (`src/routes.jsx`) with 5 routes + AnimatePresence transitions
- **State:** Zustand (`src/store/uiStore.js`) for theme, loading, command palette, active filter. Only `theme` is persisted.
- **Server state:** TanStack Query v5 via custom hooks (`useProjects`, `useContact`)
- **API:** Axios instance in `src/lib/axios.js` with `VITE_API_BASE_URL` base URL
- **Styling:** Tailwind CSS v4 — all config lives in `src/index.css` (NO `tailwind.config.js`). Uses `@tailwindcss/vite` plugin.
- **ShadCN:** `components.json` configured for new-york style, no TSX, CSS variables

**Key directories:**
- `components/three/` — React Three Fiber: FloatingObjects (hero bg), TechSphere (skills)
- `components/sections/` — Page section components (Hero, About, Skills, Timeline, Projects, Contact)
- `components/common/` — Shared UI: AnimatedCursor, LoadingScreen, CommandPalette, ProjectCard/Modal
- `components/layout/` — Navbar, Footer, Layout (wraps all pages)
- `constants/` — Static data: skills, experience timeline, navigation links
- `hooks/` — Custom hooks wrapping TanStack Query + Zustand
- `services/` — Axios API call functions

**Page structure:**
- `/` — Home (HeroSection + featured ProjectsSection)
- `/about` — AboutSection + SkillsSection (3D sphere)
- `/projects` — Full ProjectsSection with category filter
- `/experience` — TimelineSection (alternating layout)
- `/contact` — ContactSection (form → POST /api/contact)

## Design System
- **Primary:** `#6366f1` (Indigo), **Accent:** `#06b6d4` (Cyan)
- **Background dark:** `#080810`
- **Glassmorphism:** `.glass` utility = `backdrop-filter: blur(20px)` + semi-transparent bg
- **Fonts:** Space Grotesk (headings), Inter (body), JetBrains Mono (code) via Google Fonts
- **Theme toggle:** Adds/removes `.light` class on `<html>` — controlled by `useTheme` hook

## Deployment

| Service | Directory | Notes |
|---------|-----------|-------|
| Vercel (frontend) | `web/` | Build: `npm run build`, Output: `dist` |
| Render (backend) | `api/` | Build: `npm install`, Start: `node src/server.js` |
| MongoDB Atlas | — | M0 free tier; set MONGODB_URI in Render env vars |

**Vercel env vars:** `VITE_API_BASE_URL=https://your-render-api.onrender.com/api`
**Render env vars:** All vars from `api/.env.example` with production values
