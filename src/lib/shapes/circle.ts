import type { Params } from './types';
import { setColor } from './utils';

export const drawCircle = (params: Params) => {
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

	ctx.lineCap = 'butt';
	ctx.lineJoin = 'miter';

	const midBorder = borderSize / 2;

	let rotateA = 0;
	let rotateB = 0;

	let coef = 1;
	if (stack === 2) coef = 0.75;
	else if (stack === 3) coef = 0.5;
	else if (stack === 4) coef = 0.25;

	switch (position) {
		case 'TL':
			rotateA = 1;
			rotateB = 1.5;
			break;
		case 'TR':
			rotateA = 1.5;
			rotateB = 0;
			break;
		case 'BR':
			rotateA = 0;
			rotateB = 0.5;
			break;
		case 'BL':
			rotateA = 0.5;
			rotateB = 1;
			break;
	}

	ctx.lineWidth = borderSize;

	ctx.beginPath();

	ctx.lineTo(size, size);
	ctx.arc(size, size, size * coef - borderSize, Math.PI * rotateA, Math.PI * rotateB);
	ctx.lineTo(size, size);

	ctx.fill();
	ctx.closePath();

	switch (position) {
		case 'TL':
			ctx.beginPath();

			ctx.moveTo(size, size - size * coef);
			ctx.lineTo(size, size);

			ctx.lineTo(size - size * coef, size);

			ctx.arc(size, size, size * coef - midBorder, Math.PI * rotateA, Math.PI * rotateB);

			ctx.stroke();

			ctx.closePath();
			break;
		case 'TR':
			ctx.beginPath();

			ctx.moveTo(size + size * coef, size);
			ctx.lineTo(size, size);
			ctx.lineTo(size, size - size * coef);

			ctx.arc(size, size, size * coef - midBorder, Math.PI * rotateA, Math.PI * rotateB);

			ctx.stroke();

			ctx.closePath();
			break;
		case 'BL':
			ctx.beginPath();

			ctx.moveTo(size - size * coef, size);
			ctx.lineTo(size, size);

			ctx.lineTo(size, size + size * coef);

			ctx.arc(size, size, size * coef - midBorder, Math.PI * rotateA, Math.PI * rotateB);

			ctx.stroke();

			ctx.closePath();
			break;
		case 'BR':
			ctx.beginPath();

			ctx.moveTo(size, size + size * coef);
			ctx.lineTo(size, size);

			ctx.lineTo(size + size * coef, size);

			ctx.arc(size, size, size * coef - midBorder, Math.PI * rotateA, Math.PI * rotateB);

			ctx.stroke();

			ctx.closePath();
			break;
	}
};
