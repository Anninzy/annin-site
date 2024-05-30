import { Head } from "$fresh/runtime.ts";
import Clock from "../../islands/Clock.tsx";

export default function () {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Oh hi." />
      </Head>

      <div class="flex size-full items-center justify-center p-2">
        <div class="flex flex-col gap-3">
          <h1 class="text-5xl lg:text-8xl">anninzy#0000</h1>
          <h2 class="text-xl lg:text-4xl">Professional procrastinator.</h2>
          <Clock />
        </div>
      </div>
    </>
  );
}
