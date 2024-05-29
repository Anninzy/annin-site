import { useSignal } from "@preact/signals";

export default function () {
  const icon = useSignal("moon");

  if (localStorage.getItem("useLightTheme")) {
    icon.value = "sun";
  } else {
    icon.value = "moon";
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
