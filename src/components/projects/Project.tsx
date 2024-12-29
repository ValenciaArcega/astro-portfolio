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

		<footer className="wrapperBtnsProjectMain">
			<a
				className="flex max-h-10 gap-[.7rem]"
				target="_blank"
				href={urlSite}
			>
				<SVGRocket />
				Discover {name}
			</a>
			<a target="_blank" href={urlRepo}>
				Give <SVGStar /> in Github
			</a>
		</footer>
	</article>;
}
