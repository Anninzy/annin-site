import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";

const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "Etc/GMT-8",
});

export default function () {
  function getClockString() {
    return dateTimeFormat.format(new Date());
  }

  function setTimeValue() {
    time.value = getClockString();
  }

  const time = useSignal(getClockString());
  if (IS_BROWSER) setInterval(setTimeValue, 1000);

  return <p class="text-xl">It is currently {time} for me.</p>;
}
