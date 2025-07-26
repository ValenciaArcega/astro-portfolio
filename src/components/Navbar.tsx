import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
	PiBracketsCurlyDuotone,
	PiBrainDuotone,
	PiSunDuotone,
	PiMoonDuotone,
	PiDotsThreeCircleDuotone,
} from 'react-icons/pi';

const getInitialTheme = () => {
	if (typeof window === 'undefined') return 'light';
	const userTheme = localStorage.theme;
	const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const theme = userTheme || (systemPrefersDark ? 'dark' : 'light');

	if (theme === 'dark') {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
	return theme;
};

const Navbar = function () {
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const [theme, setTheme] = useState(getInitialTheme);

	useEffect(() => {
		const html = document.documentElement;
		html.classList.toggle('dark', theme === 'dark');
		if (theme === 'dark') html.id = 'rootDarkMode';
		else html.removeAttribute('id');

		localStorage.theme = theme;
	}, [theme]);

	const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

	return (
		<>
			<nav className='fixed top-0 !z-50 left-0 px-10 h-12 w-full bg-white/40 dark:bg-[#121212]/10 backdrop-blur-lg border-b-[1px] border-b-gray-200 flex justify-between items-center'>
				<img
					src='./favicon.webp'
					className='self-center justify-self-center h-7'
					alt='Logo on Navigation Bar'
				/>
				<button className='bg-transparent border-none outline-none' onClick={() => setIsMenuVisible(true)}>
					<PiDotsThreeCircleDuotone size={28} className='text-blue-500' />
				</button>
			</nav>
			{isMenuVisible &&
				createPortal(
					<section
						onClick={() => setIsMenuVisible(false)}
						className='fixed top-0 left-0 h-screen w-screen z-50'
					>
						<article
							onClick={(e) => e.stopPropagation()}
							className='keyframe-entering-navbar bg-white/40 dark:bg-black/20 backdrop-blur-3xl rounded-2xl shadow-lg shadow-black/5 fixed top-6 right-12 p-2'
						>
							<a href='#projects' className='no-underline border-none outline-none bg-transparent px-3 flex items-center justify-between h-10 w-[12rem] rounded-md text-base text-black dark:text-white hover:bg-blue-50 dark:hover:bg-blue-950/60'>
								Projects
								<PiBracketsCurlyDuotone className='text-blue-500 dark:text-blue-400' size={24} />
							</a>
							<a href='#experience' className='no-underline border-none outline-none bg-transparent px-3 flex items-center justify-between h-10 w-[12rem] rounded-md text-base text-black dark:text-white hover:bg-blue-50 dark:hover:bg-blue-950/60'>
								Experience
								<PiBrainDuotone className='text-blue-500 dark:text-blue-400' size={24} />
							</a>
							{theme === 'dark' ? (
								<button
									className='border-none outline-none bg-transparent px-3 flex items-center justify-between h-10 w-[12rem] rounded-md text-base hover:bg-a930 hover:cursor-pointer text-black dark:text-white'
									onClick={toggleTheme}
								>
									Light Mode
									<PiSunDuotone className='text-yellow-400' size={22} />
								</button>
							) : (
								<button
									className='border-none outline-none bg-transparent px-3 flex items-center justify-between h-10 w-[12rem] rounded-md text-base hover:bg-gray-50 hover:cursor-pointer text-black dark:text-white'
									onClick={toggleTheme}
								>
									Dark Mode
									<PiMoonDuotone className='text-black' size={24} />
								</button>
							)}
						</article>
					</section>,
					document.body
				)}
		</>
	);
};

export default Navbar;