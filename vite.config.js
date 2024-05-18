import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy all requests starting with /api to the backend server
      "/api": {
        target: "http://localhost:3000", // Backend URL
        changeOrigin: true, // Changes the origin to the target URL
        rewrite: (path) => path.replace(/^\/api/, ""), // Removes '/api' prefix
      },
    },
  },
});
