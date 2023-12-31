'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Projects() {
	return (
		<>
			<div className="flex flex-col justify-center text-center">
				<h1 className="flex text-7xl justify-center my-3">Projects</h1>
				<p className="my-2 mb-3">
					<q>You can do everything you set in your mind to.</q> <br />- Benjamin Franklin
				</p>
				<hr />
				<div className="projects-wrapper my-5">
					<div className="flex flex-row my-5 justify-center">
						<div className="border rounded-md border-gray-500 text-center px-4 py-10 m-2 cursor-pointer">
							<Link href="/projects/tic-tac-toe">
								<Image
									src="/./images/tic-tac-toe.png"
									alt="Tic Tac Toe"
									width={200}
									height={279}
									quality={100}
									title="Tic Tac Toe"
									priority
								/>
							</Link>
						</div>
						<div className="border rounded-md border-gray-500 text-center px-4 py-2 m-2">
							<Link href="/projects/calculator">
								<Image
									src="/./images/calculator.png"
									alt="Calculator"
									width={200}
									height={279}
									quality={100}
									title="Calculator"
									priority
								/>
							</Link>
						</div>
						<div className="border rounded-md border-gray-500 text-center px-4 py-2 m-2">
							<Link href="https://catts.netlify.app/">
								<Image
									src="/./images/catts.jpeg"
									alt="Catts"
									width={160}
									height={279}
									quality={100}
									title="Catts"
									priority
								/>
							</Link>
						</div>
					</div>
					<button className="bg-transparent hover:bg-slate-100 text-white-700 font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded">
						View more
					</button>
				</div>
			</div>
		</>
	)
}
