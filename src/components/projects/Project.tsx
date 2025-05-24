import { SVGRocket } from "../icons/generals";
import { PiStarDuotone } from "react-icons/pi";

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
	return <article className="h-fit w-[21rem] p-8 px-4 rounded-2xl grid items-center justify-items-center gap-2 bg-gradient-to-tl from-[#f2f2f7] to-[#fff] dark:bg-gradient-to-tl dark:from-[#101010] dark:to-[#1b1b1b]">
		<img
			className="rounded-xl shadow-sm"
			src={urlImage}
			alt={`${name} web site logo`}
			width="64"
		/>
		<p className="text-center text-base text-gray-700 dark:text-gray-300">
			<strong className="text-indigo-400 dark:text-indigo-300 italic">
				{name}
			</strong>{" "}{description}.
		</p>

		<footer className="mt-3 flex flex-col gap-y-6">
			<a
				className="flex max-h-10 py-3 w-60 rounded-xl bg-white shadow-md decoration-transparent hover:shadow-none transition-all duration-[1s] hover:scale-[0.97] items-center justify-center text-black gap-x-3 hover:underline hover:cursor-pointer"
				target="_blank"
				href={urlSite}
			>
				<SVGRocket />
				Discover {name}
			</a>
			<a
				className="decoration-transparent self-center text-gray-600 hover:text-black dark:text-gray-400 hover:dark:text-white bg-none hover:underline hover:decoration-black hover:dark:decoration-white"
				target="_blank" href={urlRepo}>
				Give <PiStarDuotone fill='orange' size={18} /> in Github
			</a>
		</footer>
	</article>;
}	
