const FONTS_URL = "https://fonts.bunny.net/css?family=major-mono-display:400|space-mono:100,700&display=swap"

function loadFont(event: Event) {
	const target = event.target as HTMLLinkElement;
	target.onload = null
	target.rel = 'stylesheet'
}

export default function () {
	return (
		<>
			<link rel="preload" href={FONTS_URL} as="style" onLoad={loadFont} />
			<noscript><link rel="stylesheet" href={FONTS_URL} /></noscript>
		</>
	);
}