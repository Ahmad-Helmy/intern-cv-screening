/// <reference types="vite/client" />

/** The env vars this app reads. See .env and .env.development. */
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_USE_MOCKS?: string;
  readonly VITE_MOCK_USER_EMAIL?: string;
  readonly VITE_MOCK_USER_PASSWORD?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
