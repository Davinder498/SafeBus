import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@safebus/api": fileURLToPath(new URL("../../packages/api/src/index.ts", import.meta.url)),
      "@safebus/types": fileURLToPath(new URL("../../packages/types/src/index.ts", import.meta.url)),
      "@safebus/ui": fileURLToPath(new URL("../../packages/ui/src/index.tsx", import.meta.url))
    }
  }
});
