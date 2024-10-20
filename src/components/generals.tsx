
type SVGProps = {
	height: number | string;
	width?: number | string;
	style?: React.CSSProperties;
	color?: string;
}

export function IconSun({
	height = 64,
	color = "yellow",
	style
}: SVGProps) {
	return (
		<svg height={height} style={{ ...style }} viewBox="0 0 20 20"><g fill={color}><path d="M14 10.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-13 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1m15 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m-1.5 4a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L14.5 15.914a1 1 0 0 1 0-1.414m-11-11a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L3.5 4.914a1 1 0 0 1 0-1.414m7 12.5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m0-15a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m6.828 2.5a1 1 0 0 1 0 1.414l-1.414 1.414A1 1 0 1 1 14.5 4.914L15.914 3.5a1 1 0 0 1 1.414 0m-11 11a1 1 0 0 1 0 1.414l-1.414 1.414A1 1 0 1 1 3.5 15.914L4.914 14.5a1 1 0 0 1 1.414 0" opacity=".2" /><path fill-rule="evenodd" d="M10 13.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5" clip-rule="evenodd" /><rect width="1" height="3" x="1" y="10.5" rx=".5" transform="rotate(-90 1 10.5)" /><rect width="1" height="3" x="16" y="10.5" rx=".5" transform="rotate(-90 16 10.5)" /><rect width="1" height="3" x="14" y="14.707" rx=".5" transform="rotate(-45 14 14.707)" /><rect width="1" height="3" x="3" y="3.707" rx=".5" transform="rotate(-45 3 3.707)" /><rect width="1" height="3" x="9.5" y="16" rx=".5" /><rect width="1" height="3" x="9.5" y="1" rx=".5" /><rect width="1" height="3" x="16.121" y="3" rx=".5" transform="rotate(45 16.121 3)" /><rect width="1" height="3" x="5.121" y="14" rx=".5" transform="rotate(45 5.121 14)" /></g></svg>
	)
}

export function IconMoon({
	height = 64,
	color,
	style
}: SVGProps) {
	return <svg height={height} viewBox="0 0 20 20" style={style}><g fill={color}><path d="M12.612 3.474a5 5 0 0 0-2.887 3.55a5.005 5.005 0 0 0 3.85 5.94A5 5 0 0 0 19 10.47c.245-.447.923-.285.939.224a8.5 8.5 0 0 1-.184 2.047c-.978 4.6-5.493 7.538-10.085 6.562S2.15 13.806 3.127 9.206c.92-4.326 4.99-7.22 9.345-6.686c.504.062.605.75.14.954" opacity=".2" /><path fillRule="evenodd" d="M8.275 6.024a5 5 0 0 1 2.887-3.55c.465-.205.364-.892-.14-.954C6.667.986 2.597 3.88 1.677 8.206c-.977 4.6 1.952 9.12 6.544 10.097c4.592.976 9.107-1.962 10.085-6.562a8.6 8.6 0 0 0 .184-2.047c-.016-.509-.694-.671-.939-.224a5 5 0 0 1-5.427 2.494a5.005 5.005 0 0 1-3.849-5.94m-5.62 2.39a7.52 7.52 0 0 1 6.618-5.923c-.989.844-1.694 2-1.976 3.325a6.005 6.005 0 0 0 4.62 7.126a6 6 0 0 0 5.446-1.584l-.035.175c-.863 4.06-4.847 6.653-8.899 5.792c-4.051-.862-6.636-4.85-5.773-8.91" clipRule="evenodd" /></g></svg>
}
