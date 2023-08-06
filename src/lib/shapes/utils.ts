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
