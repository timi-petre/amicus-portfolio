import { cv, profile } from '../content'

const links = [
	['CV', cv.href],
	['LinkedIn', profile.linkedin],
	['GitHub', profile.github],
	['Email', `mailto:${profile.email}`],
]

export default function Footer() {
	return (
		<footer className="border-t border-rule">
			<div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-10 lg:px-10">
				<p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-paper-faint">
					© {new Date().getFullYear()} {profile.name}
				</p>
				<ul className="flex flex-wrap items-center gap-6">
					{links.map(([label, href]) => (
						<li key={label}>
							<a
								href={href}
								target={href.startsWith('http') ? '_blank' : undefined}
								rel="noopener noreferrer"
								className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-paper-dim transition-colors hover:text-amber"
							>
								{label}
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}
