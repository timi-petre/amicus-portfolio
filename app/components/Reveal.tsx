'use client'

import { useEffect } from 'react'

/**
 * Fades elements in as they enter the viewport, once each. Marks <html> first so
 * the hidden starting state only ever applies when this script is running: with
 * JS off, everything stays visible.
 */
export default function Reveal() {
	useEffect(() => {
		const root = document.documentElement
		root.classList.add('js-reveal')

		const items = document.querySelectorAll('[data-reveal]')
		if (!('IntersectionObserver' in window)) {
			items.forEach((el) => el.classList.add('is-in'))
			return
		}

		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return
					entry.target.classList.add('is-in')
					io.unobserve(entry.target)
				})
			},
			// Expanded below the fold, so an element starts fading in just before it
			// scrolls into view: a fast scroll never lands on a blank screen.
			{ rootMargin: '0px 0px 22% 0px', threshold: 0 }
		)

		items.forEach((el) => io.observe(el))
		return () => io.disconnect()
	}, [])

	return null
}
