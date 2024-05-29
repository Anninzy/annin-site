import { Head } from "$fresh/runtime.ts";

export default function () {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="I write useless things." />
      </Head>

      <p class="m-24">
        Access blog #1 with <a href="/blog/1">this</a> link.
      </p>
    </>
  );
}
