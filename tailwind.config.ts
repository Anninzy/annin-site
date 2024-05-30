import { type Config } from "tailwindcss";
import catppuccin from "@catppuccin/tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  darkMode: "selector",
  theme: {
    fontFamily: {
      major: ["Major Mono Display", "monospace"],
    },
  },
  // deno-lint-ignore no-explicit-any
  plugins: [catppuccin as any],
} satisfies Config;
