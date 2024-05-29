import { Head } from "$fresh/runtime.ts";

export default function () {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="Wuh oh. 404."></meta>
      </Head>

      <div class="size-full flex flex-col items-center justify-center gap-3">
        <div class="flex items-center gap-6 font-major">
          <h1 class="text-9xl">&lt;4</h1>
          <a href="/">
            <div class="size-32 bg-no-repeat bg-center bg-[url('/logo_animated.svg')]" />
          </a>
          <h1 class="text-9xl">4&gt;</h1>
        </div>
        <p class="text-xl text-center">
          When you stare into the abyss, the abyss beats you up for staring or
          whatever.
        </p>
      </div>
    </>
  );
}
