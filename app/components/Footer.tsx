import Link from 'next/link'
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
			<div className="min-h-screen flex flex-col relative pb-20">
				<div className="mt-auto">
					<footer className="footer absolute bottom-0 flex justify-between items-center w-full h-24">
						<div className="flex items-center space-x-2">
							{links.map((link: any, index: any) => (
								<Link
									href={linksSocial[index]}
									target="_blank"
									key={index}
									className="text-lg text-slate-400 hover:text-slate-100 ease-in duration-200"
								>
									<i className={`fa-brands fa-${link}`}></i>
								</Link>
							))}
						</div>
						<p className="text-center text-slate-400">
							© {new Date().getFullYear()} Copyright. All rights reserved.
						</p>
					</footer>
				</div>
			</div>
		</>
	)
}
