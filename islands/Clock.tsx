import { IS_BROWSER } from "$fresh/runtime.ts";
import { signal } from "@preact/signals";

const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "Etc/GMT-8",
});

function getClockString() {
  return dateTimeFormat.format(new Date());
}

const time = signal(getClockString());

export default function () {
  if (IS_BROWSER) setInterval(time.value = getClockString(), 1000);
  return <span>{time}</span>;
}
