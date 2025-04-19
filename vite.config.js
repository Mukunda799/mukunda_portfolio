import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/mukunda_portfolio/",
});
module.exports = {
  darkMode: "class", // Enables class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};
