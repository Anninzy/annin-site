import { PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function ({ Component }: PageProps) {
	return (
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="preconnect" href="https://fonts.bunny.net" />
				<link href="https://fonts.bunny.net/css?family=major-mono-display:400|space-mono:400,400i,700,700i&display=swap" rel="stylesheet" />
				<link rel="stylesheet" href={asset("/styles.css")} />
			</head>

			<body>
				<Component />
			</body>
		</html>
	);
}
