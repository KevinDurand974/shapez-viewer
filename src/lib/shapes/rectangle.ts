import type { Params } from './types';
import { defaultBorderColor, getCoef, setColor } from './utils';

export const drawRectangle = (params: Params) => {
	const defaultOptions: Required<Params> = {
		borderColor: defaultBorderColor,
		color: 'Base',
		layer: 1,
		borderSize: 7,
		...params
	};

	const { ctx, size, borderSize, color, position, layer, borderColor } = defaultOptions;

	ctx.beginPath();

	ctx.strokeStyle = borderColor;
	ctx.fillStyle = setColor(color);

	ctx.lineWidth = borderSize;
	ctx.lineCap = 'butt';
	ctx.lineJoin = 'miter';

	const midBorder = borderSize / 2;

	let posX = 0;
	let posY = 0;
	let width = 0;
	let height = 0;

	const coef = getCoef(layer);

	switch (position) {
		case 'TL':
			posX = size - size * coef;
			posY = size - size * coef;
			width = size * coef;
			height = size * coef;

			ctx.rect(posX + midBorder, posY + midBorder, width - midBorder, height - midBorder);
			break;
		case 'TR':
			posX = size;
			posY = size - size * coef;
			width = size * coef;
			height = size * coef;

			ctx.rect(posX, posY + midBorder, width - midBorder, height - midBorder);
			break;
		case 'BR':
			posX = size;
			posY = size;
			width = size * coef;
			height = size * coef;

			ctx.rect(posX, posY, width - midBorder, height - midBorder);
			break;
		case 'BL':
			posX = size - size * coef;
			posY = size;
			width = size * coef;
			height = size * coef;

			ctx.rect(posX + midBorder, posY, width - midBorder, height - midBorder);
			break;
	}

	ctx.fill();
	ctx.stroke();

	ctx.closePath();
};
