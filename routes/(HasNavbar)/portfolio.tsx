import { ComponentChildren } from "preact";
import { Head } from "$fresh/runtime.ts";

interface PageProps {
  heading: string;
  subheading: string;
  description: string;
  arrow?: ComponentChildren;
}

function Page({ heading, subheading, description, arrow }: PageProps) {
  return (
    <div class="size-full flex flex-col items-center justify-center">
      <h1 class="font-major text-center text-9xl">{heading}</h1>
      <h2 class="text-center text-3xl">{subheading}</h2>
      <p class="text-center text-xl">{description}</p>
      {arrow}
    </div>
  );
}

export default function () {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Hey, welcome. Take a look at what I made."
        />
      </Head>

      <Page
        heading="ANNIN-SITE"
        subheading="Under heavy construction."
        description="Written in TSX. Styled with Tailwind. Built with Fresh."
        arrow={
          <div class="border-black dark:border-white absolute bottom-[10%] w-[5vmin] aspect-square border-b-[0.5vmin] border-r-[0.5vmin] rotate-45" />
        }
      />

      <Page
        heading="FPS"
        subheading="An attempt to replicate VALORANT in a Lego game."
        description="Written in luau. Built with Rojo."
      />

      <Page
        heading="MORE"
        subheading="Commissions & work in progress projects."
        description="I'll upload media of those. Soon. Maybe. Perhaps."
      />

      <div class="size-full p-48 flex flex-col items-center justify-center text-center text-xl">
        <p>
          Find the source code of this website on my{" "}
          <a href="https://github.com/Anninzy/annin-site">Github repo</a>.
        </p>
        <p>
          You can find the source code of my other <s>abandoned</s> projects on{" "}
          <a href="https://github.com/Anninzy">Github</a> as well.
        </p>
        <p>
          I traced the icon of the website from an{" "}
          <a href="https://j5daigada.tumblr.com/post/619306719958450176/whoops-my-finger-slipped-and-i-drew-modeus">
            artwork
          </a>{" "}
          by <a href="https://linktr.ee/j5daigada">daigada</a> (content
          warning). Hopefully they don't mind.
        </p>
        <p>
          <a href="https://www.svgrepo.com/svg/491493/sun">Sun</a> &{" "}
          <a href="https://www.svgrepo.com/svg/491454/moon">moon</a> (fill
          colour changed to #FFFFFF) SVGs from{" "}
          <a href="https://www.svgrepo.com/">SVG Repo</a> under the{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/">
            CC Attribution License
          </a>
          .
        </p>
        <p>
          Lastly, a huge thanks to the internet for Stack Overflow, frameworks,
          and documentations.
        </p>
      </div>
    </>
  );
}
