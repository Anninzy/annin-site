import { IS_BROWSER } from "$fresh/runtime.ts";

export default function () {
  if (!IS_BROWSER) return <></>;

  if (!localStorage.getItem("useLightTheme")) return <></>;

  document.documentElement.classList.remove("dark");

  return <></>;
}
