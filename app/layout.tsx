import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from './components/Footer'
import './globals.css'
import Navbar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'Project for Amicus Coding Camp',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="container mx-auto px-5 sm:px-0">
					<Navbar />
					{children}
					<Footer />
				</div>
				<script
					src="https://kit.fontawesome.com/42c1633124.js"
					crossOrigin="anonymous"
					defer
				></script>
			</body>
		</html>
	)
}
