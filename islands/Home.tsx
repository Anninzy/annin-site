import { Head } from "$fresh/runtime.ts";
import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";

const linkCorrespondingPosition = new Map();
const currentPatternPosition = signal(0);
const currentBackgroundPosition = signal(-10);
type linkProps = {
  name: string;
};

function Link(props: linkProps) {
  useEffect(() => {
    linkCorrespondingPosition.set(props.name, 0);
  }, [])

  function shiftBackgroundAndPattern() {
    currentPatternPosition.value = linkCorrespondingPosition.get(props.name)[0];
    currentBackgroundPosition.value = linkCorrespondingPosition.get(props.name)[1];
    console.log(currentBackgroundPosition.value)
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
  useEffect(() => {
    const amountOfLinks = linkCorrespondingPosition.size
    const patternPositionOffset = 100 / amountOfLinks
    const backgroundPositionOffset = 10 / amountOfLinks
    
    let iteration = 0
    linkCorrespondingPosition.forEach((value, key, map) => {
      iteration++
      map.set(key, [patternPositionOffset * iteration, backgroundPositionOffset * iteration])
      console.log(backgroundPositionOffset * iteration)
    })
  }, [])
  
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
        <img id="background" src="/background.jpg" style={{ top: `${currentBackgroundPosition}%` }} />
      </div>
    </>
  );
}
