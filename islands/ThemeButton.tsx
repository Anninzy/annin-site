import { useSignal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function () {
  const icon = useSignal("moon");

  if (IS_BROWSER) {
    if (localStorage.getItem("useLightTheme")) {
      icon.value = "sun";
    } else {
      icon.value = "moon";
    }
  }

  function changeTheme() {
    const rootClassList = document.documentElement.classList;

    if (localStorage.getItem("useLightTheme")) {
      localStorage.removeItem("useLightTheme");
      rootClassList.add("dark");
      icon.value = "moon";
    } else {
      localStorage.setItem("useLightTheme", "true");
      rootClassList.remove("dark");
      icon.value = "sun";
    }
  }

  return (
    <button onClick={changeTheme} class="ml-auto aspect-square h-full">
      <img class="dark:invert" src={`/${icon}.svg`} />
    </button>
  );
}
