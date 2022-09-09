export function round2point5(x) {
  return Math.ceil(x / 2.5) * 2.5;
}

export function calcTM(oneRM, plateSize) {
  return Math.ceil(oneRM / plateSize) * plateSize;
}
