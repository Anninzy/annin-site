import { PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";
import SetTheme from "../islands/SetTheme.tsx";

export default function ({ Component }: PageProps) {
  return (
    <html lang="en" class="dark size-full">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href={asset("/styles.css")} />
        <SetTheme />
      </head>

      <body class="latte size-full bg-base dark:mocha dark:text-white">
        <Component />
      </body>
    </html>
  );
}
