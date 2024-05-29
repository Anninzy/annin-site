import { PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function ({ Component }: PageProps) {
  if (IS_BROWSER) {
    if (localStorage.theme === "dark" || (!("theme" in localStorage))) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <html lang="en" class="size-full">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href={asset("/styles.css")} />
      </head>

      <body class="latte bg-base dark:mocha dark:text-white size-full">
        <Component />
      </body>
    </html>
  );
}
