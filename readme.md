# Modern React Template

A production-ready Vite + React template with modern tooling, beautiful UI components, and developer-focused features. Built with contemporary design principles inspired by leading companies like Vercel.

## ✨ Features

### 🚀 Modern Development Stack

- **Vite 5** - Lightning-fast build tool with HMR
- **React 18** - Latest React with concurrent features
- **TypeScript** - Full type safety and IntelliSense
- **TailwindCSS 4** - Utility-first CSS with modern features

### 🎨 Beautiful UI Components

- **Animated Components** - Smooth animations with Framer Motion
- **Modern Design System** - Clean, minimal aesthetic inspired by Vercel
- **Dark/Light Theme** - System preference aware theme switching
- **Interactive Elements** - Buttons, tooltips, icons with micro-interactions

### 🛠️ Developer Experience

- **ESLint + Prettier** - Code formatting and linting
- **Git Hooks** - Pre-commit hooks with lint-staged
- **Auto Routes** - File-based routing with React Router DOM
- **TypeScript Config** - Optimized tsconfig with path mapping

### 📱 Production Ready

- **Responsive Design** - Mobile-first approach
- **Optimized Builds** - Code splitting and tree shaking
- **Modern Browser Support** - ES2020+ features
- **Vercel Ready** - Optimized for Vercel deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Clone the template
git clone https://github.com/innei-template/vite-react-tailwind-template
cd vite-react-tailwind-template

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, tooltips, etc.)
│   └── common/         # Common app components
├── pages/              # File-based routing pages
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── providers/          # Context providers
├── styles/             # Global styles and Tailwind config
└── assets/             # Static assets (fonts, images)
```

## 🎨 UI Components

### Buttons

- Multiple variants (primary, secondary, ghost, destructive)
- Loading states with animations
- Icon support with Lucide React
- Motion effects with Framer Motion

### Theme System

- Automatic dark/light mode detection
- Manual theme switching
- Persistent theme preferences
- Smooth transitions between themes

### Interactive Elements

- Animated tooltips
- Icon buttons with hover effects
- Context menus
- Loading indicators

## 🔧 Configuration

### Tailwind CSS

The template uses TailwindCSS 4 with custom configurations for:

- Custom color palette
- Typography scales
- Animation utilities
- Dark mode support

### TypeScript

Path mapping is configured for clean imports:

```typescript
import { Button } from '~/components/ui/button/Button'
import { useDark } from '~/hooks/common/useDark'
```

### ESLint & Prettier

Opinionated configuration for:

- React best practices
- TypeScript strict rules
- Import sorting
- Code formatting consistency

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This template is open source and available under the [MIT License](LICENSE).

2025 © Innei, Released under the MIT License.

> [Personal Website](https://innei.in/) · GitHub [@Innei](https://github.com/innei/)

## 🙏 Acknowledgments

- Design inspiration from [Vercel](https://vercel.com)
- Icons by [Lucide](https://lucide.dev)
- Animations by [Framer Motion](https://www.framer.com/motion)
- Built with [Vite](https://vitejs.dev) and [React](https://react.dev)

---

**Ready to build something amazing?** ⚡
