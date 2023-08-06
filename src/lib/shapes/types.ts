export type ShapeColors =
	| 'Red'
	| 'Blue'
	| 'Green'
	| 'Yellow'
	| 'Purple'
	| 'Cyan'
	| 'White'
	| 'Base';

export type Params = {
	ctx: CanvasRenderingContext2D;
	size: number;
	position: 'TR' | 'BR' | 'BL' | 'TL';
	color?: ShapeColors;
	stack?: 1 | 2 | 3 | 4;
	borderSize?: number;
};
