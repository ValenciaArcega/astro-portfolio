
export function IconClose({ height, stroke }: { height: number, stroke: string }) {
	return <svg height={height} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
	</svg>
}