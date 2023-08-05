import {
	defineConfig,
	presetAttributify,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
	extractors: [extractorSvelte()],
	presets: [
		presetUno({ dark: 'media' }),
		presetWebFonts({
			provider: 'google',
			fonts: {
				sans: [
					{ name: 'Poppins', italic: true, weights: [100, 200, 300, 400, 500, 600, 700, 800, 900] }
				]
			}
		}),
		presetAttributify()
	],
	transformers: [transformerDirectives(), transformerVariantGroup()]
});
