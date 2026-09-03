import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Empêche Vite de réintégrer les petites images en base64 dans le JS
    assetsInlineLimit: 0,
  },
});
