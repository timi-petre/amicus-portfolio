import Link from 'next/link';
export default function Navbar() {
	return (
		<nav className="flex sm:justify-center space-x-4">
			{[
				['Home', '/'],
				['Blog', '/navigation/blog'],
				['About', '/navigation/about'],
			].map(([title, url]) => (
				<Link
					href={url}
					key={title}
					className="rounded-lg my-5 px-3 py-2 text-white-700 font-medium hover:bg-slate-100 hover:text-slate-900 "
				>
					{title}
				</Link>
			))}
		</nav>
	);
}
