export default function () {
  function changeTheme() {
    console.log(localStorage.getItem("useLightTheme"))
    const rootClassList = document.documentElement.classList

    if (localStorage.getItem("useLightTheme")) {
      localStorage.removeItem("useLightTheme")
      rootClassList.add("dark");
    } else {
      localStorage.setItem("useLightTheme", "true")
      rootClassList.remove("dark");
    }
  }

  return (
    <button onClick={changeTheme} class="ml-auto aspect-square h-full">
      o
    </button>
  );
}
