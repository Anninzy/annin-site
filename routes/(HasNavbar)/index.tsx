import { Head } from "$fresh/runtime.ts";
import Clock from "../../islands/Clock.tsx";

export default function () {
	return (
		<>
			<Head>
				<title>About</title>
				<meta name="description" content="Oh hi."></meta>
			</Head>

			<div id="about" class="size-page position-child-center">
				<div>
					<h3>anninzy#0000</h3>
					<h4>Professional procrastinator.</h4>
					<p>It is currently <Clock /> for me.</p>
				</div>
			</div>
		</>
	);
}
