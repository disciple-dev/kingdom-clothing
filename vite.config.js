import { defineConfig } from "vite";
require("dotenv").config();
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [svgr(), react()],
  define: {
    "process.env.STRIPE_SECRET": `"${process.env.STRIPE_SECRET}"`,
    "process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY": `"${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}"`,
  },
  optimizeDeps: {
    exclude: [
      "firebase",
      "firebase/app",
      "firebase/auth",
      "firebase/firestore",
    ],
  },
  build: { outDir: "build" },
});
