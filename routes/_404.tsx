import { Head } from "$fresh/runtime.ts";
import Navbar from "../components/Navbar.tsx";

export default function () {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>

      <Navbar />

      <div class="pageSize center">
        <div>
          <h1>&lt;404&gt;</h1>
          <h2>Where nothing but the abyss resides.</h2>
        </div>
      </div>
    </>
  );
}
