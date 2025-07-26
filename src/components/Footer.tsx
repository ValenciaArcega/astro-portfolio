import { PiGithubLogoDuotone, PiLinkedinLogoDuotone } from 'react-icons/pi';

const Footer = function () {
	return <footer className="h-20 mt-52 mb-8 flex flex-col gap-y-2 items-center">
		<main className='flex gap-x-4'>
			<a
				className="decoration-transparent"
				target="_blank"
				href="https://www.linkedin.com/in/luis-angel-valencia-arcega-4827b9239"
			>
				<PiLinkedinLogoDuotone className='text-black dark:text-gray-400 hover:!text-blue-400' size={50} />
			</a>
			<a
				className="decoration-transparent"
				target="_blank"
				href="https://github.com/ValenciaArcega"
			>
				<PiGithubLogoDuotone className='text-black dark:text-gray-400 hover:!text-blue-400' size={50} />
			</a>
		</main>
		<p className="text-base text-black dark:text-white">2025. Valencia Arcega</p>
	</footer>;

};

export default Footer;
