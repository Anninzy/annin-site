import { Head } from "$fresh/runtime.ts";

export default function () {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="Wuh oh. 404."></meta>
      </Head>

      <div class="flex size-full flex-col items-center justify-center gap-3">
        <div class="flex items-center gap-6 font-major text-7xl lg:text-9xl">
          <h1>&lt;4</h1>
          <a href="/">
            <div class="size-20 bg-[url('/logo_animated.svg')] bg-center bg-no-repeat lg:size-32" />
          </a>
          <h1>4&gt;</h1>
        </div>
        <p class="text-center text-sm lg:text-xl">
          When you stare into the abyss, the abyss beats you up for staring or
          whatever.
        </p>
      </div>
    </>
  );
}
