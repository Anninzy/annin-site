import { signal } from "@preact/signals";

const time = signal("LO:AD:IN");
const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "Etc/GMT-8",
});

function setClock() {
  time.value = dateTimeFormat.format(new Date());
}
setClock();
//setInterval(setClock, 1000);

export default function () {
  return <span>{time}</span>;
}