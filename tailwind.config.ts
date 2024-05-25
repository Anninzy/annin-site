import { type Config } from "tailwindcss";
import catppuccin from "npm:@catppuccin/tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  darkMode: "selector",
  // deno-lint-ignore no-explicit-any
  plugins: [catppuccin as any],
} satisfies Config;
