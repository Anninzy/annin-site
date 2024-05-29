import { IS_BROWSER } from "$fresh/runtime.ts";

export default function () {
  function checkTheme() {
    console.log("test");
    if (localStorage.getItem("useLightTheme")) {
      document.documentElement.classList.remove("dark");
    }
  }
  checkTheme();

  return <script onLoad={checkTheme} />;
}
