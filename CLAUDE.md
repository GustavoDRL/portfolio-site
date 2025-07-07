# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Project Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom design system
- **Fonts**: Inter and Work Sans via next/font/google
- **Animations**: Framer Motion for page transitions and components
- **Icons**: React Icons library

### Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── projects/[slug]/   # Dynamic project detail pages
│   └── layout.tsx         # Root layout with metadata
├── components/
│   ├── layout/            # Header, Footer, Layout wrapper
│   ├── sections/          # Page sections (Hero, ProjectGrid, etc.)
│   └── ui/               # Reusable UI components
└── data/                  # Static data files
    ├── projects.ts        # Project data with full content
    ├── skills.ts          # Skills categorized by type
    └── experience.ts      # Professional experience
```

### Data Architecture
- **Projects**: Structured with TypeScript interfaces including slug-based routing, categories, technologies, and markdown content
- **Skills**: Categorized by type (Languages, Frameworks, AI & Data, Core Skills)
- **Experience**: Professional timeline with highlights and technologies

### Design System
- **Colors**: Custom palette with primary (#5A7D6F), background (#F9FFFB), and accent colors
- **Typography**: Custom font sizes (h1: 3.5rem, h2: 2.5rem, h3: 1.875rem)
- **Layout**: Container-based with responsive breakpoints
- **Animations**: Framer Motion page transitions with pathname-based keys

### Key Features
- **Dynamic Routing**: Projects use slug-based URLs with `[slug]` directory
- **SEO Optimization**: Complete metadata setup with Open Graph and Twitter cards
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Page Transitions**: Smooth animations between routes using AnimatePresence
- **Type Safety**: Strict TypeScript with proper interfaces for all data structures

### Component Patterns
- All components use TypeScript interfaces for props
- Layout component handles page transitions and scroll restoration
- Data files export typed interfaces and data arrays
- Components use `'use client'` directive when needed for hooks/animations

### Path Aliases
- `@/*` maps to `./src/*` for clean imports
- Use path aliases consistently: `@/components/`, `@/data/`