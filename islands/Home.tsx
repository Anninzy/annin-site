import { Head } from "$fresh/runtime.ts";
import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";

const linkPositions = new Map();
const currentPatternPosition = signal(0);
let lastUpdatedSize = 0;
type linkProps = {
  name: string;
};

function Link(props: linkProps) {
  // START OF TODO
  // figure out how to get the amount of links there are, and do positionOffset = 100 / amount_of_links, then for link 1, linkPositions.set(link1, positionOffset), link 2, linkPositions.set(link2, positionOffset * 2), link 3, linkPositions.set(link3, positionOffset * 3) and so on
  if (!linkPositions.get(props.name)) {
    linkPositions.set(props.name, 0);
  }

  if (linkPositions.size > lastUpdatedSize) {
    lastUpdatedSize = linkPositions.size;
    console.log(lastUpdatedSize);
  } else {
    console.log(linkPositions.size);
  }
  // END OF TODO

  function shiftBackgroundAndPattern() {
    currentPatternPosition.value = linkPositions.get(props.name);
  }

  return (
    <a
      href={`/${props.name.toLowerCase()}`}
      onMouseOver={shiftBackgroundAndPattern}
    >
      {props.name}
    </a>
  );
}

function EndOfLinks() {
  console.log("test");
}

export default function () {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div id="menu" class="pageSize verticalCenter">
        <div id="items">
          <Link name="Apps" />
          <Link name="Blog" />
          <Link name="Portfolio" />
          <Link name="About" />
        </div>

        <div
          id="pattern"
          style={{ backgroundPosition: `0% -${currentPatternPosition}%` }}
        />
        <img id="background" src="/background.jpg" />
      </div>
    </>
  );
}
