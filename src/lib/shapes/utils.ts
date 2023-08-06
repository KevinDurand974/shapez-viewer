import type { ShapeColors } from './types';

export const setColor = (name: ShapeColors) => {
	switch (name) {
		case 'Base':
			return '#aaaaaa';
		case 'Blue':
			return '#66a7ff';
		case 'Red':
			return '#ff666a';
		case 'Green':
			return '#78ff66';
		case 'Cyan':
			return '#87fff5';
		case 'Purple':
			return '#dd66ff';
		case 'White':
			return '#ffffff';
		case 'Yellow':
			return '#fcf52a';
	}
};

export const defaultBorderColor = '#111418';

let maxLayer = 4;

export const setLayer = (newMax: number) => {
	maxLayer = newMax;
};

export const getCoef = (layer: number) => {
	const coef = 1 / maxLayer;
	return coef * (maxLayer + 1 - layer);
};
