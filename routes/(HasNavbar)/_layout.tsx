import { PageProps } from "$fresh/server.ts";
import ThemeButton from "../../islands/ThemeButton.tsx";

export default function ({ Component }: PageProps) {
  return (
    <>
      <nav class="fixed top-0 z-10 w-screen h-12 bg-crust">
        <ul
          id="navbar-list"
          class="font-major p-2 size-full flex flex-row items-center gap-6"
        >
          <li class="h-full">
            <a class="size-full" href="/" aria-label="Go to home page">
              <div class="p-1 flex items-center justify-center h-full aspect-square bg-surface2 rounded-full">
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
          <ThemeButton />
        </ul>
      </nav>

      <Component />
    </>
  );
}
