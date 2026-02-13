# Clinic Lina - Dental Clinic Website

## Overview

Clinic Lina is a dental clinic marketing website for a practice based in Istanbul, Turkey. It's a single-page application showcasing dental services (implants, Hollywood smile, zirconium crowns, etc.), a gallery of patient results, and a consultation inquiry form. The site targets international patients seeking dental tourism in Istanbul.

The app follows a full-stack TypeScript monorepo pattern with a React frontend and Express backend, using PostgreSQL for data storage.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Monorepo Structure
The project is organized into three main directories:
- **`client/`** — React frontend (SPA)
- **`server/`** — Express backend (API server)
- **`shared/`** — Shared types, schemas, and route definitions used by both client and server

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
- **HTTP Server**: Node `http.createServer` wrapping Express
- **API Pattern**: REST endpoints defined in `server/routes.ts`, with shared route definitions in `shared/routes.ts`
- **Development**: Vite dev server middleware for HMR (`server/vite.ts`)
- **Production**: Static file serving from `dist/public` (`server/static.ts`)
- **Build**: Custom build script using esbuild for server + Vite for client (`script/build.ts`)

### Database & ORM
- **Database**: PostgreSQL (required via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema**: Defined in `shared/schema.ts` — currently has one table: `inquiries` (id, name, email, message, createdAt)
- **Migrations**: Drizzle Kit with `drizzle-kit push` command (`db:push` script)
- **Connection**: `pg` Pool in `server/db.ts`

### Shared Layer (`shared/`)
- **`schema.ts`**: Drizzle table definitions and Zod insert schemas, shared between client and server
- **`routes.ts`**: API route definitions (paths, methods, input/output schemas) used by both frontend hooks and backend handlers — provides type-safe API contracts

### Storage Pattern
- `server/storage.ts` defines an `IStorage` interface with `DatabaseStorage` implementation
- Currently only has `createInquiry` method
- Exported as singleton `storage` instance

### Key Scripts
- `npm run dev` — Development server with Vite HMR
- `npm run build` — Production build (Vite for client, esbuild for server)
- `npm run start` — Run production build
- `npm run db:push` — Push schema changes to database

## External Dependencies

### Database
- **PostgreSQL** — Primary data store, connected via `DATABASE_URL` environment variable
- **`connect-pg-simple`** — Session store for PostgreSQL (available but not currently wired up)

### Frontend Libraries
- **Radix UI** — Full suite of accessible, unstyled UI primitives (dialog, dropdown, tabs, toast, etc.)
- **shadcn/ui** — Pre-built component layer on top of Radix (new-york style variant)
- **Tailwind CSS** — Utility-first CSS framework with custom theme extending colors and fonts
- **Embla Carousel** — Carousel/slider component
- **react-day-picker** — Calendar/date picker
- **react-hook-form** with `@hookform/resolvers` — Form handling with Zod validation
- **cmdk** — Command palette component
- **vaul** — Drawer component
- **recharts** — Charting library (available via chart component)

### Build Tools
- **Vite** — Frontend build tool and dev server
- **esbuild** — Server bundling for production
- **tsx** — TypeScript execution for development
- **PostCSS + Autoprefixer** — CSS processing

### Replit-specific
- `@replit/vite-plugin-runtime-error-modal` — Runtime error overlay
- `@replit/vite-plugin-cartographer` — Dev tooling (dev only)
- `@replit/vite-plugin-dev-banner` — Dev banner (dev only)

### Other Server Dependencies (in build allowlist, available for use)
- **Stripe** — Payment processing
- **Passport / passport-local** — Authentication
- **nodemailer** — Email sending
- **OpenAI / Google Generative AI** — AI integrations
- **multer** — File upload handling
- **jsonwebtoken** — JWT authentication
- **express-session** — Session management
- **express-rate-limit** — API rate limiting
- **cors** — Cross-origin resource sharing
- **xlsx** — Spreadsheet processing