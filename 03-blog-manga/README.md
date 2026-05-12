# Manga Blog Application

A modern web application for browsing and managing manga titles, built with React 19, TypeScript, Tailwind CSS, and Vite.

## Project Setup

### Prerequisites

- Node.js 18+ and npm/pnpm
- Modern browser (Chrome, Firefox, Safari, Edge - latest 2 versions)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file from `.env.example`:

```bash
cp .env.example .env.local
```

4. Update `.env.local` with your configuration if needed

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server at `http://localhost:5173` with hot module replacement (HMR).

### Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory. The build includes:
- Code splitting for faster loading
- CSS minification
- JavaScript minification with Terser
- Source maps disabled for production

### Preview

```bash
npm run preview
```

Preview the production build locally before deployment.

### Type Checking

```bash
npm run type-check
```

Runs TypeScript compiler to check for type errors without emitting files.

## Project Structure

```
src/
├── app/                 # Application entry point and layout
│   ├── App.tsx          # Root component with providers
│   ├── Layout.tsx       # Page layout with header, main, footer
│   └── ThemeProvider.tsx # Theme context and dark mode logic
├── pages/              # Page components (route-based)
├── components/         # Reusable UI components
│   └── ui/            # Base UI components (Shadcn UI)
├── stores/            # Zustand store definitions
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
│   ├── manga.ts       # Manga interface
│   ├── library.ts     # Library entry interface
│   ├── settings.ts    # Settings interface
│   └── api.ts         # API response types
├── utils/             # Utility functions and helpers
├── styles/            # Global styles and CSS
│   └── globals.css    # Global styles with Tailwind
├── config/            # Configuration files
│   └── router.tsx     # TanStack Router setup
└── lib/               # Library functions and constants
```

## Technology Stack

### Core
- **React 19** - UI framework
- **TypeScript 5.7** - Type safety
- **Vite 5.4** - Build tool and dev server

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS 8** - CSS processing
- **@tailwindcss/postcss** - Tailwind CSS plugin for PostCSS

### Routing & State
- **TanStack Router 1.54** - Type-safe routing
- **TanStack Query 5.54** - Server state management
- **TanStack Query DevTools** - Development tools
- **Zustand 4.5** - Client state management

### UI & Icons
- **Lucide React 0.463** - Icon library
- **clsx 2.1** - Conditional className helper
- **tailwind-merge 2.4** - Merge Tailwind classes safely

### Development
- **@vitejs/plugin-react 4.3** - Vite React plugin
- **@types/react 19** - React type definitions
- **@types/node 20** - Node.js type definitions
- **Terser** - JavaScript minifier

## Configuration Files

### `vite.config.ts`
Vite configuration with:
- React plugin
- Path aliases (@/ → src/)
- Development server settings
- Build optimization

### `tsconfig.json`
TypeScript configuration with:
- Strict mode enabled
- JSX support (react-jsx)
- Path aliases matching Vite config
- ES2020+ target

### `tailwind.config.ts`
Tailwind CSS configuration with:
- Design system colors via CSS variables
- Typography settings (Geist font family)
- Custom spacing scale
- Dark mode support

### `postcss.config.mjs`
PostCSS configuration with Tailwind CSS plugin.

## Environment Variables

See `.env.example` for available variables:

- `VITE_API_URL` - Jikan API base URL (https://api.jikan.moe/v4)

These variables must be prefixed with `VITE_` to be exposed to the client.

## Dark Mode

The application supports system-preferred dark mode with manual toggle:

- Theme preference is stored in `localStorage` under the key `theme`
- Valid values: `'light'` | `'dark'`
- On first visit, system preference is detected via `prefers-color-scheme`
- The `.dark` class is applied to the `<html>` element when dark mode is active

## Design System

The application uses a design system defined in `openspec/specs/ui/`:

- **Colors**: OKLch color system with CSS variables
- **Typography**: Geist font family with 4 font weights
- **Spacing**: 4px base unit scale
- **Border Radius**: Consistent rounding from 4px to rounded
- **Shadows**: Elevation-based shadow system

See `openspec/specs/ui/design-system.md` for complete specifications.

## Getting Started

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open `http://localhost:5173` in your browser

3. The page will automatically reload as you make changes (HMR)

4. Check the browser console for any TypeScript or runtime errors

## Next Steps

After verifying the development environment works:

1. **Create Pages** - Add page components in `src/pages/`
2. **Build Components** - Create reusable components in `src/components/`
3. **Set Up Stores** - Define Zustand stores in `src/stores/`
4. **Add Routes** - Configure routes in `src/config/router.tsx`
5. **Integrate API** - Use TanStack Query for API calls in `src/utils/`

## Troubleshooting

### Dev server not starting
- Ensure port 5173 is available
- Delete `node_modules` and reinstall: `npm install`

### TypeScript errors
- Run `npm run type-check` to see all type errors
- Check IDE TypeScript version matches project version

### CSS not loading
- Verify `src/styles/globals.css` is imported in `src/main.tsx`
- Check Tailwind CSS classes are used correctly

### Dark mode not working
- Check browser DevTools: verify `.dark` class on `<html>` element
- Clear browser localStorage to reset theme preference

## Deployment

The `dist/` folder produced by `npm run build` is ready to deploy:

```bash
npm run build
# Deploy dist/ folder to your hosting provider
```

The application is a client-side SPA and works on any static file server or CDN.

## License

Proprietary - Manga Blog Application
