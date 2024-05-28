import { Head } from "$fresh/runtime.ts";
import Clock from "../../islands/Clock.tsx";

export default function () {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Oh hi."></meta>
      </Head>

      <div class="size-full flex items-center justify-center">
        <div>
          <h1 class="text-8xl">anninzy#0000</h1>
          <h2 class="text-4xl">Professional procrastinator.</h2>
          <p class="text-xl">
            It is currently <Clock /> for me.
          </p>
        </div>
      </div>
    </>
  );
}
