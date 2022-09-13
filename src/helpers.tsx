export function round2point5(x) {
  return Math.ceil(x / 2.5) * 2.5;
}

export function calcPlate(lbs, plateSize) {
  return Math.ceil(lbs / plateSize) * plateSize;
}

export const percentages = [
  [0.4, 0.5, 0.6, 0.65, 0.75, 0.85, 0.65],
  [0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.7],
  [0.4, 0.5, 0.6, 0.75, 0.85, 0.95, 0.75],
];
export const sets = [
  [1, 1, 1, 1, 1, 1, 5],
  [1, 1, 1, 1, 1, 1, 5],
  [1, 1, 1, 1, 1, 1, 5],
];
export const reps = [
  [5, 5, 3, 5, 5, 5, 5],
  [5, 5, 3, 3, 3, 3, 5],
  [5, 5, 3, 5, 3, 1, 5],
];
