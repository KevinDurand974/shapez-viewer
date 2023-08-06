import type { Params } from './types';
import { setColor } from './utils';

export const drawRectangle = (params: Params) => {
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
	ctx.lineCap = 'butt';
	ctx.lineJoin = 'miter';

	const midBorder = borderSize / 2;

	let posX = 0;
	let posY = 0;
	let width = 0;
	let height = 0;

	let coef = 1;
	if (stack === 2) coef = 0.75;
	else if (stack === 3) coef = 0.5;
	else if (stack === 4) coef = 0.25;

	switch (position) {
		case 'TL':
			posX = size - size * coef;
			posY = size - size * coef;
			width = size * coef;
			height = size * coef;
			break;
		case 'TR':
			posX = size;
			posY = size - size * coef;
			width = size * coef;
			height = size * coef;
			break;
		case 'BR':
			posX = size;
			posY = size;
			width = size * coef;
			height = size * coef;
			break;
		case 'BL':
			posX = size - size * coef;
			posY = size;
			width = size * coef;
			height = size * coef;
			break;
	}

	ctx.rect(posX, posY, width, height);
	ctx.fill();

	ctx.closePath();

	ctx.beginPath();

	switch (position) {
		case 'TL':
			ctx.rect(posX + midBorder, posY + midBorder, width - midBorder, height - midBorder);
			break;
		case 'TR':
			ctx.rect(posX, posY + midBorder, width - midBorder, height - midBorder);
			break;
		case 'BR':
			ctx.rect(posX, posY, width - midBorder, height - midBorder);
			break;
		case 'BL':
			ctx.rect(posX + midBorder, posY, width - midBorder, height - midBorder);
			break;
	}

	ctx.stroke();
	ctx.closePath();
};
