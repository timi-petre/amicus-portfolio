import React from 'react'
import FooterLinks from './utils/FooterLinks'

export default function Footer() {
	const links: any = []
	const linksSocial: any = []
	Object.entries(FooterLinks).forEach(([key, value]) => {
		links.push(key)
		linksSocial.push(value)
	})

	return (
		<>
			<footer className="flex justify-between items-center w-full h-24">
				<div className="flex items-center space-x-2">
					{links.map((link: any, index: any) => (
						<a
							href={linksSocial[index]}
							key={index}
							className="text-lg text-slate-400 hover:text-slate-100 ease-in duration-200"
						>
							<i className={`fa-brands fa-${link}`}></i>
						</a>
					))}
				</div>
				<p className="text-center text-slate-400">
					© {new Date().getFullYear()} Copyright. All rights reserved.
				</p>
			</footer>
		</>
	)
}
