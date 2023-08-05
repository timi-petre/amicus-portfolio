import Link from 'next/link'
export default function Navbar() {
	const navbarItems = [
		['Home', '/'],
		['Blog', '/navigation/blog'],
		['About', '/navigation/about'],
		['Projects', '/projects'],
	]
	return (
		<>
			<nav className="flex justify-between flex-wrap mx-5 my-5 space-x-4 w-full">
				<Link href="/">
					<h1 className="text-2xl leading-loose">Timi</h1>
				</Link>
				<div className="flex justify-end ">
					{navbarItems.map(([title, url]) => (
						<Link
							href={url}
							key={title}
							className="rounded-lg my-5 mx-2 px-3 py-2 text-white-700 font-medium hover:bg-slate-100 hover:text-slate-900 ease-in duration-200 max-md:hidden"
						>
							{title}
						</Link>
					))}
					<i className="fa-solid fa-bars md:!hidden px-7 cursor-pointer text-xl pt-4"></i>
					<i className="fa-solid fa-xmark !hidden"></i>
				</div>
			</nav>
		</>
	)
}
