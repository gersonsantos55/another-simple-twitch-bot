export function randomNumberBetween(start: number, end: number): number {
  return Math.floor(Math.random() * (end - start) + start);
}

export function milliliters(): number {
  return randomNumberBetween(50, 1000);
}
