import Image from 'next/image'

import { alsoBuilt, credentials, experience, focus, log, profile, toolbox } from './content'

function SectionHead({ n, title, aside }: { n: string; title: string; aside?: string }) {
	return (
		<div className="reveal mb-12">
			<div className="flex flex-wrap items-baseline justify-between gap-3">
				<h2 className="flex items-baseline gap-4">
					<span className="eyebrow">{n}</span>
					<span className="font-display text-3xl tracking-tight sm:text-4xl">{title}</span>
				</h2>
				{aside && <p className="eyebrow">{aside}</p>}
			</div>
			<div className="draw mt-5 h-px w-full bg-rule" />
		</div>
	)
}

export default function Home() {
	return (
		<div id="top" className="mx-auto max-w-6xl px-6 lg:px-10">
			{/* ── Hero ─────────────────────────────────────────────── */}
			<section className="grid gap-16 py-20 lg:grid-cols-12 lg:gap-10 lg:py-32">
				<div className="lg:col-span-7">
					<p className="rise eyebrow" style={{ '--i': 0 } as React.CSSProperties}>
						{profile.role} · {profile.discipline}
					</p>

					<h1
						className="rise mt-6 font-display text-[clamp(2.75rem,8vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.02em]"
						style={{ '--i': 1 } as React.CSSProperties}
					>
						Who gets in,
						<br />
						<span className="text-amber">and why.</span>
					</h1>

					<p
						className="rise mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-paper-dim"
						style={{ '--i': 2 } as React.CSSProperties}
					>
						{profile.summary}
					</p>

					<div
						className="rise mt-10 flex flex-wrap items-center gap-x-3 gap-y-3"
						style={{ '--i': 3 } as React.CSSProperties}
					>
						<a
							href={`mailto:${profile.email}`}
							className="group inline-flex items-center gap-2 bg-paper px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-ink transition-colors hover:bg-amber"
						>
							Get in touch
							<span className="transition-transform duration-300 group-hover:translate-x-1">
								→
							</span>
						</a>
						<a
							href={profile.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center border border-rule px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-paper-dim transition-colors hover:border-amber hover:text-amber"
						>
							LinkedIn
						</a>
						<a
							href={profile.github}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center border border-rule px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-paper-dim transition-colors hover:border-amber hover:text-amber"
						>
							GitHub
						</a>
					</div>

					<p
						className="rise mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-paper-faint"
						style={{ '--i': 4 } as React.CSSProperties}
					>
						{profile.location} · {profile.relocation}
					</p>
				</div>

				{/* The one thing worth remembering: a day of access operations, as a log. */}
				<div className="lg:col-span-5">
					<div
						className="rise border border-rule bg-raised/60 backdrop-blur-sm"
						style={{ '--i': 3 } as React.CSSProperties}
					>
						<div className="flex items-center justify-between border-b border-rule px-4 py-3">
							<span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-paper-faint">
								sign-in &amp; audit log
							</span>
							<span className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-paper-faint">
								<span className="h-1.5 w-1.5 rounded-full bg-granted" />
								live
							</span>
						</div>

						<ul className="divide-y divide-[color:var(--rule-soft)]">
							{log.map((entry, i) => (
								<li
									key={entry.time}
									className="log-row flex gap-3 px-4 py-3.5"
									style={{ '--i': i } as React.CSSProperties}
								>
									<span className="font-mono text-[0.6875rem] leading-5 text-paper-faint">
										{entry.time}
									</span>
									<span className="flex-1 text-[0.8125rem] leading-5 text-paper-dim">
										{entry.event}
									</span>
									<span
										className={`font-mono text-[0.625rem] leading-5 ${
											entry.state === 'ok' ? 'text-granted' : 'text-amber'
										}`}
									>
										{entry.state === 'ok' ? '✓' : '…'}
									</span>
								</li>
							))}
							<li
								className="log-row flex gap-3 px-4 py-3.5"
								style={{ '--i': log.length } as React.CSSProperties}
							>
								<span className="font-mono text-[0.6875rem] leading-5 text-paper-faint">
									now
								</span>
								<span className="caret font-mono text-[0.8125rem] leading-5 text-amber">
									▍
								</span>
							</li>
						</ul>
					</div>
					<p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-paper-faint">
						An ordinary day, abbreviated
					</p>
				</div>
			</section>

			{/* ── Focus ────────────────────────────────────────────── */}
			<section id="focus" className="scroll-mt-24 py-20">
				<SectionHead n="01" title="What I do" aside="Entra ID · AD · Auth0" />
				<div className="grid gap-px bg-rule sm:grid-cols-2">
					{focus.map((f) => (
						<article
							key={f.n}
							className="reveal group bg-ink p-8 transition-colors duration-300 hover:bg-raised"
						>
							<span className="eyebrow transition-colors group-hover:text-amber">
								{f.n}
							</span>
							<h3 className="mt-4 font-display text-2xl tracking-tight">{f.title}</h3>
							<p className="mt-3 text-[0.9375rem] leading-relaxed text-paper-dim">
								{f.body}
							</p>
						</article>
					))}
				</div>
			</section>

			{/* ── Experience ───────────────────────────────────────── */}
			<section id="experience" className="scroll-mt-24 py-20">
				<SectionHead n="02" title="Experience" aside="2019 - present" />
				<ol>
					{experience.map((job) => (
						<li
							key={job.company}
							className="reveal grid gap-4 border-t border-rule py-10 lg:grid-cols-12 lg:gap-10"
						>
							<div className="lg:col-span-4">
								<p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-paper-faint">
									{job.period}
								</p>
								<h3 className="mt-3 flex items-center gap-3 font-display text-2xl tracking-tight">
									{job.company}
									{job.current && (
										<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-granted" />
									)}
								</h3>
								<p className="mt-1 text-sm text-paper-dim">{job.role}</p>
								<p className="mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-paper-faint">
									{job.place}
								</p>
							</div>
							<ul className="space-y-3 lg:col-span-8">
								{job.points.map((p) => (
									<li
										key={p}
										className="relative pl-6 text-[0.9375rem] leading-relaxed text-paper-dim before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-3 before:bg-amber"
									>
										{p}
									</li>
								))}
							</ul>
						</li>
					))}
				</ol>
			</section>

			{/* ── Toolbox ──────────────────────────────────────────── */}
			<section id="toolbox" className="scroll-mt-24 py-20">
				<SectionHead n="03" title="Toolbox" aside="What I work with" />
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
					{toolbox.map((group) => (
						<div key={group.group} className="reveal">
							<h3 className="eyebrow">{group.group}</h3>
							<ul className="mt-5 space-y-2.5">
								{group.items.map((item) => (
									<li
										key={item}
										className="text-[0.875rem] leading-snug text-paper-dim"
									>
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			{/* ── Also built ───────────────────────────────────────── */}
			<section id="built" className="scroll-mt-24 py-20">
				<SectionHead n="04" title="Also built" aside="Before and beside the day job" />
				<div className="grid gap-px bg-rule sm:grid-cols-2">
					{alsoBuilt.map((p) => {
						const inner = (
							<>
								<div className="flex items-baseline justify-between gap-4">
									<h3 className="font-display text-xl tracking-tight">
										{p.title}
									</h3>
									{p.href && (
										<span className="font-mono text-xs text-paper-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber">
											↗
										</span>
									)}
								</div>
								<p className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-paper-faint">
									{p.note}
								</p>
								<p className="mt-4 text-[0.9375rem] leading-relaxed text-paper-dim">
									{p.body}
								</p>
							</>
						)
						const cls =
							'reveal group block bg-ink p-8 transition-colors duration-300 hover:bg-raised'
						return p.href ? (
							<a
								key={p.title}
								href={p.href}
								target="_blank"
								rel="noopener noreferrer"
								className={cls}
							>
								{inner}
							</a>
						) : (
							<div key={p.title} className={cls}>
								{inner}
							</div>
						)
					})}
				</div>
			</section>

			{/* ── Credentials ──────────────────────────────────────── */}
			<section className="py-20">
				<SectionHead n="05" title="Credentials" />
				<div className="grid gap-12 lg:grid-cols-12">
					<div className="reveal lg:col-span-4">
						<h3 className="eyebrow">Certifications</h3>
						<ul className="mt-5 space-y-2.5">
							{credentials.certifications.map((c) => (
								<li key={c} className="text-[0.9375rem] leading-snug text-paper-dim">
									{c}
								</li>
							))}
						</ul>
						<h3 className="eyebrow mt-10">Languages</h3>
						<ul className="mt-5 space-y-2.5">
							{credentials.languages.map((l) => (
								<li key={l} className="text-[0.9375rem] leading-snug text-paper-dim">
									{l}
								</li>
							))}
						</ul>
					</div>
					<div className="reveal lg:col-span-8">
						<h3 className="eyebrow">Education</h3>
						<ul className="mt-5">
							{credentials.education.map((e) => (
								<li
									key={e.detail}
									className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-rule py-5 first:border-0 first:pt-0"
								>
									<div>
										<p className="text-[0.9375rem] text-paper">{e.school}</p>
										<p className="mt-1 text-sm text-paper-dim">{e.detail}</p>
									</div>
									<p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-paper-faint">
										{e.period}
									</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* ── Contact ──────────────────────────────────────────── */}
			<section id="contact" className="scroll-mt-24 border-t border-rule py-24">
				<div className="grid items-center gap-12 lg:grid-cols-12">
					<div className="reveal lg:col-span-8">
						<p className="eyebrow">06 · Contact</p>
						<h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight">
							Hiring for identity
							<br />
							or access work?
						</h2>
						<p className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-paper-dim">
							{profile.relocation}. The fastest way to reach me is email, and I answer the same day.
						</p>
						<a
							href={`mailto:${profile.email}`}
							className="group mt-8 inline-flex items-center gap-3 border-b border-amber pb-1 font-mono text-sm text-amber"
						>
							{profile.email}
							<span className="transition-transform duration-300 group-hover:translate-x-1">
								→
							</span>
						</a>
					</div>
					<div className="reveal lg:col-span-4">
						<div className="relative ml-auto w-44 border border-rule p-2 sm:w-52">
							<Image
								src="/images/timotei.png"
								alt={profile.name}
								width={433}
								height={577}
								className="w-full grayscale transition-all duration-500 hover:grayscale-0"
							/>
							<span className="absolute -bottom-3 left-4 bg-ink px-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-paper-faint">
								verified
							</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
