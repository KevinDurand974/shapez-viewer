<script lang="ts">
	import { drawCircle, drawRectangle, drawStar, drawWindmill } from '$lib/shapes';
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

			drawStar({ size: height / 2, ctx, position: 'TR', color: 'Blue', borderSize: 10 });
			drawCircle({ size: height / 2, ctx, position: 'BR', color: 'Red', borderSize: 10 });
			drawRectangle({
				size: height / 2,
				ctx,
				position: 'BL',
				color: 'Green',
				borderSize: 10
			});
			drawCircle({ size: height / 2, ctx, position: 'TL', color: 'Red', borderSize: 10 });

			drawCircle({
				size: height / 2,
				ctx,
				position: 'BL',
				color: 'Cyan',
				borderSize: 10,
				layer: 2
			});
			drawCircle({
				size: height / 2,
				ctx,
				position: 'TR',
				color: 'White',
				borderSize: 10,
				layer: 3
			});

			drawWindmill({
				size: height / 2,
				ctx,
				position: 'BR',
				color: 'Purple',
				borderSize: 10,
				layer: 3
			});
			drawWindmill({
				size: height / 2,
				ctx,
				position: 'TL',
				color: 'Yellow',
				borderSize: 10,
				layer: 3
			});

			drawStar({
				size: height / 2,
				ctx,
				position: 'BL',
				color: 'Base',
				borderSize: 10,
				layer: 4
			});
		}
	});
</script>

<main class="font-sans bg-dark min-h-screen w-full overflow-auto text-white">
	<h1>Shapez Viewer</h1>
	<h2>SvelteKit + UnoCss + Unplugin/Icons</h2>

	<div
		class="flex p-18 relative w-fit h-fit rounded-full bg-gradient-radial from-25% to-65% from-white to-transparent"
	>
		<div class="absolute z-5" />
		<canvas bind:this={canvas} class="w-64 h-64 relative z-10" />
	</div>
</main>
