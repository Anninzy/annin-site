import { Head } from "$fresh/runtime.ts";
import Clock from "../../islands/Clock.tsx";

export default function () {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <div id="about" class="pageSize center">
        <div>
          <h3>anninzy#0000</h3>
          <h4>Professional procrastinator.</h4>
          <p>
            It is currently <Clock /> for me.
          </p>
        </div>
      </div>
    </>
  );
}
