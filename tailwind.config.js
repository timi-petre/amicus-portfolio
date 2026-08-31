/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				ink: 'var(--ink)',
				raised: 'var(--ink-raised)',
				paper: 'var(--paper)',
				'paper-dim': 'var(--paper-dim)',
				'paper-faint': 'var(--paper-faint)',
				rule: 'var(--rule)',
				'rule-soft': 'var(--rule-soft)',
				amber: 'var(--amber)',
				granted: 'var(--granted)',
			},
			fontFamily: {
				display: ['var(--font-display)', 'Georgia', 'serif'],
				sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
				mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
			},
		},
	},
	plugins: [],
}
