import { PageProps } from "$fresh/server.ts";

export default function ({ Component }: PageProps) {
  return (
    <>
      <nav class="absolute w-screen h-12 bg-overlay0/50">
        <ul class="font-major p-2 size-full flex flex-row items-center gap-6">
          <li class="h-full">
            <a class="size-full" href="/" aria-label="Go to home page">
              <div class="p-1 flex items-center justify-center h-full aspect-square bg-red rounded-full">
                <img class="size-full" src="/logo.svg" alt="" />
              </div>
            </a>
          </li>
          <li>
            <a href="/apps">Apps</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
        </ul>
      </nav>
      <Component />
    </>
  );
}
