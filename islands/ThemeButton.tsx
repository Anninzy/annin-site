export default function () {
  function changeTheme() {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }

  return <button onClick={changeTheme} class="ml-auto aspect-square h-full">o</button>;
}
