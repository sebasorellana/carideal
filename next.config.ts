import type { NextConfig } from 'next';
import packageJson from './package.json';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
	output: 'export',

	basePath: isProd ? '/carideal' : '',
	assetPrefix: isProd ? '/carideal/' : '',

	env: {
		NEXT_PUBLIC_APP_VERSION: packageJson.version,
	},

	images: {
		unoptimized: true,
	},

	trailingSlash: true,
};

export default nextConfig;
