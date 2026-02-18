# Clinic Lina - Dental Clinic Website

## Overview

Clinic Lina is a multi-page dental clinic marketing website for a practice based in Istanbul, Turkey. It features bilingual support (English and Bulgarian), showcasing dental services (implants, Hollywood smile, zirconium crowns, All-on-4, All-on-6, etc.), doctor profiles, award display, certificates, VIP services, a Before & After gallery, contact information, and an AI-powered Smile Preview tool.

The app follows a full-stack TypeScript monorepo pattern with a React frontend and Express backend, using PostgreSQL for data storage.

## Recent Changes (Feb 2026)

- Rebuilt as multi-page application with bilingual routing (EN/BG)
- Added Before & After gallery page, Contact page
- Added 3 doctor profiles with photos, Golden Angel award section, certificates section, VIP services
- Integrated Zoho consultation form (iframe) throughout site
- Removed Smile Preview (AI) page per user request
- Restructured homepage for lead generation: Award as hero banner, results strip, trust badges, SEO meta tags
- WhatsApp-only contact (no email, no social media widgets)
- Different WhatsApp/phone numbers per language (EN: +90 531 432 30 44, BG: +90 538 257 16 07)
- Content centralized in `client/src/lib/content.ts` for both languages
- Added SEO meta tags (title, description, Open Graph, canonical)

## User Preferences

- Preferred communication style: Simple, everyday language
- WhatsApp-only contact method (no email, no social media)
- 3 doctors: Dr. Tahir Ozcelik (anxiety), Dr. Emin Ashi (aesthetic/Hollywood), Dr. Burak Sonmez (implants)
- Zoho consultation form iframe ID: czNoOagw30bend6LJMEJk7GL5QXWNEnxrWx9lCpzprE

## Project Architecture

### Page Structure & Routing
- `/` — English Home (hero + form, award showcase, results strip, services, doctors, certificates, journey timeline, CTA)
- `/before-after` — English gallery page
- `/contact` — English contact page (info cards, form, map)
- `/thank-you` — English thank you / conversion tracking page
- `/bg` — Bulgarian Home
- `/bg/before-after` — Bulgarian gallery page
- `/bg/contact` — Bulgarian contact page
- `/bg/thank-you` — Bulgarian thank you page

### Key Components
- `client/src/components/Navbar.tsx` — Responsive navbar with language switching, WhatsApp button
- `client/src/components/Footer.tsx` — Site footer with links, contact info
- `client/src/components/ServiceIcon.tsx` — Icon mapping for dental services
- `client/src/lib/content.ts` — All bilingual content (doctors, services, gallery, contact info, translations)

### Monorepo Structure
- **`client/`** — React frontend (SPA)
- **`server/`** — Express backend (API server)
- **`shared/`** — Shared types, schemas, and route definitions

### Frontend (`client/src/`)
- **Framework**: React with TypeScript, built with Vite
- **Routing**: `wouter` (lightweight client-side router)
- **State/Data Fetching**: `@tanstack/react-query` for server state management
- **UI Components**: shadcn/ui (new-york style) with Radix UI primitives, styled with Tailwind CSS
- **Animations**: `framer-motion` for page transitions and scroll animations
- **Icons**: `lucide-react`
- **Fonts**: Inter (body text) and Playfair Display (headings/display) via Google Fonts
- **Color Theme**: Medical/clean blue palette using CSS custom properties (HSL values)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend (`server/`)
- **Framework**: Express 5 on Node.js with TypeScript (run via `tsx`)
- **API Endpoints**:
  - `POST /api/inquiries` — Create consultation inquiry
  - `POST /api/smile-preview` — AI smile transformation (accepts base64 image, returns transformed image)
- **AI Integration**: OpenAI gpt-image-1 via Replit AI Integrations (env vars: AI_INTEGRATIONS_OPENAI_API_KEY, AI_INTEGRATIONS_OPENAI_BASE_URL)

### Database & ORM
- **Database**: PostgreSQL (via `DATABASE_URL`)
- **ORM**: Drizzle ORM with `drizzle-zod`
- **Schema**: `shared/schema.ts` — `inquiries` table (id, name, email, message, createdAt)

### Key Scripts
- `npm run dev` — Development server with Vite HMR
- `npm run build` — Production build
- `npm run db:push` — Push schema changes to database

## Assets
- Doctor photos, Golden Angel award image, 5 certificates, gallery photos, logo — all in `attached_assets/`
