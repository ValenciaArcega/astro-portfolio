import clsx from "clsx";
import { PiAndroidLogoDuotone, PiAppleLogoDuotone, PiAppStoreLogoDuotone, PiAtomDuotone, PiBrainDuotone, PiButterflyDuotone, PiGithubLogoDuotone, PiGlobeSimpleDuotone, PiGooglePlayLogoDuotone, PiRocketLaunchDuotone } from "react-icons/pi";

const tintClasses: Record<string, string> = {
	green: "text-green-600",
	yellow: "text-yellow-500",
	blue: 'text-blue-500'
};

interface IProject {
	name: string;
	ankerRepo?: string;
	platform: 'multiplatform' | 'android' | 'ios' | 'web';
	tint: 'green' | 'yellow' | 'blue';
	urlAppStore?: string;
	urlImage?: string;
	urlPlayStore?: string;
	urlWeb?: string;
	authorsBackend?: string;
	authorsFrontend?: string;
	poweredBy?: string;
}

const Project = function (props: IProject) {
	const tint = props.tint;

	const tintColor = tintClasses[tint] || "text-gray-600";
	const ankerStore = `w-[46%] text-black dark:text-white visited:text-black flex items-center gap-x-2 px-3 rounded-xl duration-700 underline hover:cursor-pointer ${tint === 'green'
		? 'hover:text-green-500 dark:hover:text-green-300'
		: tint === 'yellow'
			? 'hover:text-yellow-500 dark:hover:text-yellow-300'
			: 'hover:text-blue-500 dark:hover:text-blue-300'
		}`;

	return <article
		className='mb-12 mt-0 group bg-white dark:bg-transparent duration-500 w-[94%] sm:w-100 min-h-64 py-2 flex flex-col justify-center items-center relative rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-black/10 hover:-translate-y-2 border border-solid border-a910'
	>
		<svg
			viewBox='0 0 200 200'
			className={`absolute blur z-10 duration-700 group-hover:blur-none dark:group-hover:blur-sm group-hover:scale-105 ${tint === 'green'
				? 'fill-teal-50 dark:fill-teal-500/10'
				: tint === 'yellow'
					? 'fill-yellow-500/10 dark:fill-yellow-500/10'
					: 'fill-blue-300/20 dark:fill-blue-500/10'
				}`}
		>
			<path
				transform='translate(100 100)'
				d='M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z'
			></path>
		</svg>

		<main className='z-20 flex flex-col px-6 py-4 w-full'>
			<div className='flex gap-x-2 absolute top-4 right-4'>
				{props.platform === 'multiplatform'
					? <>
						<PiAppleLogoDuotone size={25} className='text-gray-600 dark:text-gray-200' />
						<PiAndroidLogoDuotone size={28} className='text-green-500 dark:text-green-300' />
					</>
					: props.platform === 'android'
						? <PiAndroidLogoDuotone size={28} className={clsx(tintColor)} />
						: props.platform === 'ios'
							? <PiAppleLogoDuotone size={25} className='text-gray-600 ' />
							: <PiGlobeSimpleDuotone size={28} className='text-blue-500 ' />}
			</div>

			<div
				className='h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center'
			>
				<img
					src={props.urlImage}
					alt={`${props.name} logo`}
					className='w-9' />
			</div>
			<h1
				className='font-semibold text-black dark:text-white mt-2 text-4xl customTitle tracking-wider'
			>
				{props.name}
			</h1>
			{props.platform === 'web'
				? <>
					<p className='text-sm text-gray-400 mt-4'>
						Behind the keyboard
					</p>
					<div className='flex items-center gap-x-2 mt-6'>
						<PiAtomDuotone size={24} className={clsx(tintColor)} />
						<p className='text-black dark:text-white text-sm'>Developed by {props.authorsFrontend ?? 'Angel Valencia'}</p>
					</div>
				</>
				: <>
					<p className='text-sm text-gray-400 mt-4'>
						The brains behind the keyboard.
					</p>
					<div className='flex items-center gap-x-2 mt-2'>
						<PiAtomDuotone size={24} className={clsx(tintColor)} />

						<div
							className='flex justify-between w-full items-center text-black dark:text-white'
						>
							<span>App</span>
							<p className='text-xs'>{props.authorsFrontend ?? 'Angel Valencia'}</p>
						</div>
					</div>
					<div className='flex items-center gap-x-2 mt-2'>
						<PiBrainDuotone size={24} className={clsx(tintColor)} />
						<div
							className='flex justify-between w-full items-center text-black dark:text-white'
						>
							<span>Backend</span>
							<p className='text-xs'>{props.authorsBackend}</p>
						</div>
					</div>
					{props.poweredBy && <div className='flex items-center gap-x-2 mt-8'>
						<PiButterflyDuotone size={24} className={clsx(tintColor)} />
						<p className='text-gray-600 dark:text-white text-xs'>Powered by {props.poweredBy}</p>
					</div>}
				</>}

			<footer className='flex justify-between mt-16'>
				{props.platform === 'multiplatform'
					? <>
						<a
							target='_blank'
							href={props.urlAppStore}
							className={ankerStore}
						>
							<PiAppStoreLogoDuotone size={24} />
							Download
						</a>
						<a
							target='_blank'
							href={props.urlPlayStore}
							className={ankerStore}
						>
							<PiGooglePlayLogoDuotone size={24} />
							Download
						</a>
					</> : props.platform === 'web'
					&& <>
						<a
							target='_blank'
							href={props.ankerRepo}
							className={ankerStore}
						>
							<PiGithubLogoDuotone size={24} />
							Give a Star
						</a>
						<a
							target='_blank'
							href={props.urlWeb}
							className={ankerStore}
						>
							<PiRocketLaunchDuotone size={24} />
							Launch
						</a>
					</>
				}
			</footer>
		</main>
	</article >;
};

export default Project;
