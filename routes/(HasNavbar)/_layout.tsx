import { PageProps } from "$fresh/server.ts";
import ThemeButton from "../../islands/ThemeButton.tsx";

export default function ({ Component }: PageProps) {
  return (
    <>
      <nav class="fixed top-0 z-10 h-12 w-screen bg-crust">
        <ul
          id="navbar-list"
          class="flex size-full flex-row items-center gap-6 p-2 font-major"
        >
          <li class="h-full">
            <a class="size-full" href="/" aria-label="Go to home page">
              <div class="flex aspect-square h-full items-center justify-center rounded-full bg-surface2 p-1">
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
