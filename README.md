# SoftMind Solutions — Portfolio

A full-stack portfolio and studio website for **SoftMind Solutions**, a design & development studio that builds high-converting websites, apps, and brands. Built with React 19, Node.js/Express, and MongoDB.

---

## Features

- 3D interactive hero background and tech sphere (React Three Fiber + Three.js)
- Smooth page transitions and scroll animations (Framer Motion + GSAP)
- Command palette (Cmd/Ctrl + K) for keyboard-driven navigation
- Theme toggle (dark / light)
- Projects showcase with category filtering, fetched from MongoDB
- Contact form that sends email notifications via Gmail SMTP
- Animated cursor, scroll progress bar, and loading screen
- Rate-limited API (5 req/15 min on contact, 100 req/15 min general)
- Admin-protected project management (no JWT — secret header)
- Fully responsive layout

---

## Tech Stack

### Frontend (`web/`)
| Layer | Library / Tool |
|---|---|
| Framework | React 19 |
| Build tool | Vite 6 |
| Routing | React Router v7 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| UI primitives | Radix UI (Dialog, Label, Tooltip, Separator, Slot) |
| Component variants | class-variance-authority, clsx, tailwind-merge |
| 3D rendering | Three.js, React Three Fiber, React Three Drei |
| Animations | Framer Motion, GSAP |
| Server state | TanStack Query v5 |
| Client state | Zustand v5 |
| HTTP client | Axios |
| Forms | React Hook Form + Zod |
| Notifications | Sonner |
| Icons | Lucide React |
| Command palette | cmdk |
| Linting | ESLint 9 |
| Formatting | Prettier + prettier-plugin-tailwindcss |

### Backend (`api/`)
| Layer | Library / Tool |
|---|---|
| Runtime | Node.js (ESM) |
| Framework | Express.js 4 |
| Database | MongoDB + Mongoose 8 |
| Email | Nodemailer (Gmail SMTP) |
| Validation | express-validator |
| Rate limiting | express-rate-limit |
| CORS | cors |
| Config | dotenv |
| Dev server | nodemon |

### Infrastructure
| Service | Purpose |
|---|---|
| MongoDB Atlas | Database (M0 free tier) |
| Vercel | Frontend hosting |
| Render | Backend hosting |

---

## Prerequisites

- **Node.js** v18+ and **npm** v9+
- **MongoDB** running locally (`mongod`) **or** a MongoDB Atlas connection string
- A **Gmail account** with 2-Step Verification and an App Password for email

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/wahajhafeez/alvito-portfolio.git
cd alvito-portfolio
```

### 2. Install all dependencies

```bash
# Root (concurrently runner)
npm install

# Backend
cd api && npm install && cd ..

# Frontend
cd web && npm install && cd ..
```

### 3. Configure environment variables

**Backend** — copy and fill in `api/.env`:

```bash
cp api/.env.example api/.env
```

**Frontend** — copy and fill in `web/.env`:

```bash
cp web/.env.example web/.env
```

See the [Environment Variables](#environment-variables) section below for details.

### 4. Start the development servers

```bash
npm run dev
```

This starts both servers concurrently:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

---

## Environment Variables

### Backend — `api/.env`

```env
# Server
NODE_ENV=development
PORT=5000

# MongoDB
MONGODB_URI=mongodb://localhost:27017/portfolio
# For Atlas: mongodb+srv://<user>:<pass>@cluster.mongodb.net/portfolio

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Gmail SMTP — generate an App Password at myaccount.google.com/apppasswords
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx

# Admin secret for POST/DELETE /api/projects
ADMIN_SECRET=change-me-in-production
```

### Frontend — `web/.env`

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_ADMIN_SECRET=change-me-in-production   # Must match api ADMIN_SECRET
```

> **Gmail App Password setup:**
> 1. Enable 2-Step Verification on your Google account
> 2. Go to `myaccount.google.com/apppasswords`
> 3. Generate an App Password for "Mail"
> 4. Paste the 16-character password as `GMAIL_APP_PASSWORD`

---

## Available Scripts

### Root
```bash
npm run dev        # Start both api and web concurrently
npm run dev:api    # Start backend only
npm run dev:web    # Start frontend only
npm run build      # Build frontend for production
npm run seed       # Seed MongoDB with sample projects
```

### Frontend (`cd web`)
```bash
npm run dev        # Vite dev server → http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint
```

### Backend (`cd api`)
```bash
npm run dev        # nodemon (auto-restart on changes)
npm start          # node (production)
npm run seed       # Seed projects into MongoDB
```

---

## Project Structure

```
alvito-portfolio/
├── package.json              # Root scripts (concurrently)
│
├── api/                      # Express.js backend
│   ├── .env.example
│   ├── package.json
│   └── src/
│       ├── server.js         # Entry point → connects DB → starts Express
│       ├── app.js            # CORS, rate limiting, routes, error handler
│       ├── config/
│       │   ├── env.js        # All env vars loaded here
│       │   └── database.js   # Mongoose connection
│       ├── controllers/
│       │   ├── projectController.js
│       │   └── contactController.js
│       ├── middlewares/
│       │   ├── errorHandler.js
│       │   └── rateLimit.js
│       ├── models/
│       │   ├── Project.js
│       │   └── Contact.js
│       ├── routes/
│       │   ├── index.js
│       │   ├── projectRoutes.js
│       │   └── contactRoutes.js
│       ├── services/
│       │   └── emailService.js   # Nodemailer Gmail SMTP
│       ├── utils/
│       │   └── ApiError.js
│       └── scripts/
│           └── seedProjects.js
│
└── web/                      # React 19 frontend
    ├── .env.example
    ├── index.html
    ├── vite.config.js
    ├── components.json       # ShadCN config
    └── src/
        ├── main.jsx          # Entry → QueryClientProvider → App
        ├── App.jsx
        ├── routes.jsx        # React Router v7 routes + AnimatePresence
        ├── index.css         # Tailwind v4 config + design tokens
        ├── components/
        │   ├── three/        # FloatingObjects (hero bg), TechSphere
        │   ├── sections/     # Hero, About, Skills, Timeline, Projects, Contact…
        │   ├── common/       # AnimatedCursor, CommandPalette, ProjectCard/Modal…
        │   └── layout/       # Navbar, Footer, Layout
        ├── constants/        # Static data: skills, experience, navigation…
        ├── hooks/            # Custom hooks (TanStack Query + Zustand)
        ├── lib/              # axios.js, queryClient.js, utils.js
        ├── pages/            # Home, About, Projects, Experience, Contact…
        ├── services/         # Axios API call functions
        └── store/
            └── uiStore.js    # Zustand: theme, loading, command palette, filter
```

---

## API Reference

Base URL: `http://localhost:5000/api`

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/health` | None | Health check |
| `GET` | `/api/projects` | None | List projects. Query: `?category=fullstack&featured=true` |
| `POST` | `/api/projects` | `x-admin-secret` header | Create a project |
| `DELETE` | `/api/projects/:id` | `x-admin-secret` header | Delete a project |
| `POST` | `/api/contact` | None | Submit contact form → sends email |

**Rate limits:**
- Contact form: 5 requests per 15 minutes
- All other routes: 100 requests per 15 minutes

---

## Build & Production

### Frontend

```bash
cd web
npm run build     # Outputs to web/dist/
npm run preview   # Test the production build locally
```

### Deployment

| Service | Directory | Build command | Start command |
|---|---|---|---|
| **Vercel** (frontend) | `web/` | `npm run build` | — (output: `dist/`) |
| **Render** (backend) | `api/` | `npm install` | `node src/server.js` |

**Vercel env vars:**
```
VITE_API_BASE_URL=https://your-render-api.onrender.com/api
VITE_ADMIN_SECRET=your-production-secret
```

**Render env vars:** all values from `api/.env.example` with production values, plus `MONGODB_URI` pointing to MongoDB Atlas.

---

## Troubleshooting

**API not reachable from frontend**
- Check `VITE_API_BASE_URL` in `web/.env` matches the port in `api/.env` (`PORT`).
- Both default to port `5000`; make sure nothing else is using it.

**MongoDB connection error**
- For local MongoDB, ensure `mongod` is running (`Get-Service MongoDB` on Windows).
- For Atlas, whitelist your IP in Atlas → Network Access.

**Emails not sending**
- Confirm 2-Step Verification is enabled on the Gmail account.
- Use an **App Password**, not your regular Gmail password.
- Check `GMAIL_USER` and `GMAIL_APP_PASSWORD` are set correctly in `api/.env`.

**Port already in use**
```bash
# Windows — find and kill the process on port 5000
Get-NetTCPConnection -LocalPort 5000 | Select-Object OwningProcess
Stop-Process -Id <PID> -Force
```

**Vite not found after install**
- Run `npm install` inside the `web/` directory specifically, not just the root.
