import type { Params } from './types';
import { setColor } from './utils';

export const drawWindmill = (params: Params) => {
	const defaultOptions: Required<Params> = {
		color: 'Base',
		stack: 1,
		borderSize: 7,
		...params
	};

	const { ctx, size, borderSize, color, position, stack } = defaultOptions;

	ctx.beginPath();

	ctx.strokeStyle = '#111418';
	ctx.fillStyle = setColor(color);

	ctx.lineWidth = borderSize;
	ctx.lineCap = 'square';
	ctx.lineJoin = 'miter';

	const midBorder = borderSize / 2;

	let coef = 1;
	if (stack === 2) coef = 0.75;
	else if (stack === 3) coef = 0.5;
	else if (stack === 4) coef = 0.25;

	switch (position) {
		case 'TL':
			ctx.moveTo(size, size);
			ctx.lineTo(size - size * coef * 0.6, size);
			ctx.lineTo(size - size * coef, size - size * coef);
			ctx.lineTo(size, size - size * coef);
			ctx.lineTo(size, size);
			break;
		case 'TR':
			ctx.moveTo(size, size);
			ctx.lineTo(size, size - size * coef * 0.6);
			ctx.lineTo(size + size * coef, size - size * coef);
			ctx.lineTo(size + size * coef, size);
			ctx.lineTo(size, size);
			break;
		case 'BR':
			ctx.moveTo(size, size);
			ctx.lineTo(size + size * coef * 0.6, size);
			ctx.lineTo(size + size * coef, size + size * coef);
			ctx.lineTo(size, size + size * coef);
			ctx.lineTo(size, size);
			break;
		case 'BL':
			ctx.moveTo(size, size);
			ctx.lineTo(size, size + size * coef * 0.6);
			ctx.lineTo(size - size * coef, size + size * coef);
			ctx.lineTo(size - size * coef, size);
			ctx.lineTo(size, size);
			break;
	}

	ctx.fill();

	ctx.closePath();

	ctx.beginPath();

	switch (position) {
		case 'TL':
			ctx.moveTo(size, size);
			ctx.lineTo(size - (size * 0.6 - midBorder) * coef, size);
			ctx.lineTo(size - size * coef + midBorder, size - size * coef + midBorder);
			ctx.lineTo(size, size - size * coef + midBorder);
			ctx.lineTo(size, size);
			break;
		case 'TR':
			ctx.moveTo(size, size);
			ctx.lineTo(size, size - (size * 0.6 - midBorder) * coef);
			ctx.lineTo(size + size * coef - midBorder, size - size * coef + midBorder);
			ctx.lineTo(size + size * coef - midBorder, size);
			ctx.lineTo(size, size);
			break;
		case 'BR':
			ctx.moveTo(size, size);
			ctx.lineTo(size + size * coef * 0.6, size);
			ctx.lineTo(size + size * coef - midBorder, size + size * coef - midBorder);
			ctx.lineTo(size, size + size * coef - midBorder);
			ctx.lineTo(size, size);
			break;
		case 'BL':
			ctx.moveTo(size, size);
			ctx.lineTo(size, size + size * coef * 0.6);
			ctx.lineTo(size - size * coef + midBorder, size + size * coef - midBorder);
			ctx.lineTo(size - size * coef + midBorder, size);
			ctx.lineTo(size, size);
			break;
	}

	ctx.stroke();
	ctx.closePath();
};
