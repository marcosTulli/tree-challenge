import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-plugin-tsconfig-paths';
import * as path from 'path';

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [react(), tsconfigPaths()],
	css: {
		preprocessorOptions: {
			sass: {
				additionalData: '@use "./src/styles/global.scss";',
				quietDeps: true,
				silenceDeprecations: ['legacy-js-api'],
			},
		},
	},
	resolve: {
		alias: {
			'@/': path.resolve(__dirname, 'src'),
			'@components/': path.resolve(__dirname, 'src/components'),
			'@styles/': path.resolve(__dirname, 'src/styles'),
			'@pages/': path.resolve(__dirname, 'src/pages'),
			'@hooks/': path.resolve(__dirname, 'src/hooks'),
			'@utils/': path.resolve(__dirname, 'src/utils'),
		},
	},
});
