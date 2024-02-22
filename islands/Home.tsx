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
  console.log("end of links")
  const positionOffset = 100 / linkCorrespondingPatternPosition.size
  let iteration = 0
  function setLinkCorrespondingPatternPosition(value, key, map) {
    iteration++
    linkCorrespondingPatternPosition.set(key, positionOffset * iteration)
    console.log(`[${key}] = ${positionOffset * iteration}`);
  }
  linkCorrespondingPatternPosition.forEach(setLinkCorrespondingPatternPosition)
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
          <EndOfLinks />
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
