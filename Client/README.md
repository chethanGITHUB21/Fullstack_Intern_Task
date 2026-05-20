# TemplateProject Client

## React + Vite + Tailwind Setup

### Prerequisites

- Node.js 18 or later
- npm (included with Node.js)

### Install dependencies

```bash
cd Client
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Client folder structure

- `public/` - static public assets
- `src/api/axios.js` - axios instance for API calls
- `src/assets/` - static UI assets
- `src/components/` - shared React components
- `src/context/` - React context providers
- `src/pages/` - page-level views
- `src/routes/` - application routing
- `src/services/` - API service modules
- `src/utils/` - helper utilities
- `src/App.jsx` - root React app component
- `src/main.jsx` - React entrypoint
- `src/index.css` - Tailwind and global styles

### Tailwind setup

Tailwind is already configured using `tailwind.config.js` and `postcss.config.js`.
The app uses `@tailwind base`, `@tailwind components`, and `@tailwind utilities` in `src/index.css`.
