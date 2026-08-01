# Intern CV Screening — UI

## Running the app

```bash
npm install
npm run start-with-mocks   # http://localhost:5173 — mock API, no backend needed
npm run dev                # live mode, expects the real backend at VITE_API_URL
```

`start-with-mocks` runs Vite in `development` mode, which loads `.env.development`
and sets `VITE_USE_MOCKS=true`. `src/main.tsx` then starts
[Mock Service Worker](https://mswjs.io) before mounting the app, and every
request the axios instance makes is answered in the browser from `src/mocks`.
Nothing hits the network. Plain `npm run dev` runs in `live` mode, skips that
file, and talks to the real API.

Log in with the mock credentials from `.env.development`:
`demo@celfocus.com` / `password`. Anything else gets a 401, on purpose.

Open DevTools → Network to see the intercepted calls and their real JSON — that
is the fastest way to learn the API shapes.

## Working with the API

Three folders, in the order you'll touch them:

| Folder | State | What it's for |
| --- | --- | --- |
| `src/mocks` | **Done** — don't edit unless an endpoint is missing | The fake backend: 3 internships, 40 candidates, scoring criteria |
| `src/types/api` | **Placeholders** | The request/response types. Write them from the mock data — see the README in that folder |
| `src/services` | **Placeholders** | One file per resource, plain promises. `api.ts` works; the rest have a worked GET + POST and `TODO` stubs |

There is no react-query and no data-fetching library: a service returns a
promise, and the component calls it from `useEffect` and holds the result in
`useState`. `src/services/README.md` has a copy-pasteable example.

Start with `src/types/api/candidates.ts` and `src/services/candidates.ts` —
they back the candidates table, which is the page furthest along.

### Endpoints the mock serves

| Method | Path | Response style |
| --- | --- | --- |
| POST | `/auth/login` | plain (401 on bad credentials) |
| GET | `/internships/:internshipId/candidates` | plain array — supports `search`, `status`, `isNominated`, `sortBy`, `sortAsc` |
| GET | `/candidates/:id` | plain (real 404 if unknown) |
| GET | `/internships` | plain array of `{ id, name }` |
| GET/POST/PUT/DELETE | `/internships/:id` | `ResponseModel` envelope |
| GET/POST/PUT/DELETE | `/internships/:internshipId/scoring-criteria` | `ResponseModel` envelope |

Envelope endpoints always return HTTP 200 and report failure in the body
(`isSuccessful: false`, `code: "003"` for not found), so axios will **not**
reject — check the body yourself.

Creates, updates and deletes are held in memory and reset on page reload.

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
