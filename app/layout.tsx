import type { Metadata } from 'next'
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'

import Footer from './components/Footer'
import Nav from './components/Nav'
import './globals.css'

const display = Fraunces({
	subsets: ['latin'],
	variable: '--font-display',
	axes: ['SOFT', 'WONK', 'opsz'],
})
const sans = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-sans',
})
const mono = IBM_Plex_Mono({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-mono',
})

export const metadata: Metadata = {
	metadataBase: new URL('https://timipetre.netlify.app'),
	title: 'Timotei Petre · IT Support Engineer, Identity & Access',
	description:
		'IT Support Engineer working daily in Microsoft Entra ID and on-prem Active Directory: identity lifecycle, group-based licensing, MFA and passkeys, Conditional Access troubleshooting. Auth0 Specialist certified.',
	openGraph: {
		title: 'Timotei Petre · IT Support Engineer, Identity & Access',
		description:
			'Identity lifecycle, access troubleshooting and delegated administration in Entra ID, Active Directory and Auth0.',
		type: 'website',
		locale: 'en',
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
			<body className="font-[family-name:var(--font-sans)] antialiased">
				<div className="relative z-10">
					<Nav />
					<main>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}
