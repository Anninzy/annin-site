import { Head } from "$fresh/runtime.ts";
import Links from "../islands/Links.tsx";

export default function () {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div id="menu" class="pageSize verticalCenter">
        <div id="items">
          <Links />
        </div>

        <div id="pattern" />
        <img id="background" src="/background.jpg" />
      </div>
    </>
  );
}
