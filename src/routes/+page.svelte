<script lang="ts">
	import { drawCircle } from '$lib/shapes/circle';
	import { drawRectangle } from '$lib/shapes/rectangle';
	import { drawStar } from '$lib/shapes/star';
	import '@unocss/reset/tailwind.css';
	import { onMount } from 'svelte';
	import 'uno.css';

	let canvas: HTMLCanvasElement;
	const padding = 10;

	onMount(() => {
		const { height, width } = canvas.getBoundingClientRect();
		canvas.setAttribute('width', width + 'px');
		canvas.setAttribute('height', height + 'px');
		const ctx = canvas.getContext('2d');

		if (ctx) {
			ctx.clearRect(0, 0, width, height);

			ctx.scale((width - padding * 2) / width, (height - padding * 2) / height);
			ctx.translate(padding, padding);

			drawCircle({ size: height / 2, ctx, position: 'TR', color: 'Purple' });
			drawRectangle({ size: height / 2, ctx, position: 'BR', color: 'Purple' });
			drawCircle({ size: height / 2, ctx, position: 'BL', color: 'Purple' });

			drawStar({ size: height / 2, ctx, position: 'TR', stack: 2, color: 'White' });
			drawStar({ size: height / 2, ctx, position: 'BR', stack: 2, color: 'White' });
			drawStar({ size: height / 2, ctx, position: 'BL', stack: 2, color: 'White' });
			drawStar({ size: height / 2, ctx, position: 'TL', stack: 2, color: 'White' });
		}
	});
</script>

<main class="font-sans bg-dark min-h-screen w-full overflow-auto text-white">
	<h1>Shapez Viewer</h1>
	<h2>SvelteKit + UnoCss + Unplugin/Icons</h2>

	<canvas bind:this={canvas} class="w-64 h-64 m-auto mt-4 border border-red" />
</main>
