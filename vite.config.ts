/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import type { VitePWAOptions } from "vite-plugin-pwa";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

const pwaOptions: Partial<VitePWAOptions> = {
  includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
  manifest: {
    name: "PWA",
    short_name: "PWA",
    theme_color: "#333333",
    icons: [
      {
        src: "android-chrome-192x192.png", // <== don't add slash, for testing
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png", // <== don't remove slash, for testing
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "android-chrome-512x512.png", // <== don't add slash, for testing
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), VitePWA(pwaOptions)],
  assetsInclude: ["robots.txt"],
  envDir: "./environments",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    include: ["src/**/*.test.{ts,tsx}"],
    exclude: ["**/node_modules/**", "**/dist/**", "e2e/**"],
  },
});
