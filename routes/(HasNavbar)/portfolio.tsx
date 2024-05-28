import { ComponentChildren } from "preact";
import { Head } from "$fresh/runtime.ts";

interface PageProps {
  title: string;
  subtitle: string;
  description: string;
  arrow?: ComponentChildren;
}

interface LinkProps {
  href: string;
  text: string;
}

function Page({ title, subtitle, description, arrow }: PageProps) {
  return (
    <div class="size-full flex flex-col items-center justify-center">
      <h1 class="font-major text-9xl">{title}</h1>
      <h2 class="text-3xl">{subtitle}</h2>
      <p class="text-xl">{description}</p>
      {arrow}
    </div>
  );
}

function Link({ href, text }: LinkProps) {
  return (
    <u>
      <a class="font-bold" href={href}>
        {text}
      </a>
    </u>
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
        >
        </meta>
      </Head>

      <Page
        title="ANNIN-SITE"
        subtitle="Under heavy construction."
        description="Written in TS. Created with TSX & CSS. Built with Deno & Fresh."
        arrow=<div id="arrow" />
      />

      <Page
        title="FPS"
        subtitle="An attempt to replicate VALORANT in a Lego game."
        description="Written in luau. Built with Rojo. Ran in Roblox."
      />

      <Page
        title="MORE"
        subtitle="Commissions & work in progress projects."
        description="I'll upload media of those. Soon. Maybe."
      />

      <div class="size-full p-48 flex flex-col items-center justify-center text-center">
        <p>
          Find the source code of this website on my{" "}
          <Link
            href="https://github.com/Anninzy/annin-site"
            text="Github repo"
          />
          .
        </p>
        <p>
          You can find the source code of my other <s>abandoned</s> projects on
          {" "}
          <Link
            href="https://github.com/Anninzy"
            text="Github"
          />{" "}
          as well.
        </p>
        <p>
          I traced the icon of the website from an{" "}
          <Link
            href="https://j5daigada.tumblr.com/post/619306719958450176/whoops-my-finger-slipped-and-i-drew-modeus"
            text="artwork"
          />{" "}
          by{" "}
          <Link
            href="https://linktr.ee/j5daigada"
            text="daigada"
          />{" "}
          (content warning). Hopefully they don't mind.
        </p>
        <p>
          Lastly, a huge thanks to the internet for Stack Overflow, frameworks,
          and documentations.
        </p>
      </div>
    </>
  );
}
