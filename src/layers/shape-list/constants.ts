export enum SHAPE_LABEL {
  RECT = 'rect',
  ROUNDED_RECT = 'rounded-rect',
  CIRCLE = 'circle',
  ELLIPSE = 'triangle',
}

export const SHAPE_SVG_CODES: {[index in SHAPE_LABEL]: string} = {
  [SHAPE_LABEL.RECT]: `<rect x='5' y='5' width='10' height='10' fill='none' stroke='grey' />`,
  [SHAPE_LABEL.ROUNDED_RECT]: `<rect x='5' y='5' rx='2' width='10' height='10' fill='none' stroke='grey' />`,
  [SHAPE_LABEL.CIRCLE]: `<circle cx='10' cy='10' r='5' fill='none' stroke='grey' />`,
  [SHAPE_LABEL.ELLIPSE]: `<ellipse cx='10' cy='10' rx='6' ry = '4' fill='none' stroke='grey' />`,
};