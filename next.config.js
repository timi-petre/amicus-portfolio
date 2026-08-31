/** @type {import('next').NextConfig} */
const nextConfig = {
	// Netlify's Next image optimiser returns 500 for /_next/image on this setup, so
	// images are served straight from /public. The site has one small PNG; nothing to gain.
	images: { unoptimized: true },
}

module.exports = nextConfig
