import { PiGithubLogoDuotone, PiLinkedinLogoDuotone } from 'react-icons/pi';

const Footer = function () {
	return <footer className="h-20 mt-52 mb-24 flex flex-col gap-y-2 items-center">
		<main className='flex gap-x-4'>
			<a
				className="decoration-transparent"
				target="_blank"
				href="https://www.linkedin.com/in/luis-angel-valencia-arcega-4827b9239"
			>
				<PiLinkedinLogoDuotone
					className='text-gray-400 hover:text-blue-400! transition-colors duration-700'
					size={48} />
			</a>
			<a
				className="decoration-transparent"
				target="_blank"
				href="https://github.com/ValenciaArcega"
			>
				<PiGithubLogoDuotone
					className='text-gray-400 hover:text-blue-400! transition-colors duration-700'
					size={48} />
			</a>
		</main>
		<p className="text-base text-white">2026. Valencia Arcega</p>
	</footer>;

};

export default Footer;
