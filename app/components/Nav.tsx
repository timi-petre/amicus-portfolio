'use client'

import Link from 'next/link'
import { useState } from 'react'

const sections = [
	['Focus', '#focus'],
	['Experience', '#experience'],
	['Toolbox', '#toolbox'],
	['Built', '#built'],
	['Contact', '#contact'],
]

export default function Nav() {
	const [open, setOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 border-b border-rule bg-ink/80 backdrop-blur-md">
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
				<Link href="#top" className="group flex items-baseline gap-2">
					<span className="font-display text-lg tracking-tight">Timotei Petre</span>
					<span className="hidden font-mono text-[0.625rem] uppercase tracking-[0.22em] text-paper-faint transition-colors group-hover:text-amber sm:inline">
						IAM
					</span>
				</Link>

				<ul className="hidden items-center gap-7 md:flex">
					{sections.map(([label, href]) => (
						<li key={href}>
							<a
								href={href}
								className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-paper-dim transition-colors hover:text-amber"
							>
								{label}
							</a>
						</li>
					))}
				</ul>

				<button
					type="button"
					aria-expanded={open}
					aria-label={open ? 'Close menu' : 'Open menu'}
					onClick={() => setOpen(!open)}
					className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
				>
					<span
						className={`h-px w-5 bg-paper transition-transform duration-300 ${open ? 'translate-y-[6px] rotate-45' : ''}`}
					/>
					<span
						className={`h-px w-5 bg-paper transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
					/>
					<span
						className={`h-px w-5 bg-paper transition-transform duration-300 ${open ? '-translate-y-[6px] -rotate-45' : ''}`}
					/>
				</button>
			</nav>

			{open && (
				<ul className="border-t border-rule px-6 pb-6 pt-2 md:hidden">
					{sections.map(([label, href]) => (
						<li key={href} className="border-b border-rule-soft last:border-0">
							<a
								href={href}
								onClick={() => setOpen(false)}
								className="block py-4 font-mono text-xs uppercase tracking-[0.2em] text-paper-dim"
							>
								{label}
							</a>
						</li>
					))}
				</ul>
			)}
		</header>
	)
}
