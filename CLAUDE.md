# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start development server with Vite HMR
- `pnpm build` - Build for production (runs TypeScript check + Vite build)
- `pnpm serve` - Preview production build

### Code Quality
- `pnpm lint` - Run ESLint with auto-fix
- `pnpm format` - Format TypeScript files with Prettier
- Package manager: **pnpm** (required, specified in packageManager field)

## Architecture

### Core Stack
- **Vite** + React 19 + TypeScript with file-based routing
- **State Management**: Jotai store with custom hooks (`src/lib/jotai.ts`)
- **UI Components**: Radix UI primitives + custom components in `src/components/ui/`
- **Styling**: TailwindCSS 4 with Apple UIKit color system
- **Routing**: React Router with auto-generated routes via `@follow-app/vite-plugin-route-builder`

### Key Architectural Patterns

#### File-Based Routing
- Pages in `src/pages/` automatically generate routes via vite plugin
- Routes are generated in `src/generated-routes.ts` (auto-generated, do not edit)
- Route structure: `src/pages/(main)/index.sync.tsx` becomes root route

#### Component Organization
- **Base UI**: `src/components/ui/` - Reusable primitives (buttons, inputs, etc.)
- **Common**: `src/components/common/` - App-specific shared components
- **Path aliases**: Use `~/` for `src/` imports (configured in tsconfig)

#### State Management
- Jotai store with custom `createAtomHooks` utility
- Global store instance: `jotaiStore` from `src/lib/jotai.ts`
- Atoms typically in `src/atoms/` directory

#### Provider Architecture
- Root providers in `src/providers/root-providers.tsx` with:
  - LazyMotion + MotionConfig for animations
  - QueryClient for React Query
  - Jotai Provider with global store
  - Context menu, event, and settings providers

### Color System
- Uses Apple UIKit colors via `tailwindcss-uikit-colors`
- Defined in `.cursor/rules/color.mdc` - prefer these over standard Tailwind colors
- Examples: `text-primary`, `fill-secondary`, `material-thin`, etc.

### Code Style Rules
- ESLint config: `eslint-config-hyoban` with React-specific rules
- No location global usage (use `useLocation` or route utilities instead)
- Self-closing JSX components enforced for .tsx files
- Formatting handled by Prettier with git hooks

### Development Tools
- **Code Inspector**: Alt+click to navigate to component source
- **TypeScript checking**: Enabled in Vite with checker plugin
- **Git hooks**: Pre-commit formatting via lint-staged