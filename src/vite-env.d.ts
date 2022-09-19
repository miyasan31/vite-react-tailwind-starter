/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

interface ImportMetaEnv {
  readonly VITE_ENV_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/* eslint-disable @typescript-eslint/naming-convention */
declare const __VITE_API_URL__: string;
