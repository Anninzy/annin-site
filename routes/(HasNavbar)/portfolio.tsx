import { Head } from "$fresh/runtime.ts";

export default function () {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Hey, welcome. Take a look at what I made."
        >
        </meta>
      </Head>

      <div id="portfolio" class="size-page">
        <div class="size-page position-child-center">
          <div>
            <h1>ANNIN-SITE</h1>
            <h2>Buuuuuuuuuuuuut it's still under heavy construction.</h2>
            <h3>
              1st web dev project, attempt #4. Initial attempt dating back to
              FEB 2023.
            </h3>
            <h3>
              Written in TS. Created with TSX & CSS. Built with Deno & Fresh.
            </h3>
          </div>
          <div id="arrow" />
        </div>

        <div class="size-page position-child-center">
          <div>
            <h1>FPS</h1>
            <h2>A prototype (barely ¯\_(ツ)_/¯).</h2>
            <h3>Written in luau. Built with Rojo. Ran in Roblox.</h3>
          </div>
        </div>

        <div class="size-page position-child-center">
          <div>
            <h1>MORE</h1>
            <h2>There's some commissions and other personal projects.</h2>
            <h3>I'll document them. Eventually.</h3>
          </div>
        </div>

        <div class="size-page position-child-center">
          <div>
            <h3>
              Find the source code of this website on my{" "}
              <a href="https://github.com/Anninzy/annin-site">Github repo</a>.
            </h3>
            <h3>
              You can find the source code of my other <s>abandoned</s>{" "}
              projects on <a href="https://github.com/Anninzy">Github</a>{" "}
              as well.
            </h3>
            <h3>
              I traced the icon of the website (the Eye) from an artwork of{" "}
              <a href="https://j5daigada.tumblr.com/post/619306719958450176/whoops-my-finger-slipped-and-i-drew-modeus">
                Modeus
              </a>{" "}
              by <a href="https://linktr.ee/j5daigada">daigada</a>{" "}
              (content warning). Hopefully they don't mind.
            </h3>
            <h3>
              Lastly, a huge thanks to the internet for Stack Overflow and
              documentations.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
