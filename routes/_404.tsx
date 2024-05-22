import { Head } from "$fresh/runtime.ts";

export default function () {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>

      <div id="four-o-four" class="size-page position-child-center">
        <div>
          <div id="icon-inline-text">
            <h1>&lt;4</h1>
            <img src="/logo.svg" />
            <h1>4&gt;</h1>
          </div>
          <h2>
            When you stare into the abyss, the abyss beats you up for staring or
            whatever.
          </h2>
        </div>
      </div>
    </>
  );
}
