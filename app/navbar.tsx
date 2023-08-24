'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleNavbar = () => {
		setIsOpen(!isOpen)
	}

	const navbarItems = [
		['Home', '/'],
		['Blog', '/navigation/blog'],
		['About', '/navigation/about'],
		['Projects', '/projects'],
	]

	const navbarBtn = navbarItems.map(([title, url]) => (
		<li
			key={title}
			className="rounded-lg my-5 mx-2 px-3 py-2 text-white-700 font-medium hover:bg-slate-100 hover:text-slate-900 ease-in duration-200"
		>
			<Link href={url} onClick={() => toggleNavbar()}>
				{title}
			</Link>
		</li>
	))

	return (
		<nav className="flex justify-between flex-wrap mx-5 my-2 space-x-4 py-6 ">
			<Link href="/">
				<h1 className="text-2xl leading-loose">Timi</h1>
			</Link>
			<div className="relative">
				{/* Hamburger Icon for Mobile */}
				<div className="md:hidden float-right">
					<button onClick={() => toggleNavbar()}>
						{isOpen ? (
							<i className="fa-solid fa-xmark text-3xl"></i>
						) : (
							<i className="fa-solid fa-bars text-3xl"></i>
						)}
					</button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden flex justify-center clear-right">
						<ul className="mb-5 bg-slate-800 text-white-700 font-medium ease-in duration-500 rounded-lg">
							{navbarBtn}
						</ul>
					</div>
				)}
			</div>
			{/* Desktop Menu */}
			<div className="hidden md:flex md:justify-between md:flex-col">
				<ul className="md:h-auto md:flex cursor-pointer -mt-5 ">{navbarBtn}</ul>
			</div>
		</nav>
	)
}

export default Navbar
