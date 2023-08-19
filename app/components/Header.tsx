import Link from 'next/link'
import React from 'react'
import style from '../styles/components/Home.module.css'

export default function Header() {
	let shortDescription = `I Am Passionate `
	let longDescription =
		'Budding front-end developer, always looking for new challenges and learning opportunities.'
	let intro = 'Hello there...'
	let fullName = 'Timotei Petre'
	const linkCV = 'https://timoteipetre.netlify.app/'
	const linkGithub = 'https://github.com/timi-petre'
	return (
		<>
			<div className="flex justify-around">
				<div className="flex flex-col justify-center gap-3">
					<p className="text-xl font-semibold text-slate-50 dark:text-white">{intro}</p>
					<h1 className="text-6xl font-semibold text-slate-50 dark:text-white">
						{fullName}
					</h1>
					<p className="text-xl font-semibold text-slate-50 dark:text-white">
						{shortDescription}
						<br className="block md:hidden" />
						<span
							className={`inline-flex h-10 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent text-2xl ${style.will_change_transform}`}
						>
							Developer
						</span>
					</p>
					<p className=" text-gray-300 dark:text-gray-400">{longDescription}</p>
					<br />
					<div className="flex">
						{/* <Link href="/#projects"> */}
						<Link href={linkGithub} target="_blank">
							<button
								type="button"
								className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ease-in duration-200"
							>
								My Work
							</button>
						</Link>
						<Link href={linkCV} target="_blank">
							<button
								type="button"
								className="text-slate-50 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-black dark:hover:bg-gray-100 dark:focus:ring-gray-800 ease-in duration-200"
							>
								Hire Me
							</button>
						</Link>
					</div>
				</div>

				<div className={`${style.blob} max-lg:hidden`}></div>
			</div>

			{/* <div className={`animate-bounce w-6 h-6 ${style.centered} max-lg:hidden`}>
				<i className={`${style.circle_parent} fa-regular fa-circle`}>
					<i className={`fa-solid fa-chevron-down ${style.arrow_child}`}></i>
				</i>
			</div> */}
		</>
	)
}
