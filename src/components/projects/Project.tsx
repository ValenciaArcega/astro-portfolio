import { SVGStar, SVGRocket } from "../icons/generals";

interface IProject {
	description: string;
	name: string;
	urlImage: string;
	urlSite: string;
	urlRepo: string;
}

export function Project({
	description,
	name,
	urlImage,
	urlSite,
	urlRepo
}: IProject) {
	return <article className="h-fit w-[21rem] p-8 px-4 rounded-2xl grid items-center justify-items-center gap-2 bg-gradient-to-tl from-[#101010] to-[#1b1b1b]">
		<img
			className="rounded-xl"
			src={urlImage}
			alt={`${name} web site logo`}
			width="64"
		/>
		<p className="text-center text-base text-gray-300">
			<span className="text-indigo-300 font-medium">{name}</span>{" "}{description}.
		</p>

		<footer className="mt-0 flex flex-col gap-4">
			<a
				className="flex max-h-10 py-2 w-60 rounded-xl bg-white items-center justify-center decoration-transparent text-black gap-x-2 hover:underline hover:decoration-black hover:cursor-pointer"
				target="_blank"
				href={urlSite}
			>
				<SVGRocket />
				Discover {name}
			</a>
			<a
				className="decoration-transparent self-center text-white bg-none hover:underline hover:decoration-white"
				target="_blank" href={urlRepo}>
				Give <SVGStar /> in Github
			</a>
		</footer>
	</article>;
}
