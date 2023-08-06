import type { Params } from './types';
import { defaultBorderColor, getCoef, setColor } from './utils';

export const drawStar = (params: Params) => {
	const defaultOptions: Required<Params> = {
		color: 'Base',
		borderColor: defaultBorderColor,
		layer: 1,
		borderSize: 7,
		...params
	};

	const { ctx, size, borderSize, color, position, layer, borderColor } = defaultOptions;

	ctx.beginPath();

	ctx.strokeStyle = borderColor;
	ctx.fillStyle = setColor(color);

	ctx.lineWidth = borderSize;
	ctx.lineCap = 'square';
	ctx.lineJoin = 'miter';

	const midBorder = borderSize / 2;

	const coef = getCoef(layer);

	switch (position) {
		case 'TL':
			ctx.moveTo(size, size);
			ctx.lineTo(size - (size * 0.6 - midBorder) * coef, size);
			ctx.lineTo(size - size * coef + midBorder, size - size * coef + midBorder);
			ctx.lineTo(size, size - (size * 0.6 - midBorder) * coef);
			ctx.lineTo(size, size);
			break;
		case 'TR':
			ctx.moveTo(size, size);
			ctx.lineTo(size, size - (size * 0.6 - midBorder) * coef);
			ctx.lineTo(size + size * coef - midBorder, size - size * coef + midBorder);
			ctx.lineTo(size + (size * 0.6 - midBorder) * coef, size);
			ctx.lineTo(size, size);
			break;
		case 'BR':
			ctx.moveTo(size, size);
			ctx.lineTo(size + size * coef * 0.6 - midBorder, size);
			ctx.lineTo(size + size * coef - midBorder, size + size * coef - midBorder);
			ctx.lineTo(size, size + size * coef * 0.6 - midBorder);
			ctx.lineTo(size, size);
			break;
		case 'BL':
			ctx.moveTo(size, size);
			ctx.lineTo(size, size + size * coef * 0.6 - midBorder);
			ctx.lineTo(size - size * coef + midBorder, size + size * coef - midBorder);
			ctx.lineTo(size - size * coef * 0.6 + midBorder, size);
			ctx.lineTo(size, size);
			break;
	}

	ctx.fill();
	ctx.stroke();
	ctx.closePath();
};
