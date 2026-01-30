# Portfolio PWA

## Overview
A modern portfolio Progressive Web App (PWA) built with Next.js 16, React 19, and TypeScript. Features smooth animations with Framer Motion and a clean UI with Lucide icons.

## Project Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components
- `src/data/` - Static data files (projects.json)
- `src/actions/` - Server actions
- `src/types/` - TypeScript type definitions
- `public/` - Static assets and PWA manifest

## Tech Stack
- **Framework**: Next.js 16 with App Router
- **UI**: React 19, Framer Motion, Lucide React icons
- **Language**: TypeScript
- **PWA**: next-pwa for Progressive Web App support

## Running the Project
- Development: `npm run dev` (runs on port 5000)
- Build: `npm run build`
- Production: `npm start`

## Configuration
- Next.js config includes PWA support (disabled in development)
- Frontend runs on `0.0.0.0:5000` for Replit compatibility
- All hosts allowed for dev origins to support Replit's proxy
