# LARA Platform - AI Agent Instructions

## Project Overview

LARA is a Learning Management System (LMS) educational platform inspired by Udemy/Coursera. Built with **Next.js 16** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS 4** for university project purposes.

**Critical**: All UI text, messages, buttons, and content MUST be in **English** (despite Arabic documentation in PROJECT_PLAN.md).

## Architecture & Tech Stack

### Current State (Early Development)
- **Frontend**: Next.js 16 App Router + React 19 + TypeScript
- **Styling**: Tailwind CSS 4 with custom gradient theme (`#FFAE74` → `#FFF4B7`)
- **Fonts**: Geist Sans & Geist Mono (from Google Fonts)
- **Backend**: Planned - Next.js API Routes + Prisma ORM + SQLite (local development)
- **Auth**: Planned - NextAuth.js v5 with credentials provider

### Planned Features (See PROJECT_PLAN.md)
- User roles: Student, Instructor, Admin
- Course management with lessons and video content
- Quiz system with multiple question types
- Enrollment and progress tracking
- Dashboard analytics with charts (Recharts)
- Rich text editing (TipTap)

## Development Workflow

### Running the Application
```bash
npm run dev          # Development server (Turbopack)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint checks
```

**Note**: Last terminal command `npm run div` failed (Exit Code 1) - this is NOT a valid script. Use `npm run dev` instead.

### Path Aliases
TypeScript configured with `@/*` aliasing to project root:
```typescript
import Component from '@/components/ui/Button'
import { prisma } from '@/lib/prisma'
```

## Coding Conventions

### File Structure Pattern
Follow Next.js 16 App Router conventions:
- **Route groups**: Use `(auth)`, `(platform)`, `(landing)` for logical grouping without affecting URLs
- **Layouts**: Each route group should have its own `layout.tsx`
- **Components**: Organize by feature area under `/components/{feature}/`

Planned structure (from PROJECT_PLAN.md lines 88-202):
```
app/
  (auth)/          # Login, Register pages
  (platform)/      # Dashboard, Courses, Quizzes (protected)
  (landing)/       # Public landing page
  api/             # API routes
components/
  layout/          # Navbar, Sidebar, Footer
  auth/            # Auth forms
  courses/         # Course-related components
  ui/              # Reusable UI primitives
```

### Component Patterns

**Brand Color Gradient** (use consistently):
```tsx
// Hero sections, CTAs, and primary backgrounds
className="bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7]"
```

**TypeScript Components** - Always use explicit typing:
```tsx
interface CourseCardProps {
  title: string;
  instructor: string;
  rating: number;
}

export default function CourseCard({ title, instructor, rating }: CourseCardProps) {
  // Component logic
}
```

**Server vs Client Components**:
- Default to Server Components (no `"use client"`)
- Use `"use client"` only when needed (hooks, interactivity, browser APIs)

### Styling Guidelines

**Tailwind v4 Inline Theme** (see [globals.css](app/globals.css)):
```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}
```

**Responsive Design Pattern**:
- Mobile-first approach
- Grid layouts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Common breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

**Dark Mode**: Currently configured via `prefers-color-scheme` in globals.css

### Database (Planned)

Prisma schema defines (PROJECT_PLAN.md lines 205-218):
- **User** (role: Student/Instructor/Admin)
- **Course** (with instructor relation)
- **Lesson** (ordered, with videoUrl)
- **Quiz** (duration, passingScore)
- **Question** (multiple types, points)
- **Enrollment** (progress tracking)
- **QuizResult** (score, answers)
- **Category** (with icon)

Migration commands:
```bash
npx prisma migrate dev     # Create migration
npx prisma generate        # Generate Prisma Client
npx prisma studio          # Open database GUI
```

## Critical Project Decisions

### Language Requirements
Despite Arabic documentation, **all code, UI, and user-facing content MUST use English**:
- Component text, button labels, form placeholders
- Toast messages, error messages
- Database seed data
- Variable/function names (already in English)

### Security Posture
**Educational/university project** - basic security appropriate for academic environment:
- No real payment system
- SQLite for development (consider upgrade for production)
- Standard bcrypt password hashing
- NextAuth session management

### Image Assets
Placeholder images from open sources - located in `/public/images/`:
- `courses/` - Course thumbnails
- `instructors/` - Instructor photos
- `students/` - Student/testimonial photos
- `uploads/` - User-uploaded content

## Landing Page Structure (Planned)

Key sections to implement (PROJECT_PLAN.md lines 235-400):

1. **Navbar** - Logo "LARA", search, navigation links, auth buttons/user dropdown
2. **Hero** - "Learn Smart, Grow Fast" + circular hero image with floating icons
3. **Categories** - 6 popular categories (Machine Learning, AI, Cloud, Web Dev, Data Science, Mobile)
4. **Featured Courses** - Top 6 courses
5. **Instructors** - 5 featured instructors with specialty
6. **Testimonials** - Student feedback carousel with ratings
7. **Footer** - 4-column grid (Logo, Contact, Quick Links, Newsletter)

### Mock Data Files Pattern
Create static data files for development:
```typescript
// data/categories.ts
export const categories = [
  { name: "Machine Learning", courses: 120, learners: 40000, icon: "brain" },
  // ...
]
```

## Common Tasks

### Adding a New Component
1. Create in appropriate `/components/{category}/` folder
2. Use TypeScript with explicit prop interfaces
3. Follow naming: PascalCase for components, kebab-case for files
4. Export as default for page components, named for utilities

### Creating API Routes
```typescript
// app/api/courses/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // Handle GET requests
}

export async function POST(request: NextRequest) {
  // Handle POST requests
}
```

### Form Validation Pattern (Planned)
Use Zod + React Hook Form:
```typescript
import { z } from 'zod'
import { useForm } from 'react-hook-form'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})
```

## References

- **Detailed Plan**: See [PROJECT_PLAN.md](PROJECT_PLAN.md) for comprehensive 1300+ line implementation roadmap
- **ESLint Config**: [eslint.config.mjs](eslint.config.mjs) - Next.js standards with TypeScript
- **TypeScript Config**: [tsconfig.json](tsconfig.json) - Strict mode enabled, path aliases configured
- **Next.js Config**: [next.config.ts](next.config.ts) - Default configuration (extend as needed)
