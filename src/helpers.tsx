export function round2point5(x) {
  return Math.ceil(x / 2.5) * 2.5;
}

export function calcPlate(lbs, plateSize) {
  return Math.ceil(lbs / plateSize) * plateSize;
}
