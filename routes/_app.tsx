import { PageProps } from "$fresh/server.ts";

export default function ({ Component }: PageProps) {
	return (
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="stylesheet" href="/styles.css" />
			</head>

			<body>
				<Component />
			</body>
		</html>
	);
}
