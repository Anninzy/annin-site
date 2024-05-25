import { Head } from "$fresh/runtime.ts";
import Clock from "../../islands/Clock.tsx";

export default function () {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Oh hi."></meta>
      </Head>

      <h1 class="">anninzy#0000</h1>
      <h2>Professional procrastinator.</h2>
      <p>
        It is currently <Clock /> for me.
      </p>
    </>
  );
}
