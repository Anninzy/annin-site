import { Head } from "$fresh/runtime.ts";
import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";

const linkCorrespondingPatternPosition = new Map();
const currentPatternPosition = signal(0);
type linkProps = {
  name: string;
};

function Link(props: linkProps) {
  useEffect(() => {
    linkCorrespondingPatternPosition.set(props.name, 0);
  }, [])

  function shiftBackgroundAndPattern() {
    currentPatternPosition.value = linkCorrespondingPatternPosition.get(props.name);
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
  // for link 1, linkPositions.set(link1, positionOffset), link 2, linkPositions.set(link2, positionOffset * 2), and so on
  const positionOffset = 100 / linkCorrespondingPatternPosition.size
  return (<script />)
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
