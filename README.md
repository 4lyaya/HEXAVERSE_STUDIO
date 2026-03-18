# HEXAVERSE STUDIO — Portfolio Website

**Tech Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Lucide React

---

## Project Structure

```
hexaverse-studio/
├── app/
│   ├── layout.tsx          # Root layout dengan ThemeProvider
│   ├── page.tsx            # Home page (assembles all sections)
│   └── globals.css         # CSS variables, base styles, animations
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Fixed nav dengan dark mode toggle & mobile menu
│   │   └── Footer.tsx          # Footer dengan navigasi & social links
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx     # Hero dengan grid background & stats
│   │   ├── WhySection.tsx      # Origin/Mission dengan code diagram
│   │   ├── FounderSection.tsx  # Founder profile dengan skill bars
│   │   ├── ServicesSection.tsx # Grid 3x2 service cards
│   │   ├── ProjectsSection.tsx # Project gallery dengan filter
│   │   └── ContactSection.tsx  # Contact form + info
│   │
│   ├── ui/
│   │   ├── Tag.tsx             # Reusable label tag komponen
│   │   ├── Button.tsx          # Primary & Ghost button variants
│   │   ├── SectionHead.tsx     # Tag + Title + Description combo
│   │   ├── ServiceCard.tsx     # Individual service card
│   │   ├── ProjectCard.tsx     # Individual project card dengan hover
│   │   ├── SkillBar.tsx        # Skill progress bar
│   │   ├── Pillar.tsx          # Mission pillar card
│   │   └── CodeDiagram.tsx     # Animated code block
│   │
│   └── providers/
│       └── ThemeProvider.tsx   # Dark/light mode context
│
├── types/
│   └── index.ts            # TypeScript interfaces & data
│
├── hooks/
│   └── useScrollReveal.ts  # Intersection Observer hook
│
├── public/
│   └── ...                 # Static assets
│
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Setup & Installation

```bash
# 1. Create Next.js project
npx create-next-app@latest hexaverse-studio \
  --typescript --tailwind --eslint --app

cd hexaverse-studio

# 2. Install dependencies
npm install lucide-react

# 3. Copy all component files into the structure above

# 4. Start development server
npm run dev
```

---

## Tailwind Configuration (`tailwind.config.ts`)

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#6D28D9',
          mid:     '#7C3AED',
          light:   '#8B5CF6',
          muted:   '#4C1D95',
        },
        hex: {
          bg:        '#0A0A0F',
          'bg-2':    '#0F0F1A',
          card:      '#12121E',
          'card-h':  '#16162B',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono:    ['DM Mono', 'monospace'],
        sans:    ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

---

## Core Components

### `ThemeProvider.tsx`
```tsx
'use client'
import { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'dark' | 'light'
const ThemeContext = createContext<{
  theme: Theme
  toggle: () => void
}>({ theme: 'dark', toggle: () => {} })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggle: () => setTheme(t => t === 'dark' ? 'light' : 'dark') }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
```

### `useScrollReveal.ts`
```typescript
import { useEffect, useRef } from 'react'

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
```

### `ServiceCard.tsx`
```tsx
import { LucideIcon } from 'lucide-react'
import { Service } from '@/types'

interface Props { service: Service; Icon: LucideIcon }

export function ServiceCard({ service, Icon }: Props) {
  return (
    <div className="group relative bg-hex-card border border-purple/25 p-10
                    hover:bg-hex-card-h transition-colors duration-300 overflow-hidden">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-purple
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

      <p className="font-mono text-xs text-gray-600 tracking-widest mb-6">
        {service.number} / {service.category}
      </p>

      <div className="w-11 h-11 bg-purple/10 rounded-sm flex items-center
                      justify-center text-purple-light mb-6">
        <Icon size={22} />
      </div>

      <h3 className="font-display font-bold text-lg mb-3">{service.title}</h3>
      <p className="text-sm text-muted leading-relaxed">{service.description}</p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {service.tags.map(tag => (
          <span key={tag} className="font-mono text-xs px-2 py-0.5
                                     border border-purple/20 text-gray-500 tracking-wide">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
```

### `ProjectCard.tsx`
```tsx
import { ExternalLink } from 'lucide-react'
import { Project } from '@/types'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-hex-card border border-purple/25
                    hover:bg-hex-card-h transition-colors flex flex-col">
      <div className="aspect-video bg-hex-bg-2 relative overflow-hidden
                      flex items-center justify-center">
        <span className="text-5xl opacity-30 group-hover:opacity-50
                         group-hover:scale-105 transition-all duration-300">
          {project.emoji}
        </span>
        <div className="absolute inset-0 bg-purple/10 opacity-0
                        group-hover:opacity-100 transition-opacity
                        flex items-center justify-center">
          <ExternalLink size={20} className="text-white" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="font-mono text-xs text-purple-light tracking-widest mb-2">
          {project.categoryLabel}
        </p>
        <h3 className="font-display font-bold text-base mb-2">{project.name}</h3>
        <p className="text-sm text-muted flex-1">{project.description}</p>

        <div className="mt-4 pt-4 border-t border-purple/15
                        flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {project.stack.map(s => (
              <span key={s} className="font-mono text-xs px-1.5 py-0.5
                                       border border-purple/20 text-gray-500">
                {s}
              </span>
            ))}
          </div>
          {project.url && (
            <a href={project.url}
               className="w-7 h-7 border border-purple/25 flex items-center
                          justify-center text-gray-500 hover:border-purple-light
                          hover:text-purple-light transition-colors">
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
```

---

## Key Design Decisions

| Decision | Rationale |
|---|---|
| **Syne + DM Mono + DM Sans** | Geometric boldness for headings, utilitarian mono for labels, clean sans for body |
| **No gradients** | Flat solid colors with strategic opacity give corporate tech feel |
| **CSS custom properties for theming** | Seamless dark/light transition via `data-theme` attribute |
| **Grid with 1px separator** | Services & projects use a border-collapsed grid for editorial density |
| **Hexagonal logo** | Reinforces the HEXAVERSE brand with actual hex geometry |
| **Sticky founder card** | Keeps founder identity visible while reading long bio |
| **Code diagram block** | Shows architectural thinking, not just tells it |

---

## Color System

```css
/* Dark Mode */
--bg:           #0A0A0F   /* deepest background */
--bg-2:         #0F0F1A   /* section alternates */
--bg-card:      #12121E   /* card backgrounds */
--purple:       #6D28D9   /* primary accent */
--purple-light: #8B5CF6   /* highlights, tags */
--border:       rgba(109,40,217,.25)

/* Light Mode overrides */
--bg:           #F8F7FF
--bg-2:         #EFECFF
--bg-card:      #FFFFFF
--text:         #0F0E1A
```

---

*HEXAVERSE STUDIO — Engineering digital infrastructure that performs, scales, and endures.*
