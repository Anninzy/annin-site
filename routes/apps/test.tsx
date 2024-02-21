import { Head } from "$fresh/runtime.ts";
import Links from "../../islands/Links.tsx";

export default function () {
  return (
    <>
      <Head>
        <title>Test</title>
      </Head>

      <div class="pageSize verticalCenter">
        <h2>Hey there.</h2>
      </div>
    </>
  );
}
