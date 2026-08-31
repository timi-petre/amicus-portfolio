export const profile = {
	name: 'Timotei Petre',
	role: 'IT Support Engineer',
	discipline: 'Identity & Access Management',
	location: 'Buzău, Romania',
	relocation: 'Open to relocating to Bucharest',
	email: 'timoteisorin.petre@gmail.com',
	linkedin: 'https://linkedin.com/in/timotei-sorin-petre',
	github: 'https://github.com/timi-petre',
	summary:
		'I run identity and access operations day to day: provisioning and offboarding in Entra ID and on-prem Active Directory, group-based licensing, MFA and passkey resets, and tracing why someone cannot sign in. I work under delegated roles and request privileged actions through PIM. Before this, I supported enterprise customers of Auth0.',
}

/** Real operations, in the order a working day tends to produce them. */
export const log = [
	{ time: '08:12', event: 'Account provisioned · AD → Entra ID sync verified', state: 'ok' },
	{ time: '09:37', event: 'Sign-in failure traced · Conditional Access, named location', state: 'ok' },
	{ time: '10:04', event: 'MFA method reset · passkey re-enrolled', state: 'ok' },
	{ time: '11:26', event: 'Role activation requested via PIM · scoped, time-bound', state: 'wait' },
	{ time: '13:48', event: 'Offboarding completed · licence reclaimed', state: 'ok' },
	{ time: '15:15', event: 'Inactive accounts flagged · last sign-in review', state: 'ok' },
]

export const focus = [
	{
		n: '01',
		title: 'Identity lifecycle',
		body: 'Account creation, group assignment, group-based licensing, primary user changes, disablement and offboarding, across Active Directory and Entra ID.',
	},
	{
		n: '02',
		title: 'Access troubleshooting',
		body: 'Sign-in and audit log analysis, MFA exception group membership, users blocked by location-based policies, directory synchronisation checks.',
	},
	{
		n: '03',
		title: 'Delegated administration',
		body: 'Global Reader, Security Reader, Authentication Administrator and a custom group-assignment role. Privileged actions requested through PIM, escalated to L3 beyond scope.',
	},
	{
		n: '04',
		title: 'Endpoint & hygiene',
		body: 'Intune enrolment and compliance for Windows and mobile, including remote enrolment across countries. Periodic last sign-in review to reclaim unused licences.',
	},
]

export const experience = [
	{
		company: 'Greentech',
		role: 'IT Support Technician',
		period: '11/2024 - Present',
		place: 'Buzău',
		current: true,
		points: [
			'Identity lifecycle in Active Directory and Entra ID: creation, group assignment, group-based licensing, disablement, password and MFA/passkey resets.',
			'Access troubleshooting through sign-in and audit logs, MFA exception groups, and location-based access policies.',
			'Delegated administration under Global Reader, Security Reader and Authentication Administrator, with privileged actions requested via PIM.',
			'Intune enrolment and compliance for Windows and mobile devices; Microsoft 365 support; monitoring with OpenVAS, Wazuh and Veeam Backup.',
		],
	},
	{
		company: 'CGS (Auth0 by Okta)',
		role: 'Developer Support Engineer',
		period: '01/2024 - 10/2024',
		place: 'Brașov, remote',
		points: [
			'Technical support for enterprise customers of Auth0 (Okta Customer Identity Cloud), handling tickets through Salesforce.',
			'Tenant configuration: custom domains, Universal and Classic login pages, SAML and OpenID Connect connection settings.',
			'Verified tenant type, subscription plan and user rights to determine whether a requested action was available.',
			'Troubleshot authentication and MFA issues, escalating complex cases to engineering.',
		],
	},
	{
		company: 'Punctul IT',
		role: 'Education Facilitator',
		period: '09/2021 - 11/2023',
		place: 'Buzău, hybrid',
		points: [
			'Taught HTML, CSS, JavaScript, WordPress and introductory robotics to teenagers aged 14 to 18.',
			'Maintained the computers in the training labs.',
		],
	},
	{
		company: 'Child Evangelism Fellowship',
		role: 'Developer (contract)',
		period: '10/2019 - 03/2021',
		place: 'Brașov, remote',
		points: [
			"Built Noah's Story, an educational mobile game: 3D character implementation with Unity and Mixamo, released on the App Store and Google Play.",
		],
	},
]

export const toolbox = [
	{
		group: 'Identity & access',
		items: [
			'Entra ID: users, groups, lifecycle',
			'Active Directory (on-prem)',
			'Group-based licensing',
			'MFA, passkeys, auth methods',
			'Conditional Access troubleshooting',
			'PIM (just-in-time activation)',
			'Okta / Auth0 CIC',
			'SAML, OAuth 2.0, OpenID Connect',
		],
	},
	{
		group: 'Systems',
		items: [
			'Windows 10/11 administration',
			'Intune: enrolment & compliance',
			'Microsoft 365 administration',
			'DNS, DHCP (support level)',
			'Hardware & software troubleshooting',
		],
	},
	{
		group: 'Security & monitoring',
		items: [
			'Sign-in and audit log analysis',
			'OpenVAS, Wazuh',
			'Veeam Backup',
			'LAPS and BitLocker key retrieval',
		],
	},
	{
		group: 'Tooling',
		items: [
			'Freshservice, SelfService, Salesforce',
			'AnyDesk, TeamViewer',
			'Postman (API debugging)',
		],
	},
]

export const alsoBuilt = [
	{
		title: 'LongCovidWeb',
		note: 'Angular developer, volunteer · 2023-2024',
		body: 'Components and features for a symptom-tracking health platform, built alongside other developers.',
		href: 'https://long-covid-spa-frontend.onrender.com',
	},
	{
		title: "Noah's Story",
		note: 'Unity · App Store & Google Play',
		body: 'Educational mobile game for Child Evangelism Fellowship. 3D character implementation and store release.',
	},
	{
		title: 'Fundația România Pro Culture',
		note: 'WordPress, volunteer · 2018',
		body: "Built and maintained the organisation's website, from interface to ongoing technical support.",
	},
	{
		title: 'Side projects',
		note: 'Flutter, Dart, JavaScript',
		body: 'Mobile and web work kept on GitHub, from Flutter apps to smaller front-end experiments.',
		href: 'https://github.com/timi-petre',
	},
]

export const credentials = {
	certifications: [
		'Auth0 Specialist',
		'Auth0 Consumer Application Implementation Champion',
		'Frontend JavaScript Development, LINK Academy (2022-2023)',
	],
	education: [
		{
			school: 'Universitatea Politehnica București, FILS',
			detail: 'MSc, Management, innovation and technologies of collaborative systems',
			period: '2019 - 2021',
		},
		{
			school: 'Universitatea Politehnica București, FILS',
			detail: 'BSc, Computers and Information Technology',
			period: '2015 - 2019',
		},
	],
	languages: ['Romanian: native', 'English: upper-intermediate (B2)'],
}
