import adapter from '@sveltejs/adapter-auto';
import { config as configDotenv } from 'dotenv';

configDotenv();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;