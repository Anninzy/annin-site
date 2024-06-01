import { PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function ({ Component }: PageProps) {
  return (
    <html lang="en" class="size-full">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/favicon.ico" rel="icon" type="image/x-icon" />
        <link rel="stylesheet" href={asset("/styles.css")} />
      </head>

      <body class="latte size-full bg-base dark:mocha dark:text-white">
        <Component />
      </body>
    </html>
  );
}
