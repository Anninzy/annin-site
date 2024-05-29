export default function () {
  if (localStorage.getItem("useLightTheme")) {
    document.documentElement.classList.remove("dark");
  }

  return <></>;
}
