import type { Params } from './types';
import { defaultBorderColor, getCoef, setColor } from './utils';

export const drawCircle = (params: Params) => {
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

	ctx.lineCap = 'butt';
	ctx.lineJoin = 'miter';

	const midBorder = borderSize / 2;

	let rotateA = 0;
	let rotateB = 0;

	const coef = getCoef(layer);

	ctx.lineWidth = borderSize;

	ctx.beginPath();

	switch (position) {
		case 'TL':
			rotateA = 1;
			rotateB = 1.5;
			ctx.arc(
				size - midBorder,
				size - midBorder,
				size * coef - borderSize - midBorder,
				Math.PI * rotateA,
				Math.PI * rotateB
			);
			ctx.lineTo(size - midBorder, size - midBorder);

			break;
		case 'TR':
			rotateA = 1.5;
			rotateB = 0;
			ctx.arc(
				size + midBorder,
				size - midBorder,
				size * coef - borderSize - midBorder,
				Math.PI * rotateA,
				Math.PI * rotateB
			);
			ctx.lineTo(size + midBorder, size - midBorder);
			break;
		case 'BR':
			rotateA = 0;
			rotateB = 0.5;
			ctx.arc(
				size + midBorder,
				size + midBorder,
				size * coef - borderSize - midBorder,
				Math.PI * rotateA,
				Math.PI * rotateB
			);
			ctx.lineTo(size + midBorder, size + midBorder);
			break;
		case 'BL':
			rotateA = 0.5;
			rotateB = 1;
			ctx.arc(
				size - midBorder,
				size + midBorder,
				size * coef - borderSize - midBorder,
				Math.PI * rotateA,
				Math.PI * rotateB
			);
			ctx.lineTo(size - midBorder, size + midBorder);

			break;
	}

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
