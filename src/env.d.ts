/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ADMIN_EMAIL: cnyagakan@gmail.com
  readonly VITE_ADMIN_PASSWORD: admin
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}