export function randomNumberBetween(start: number, end: number): number {
  if (typeof start !== 'number' || typeof end !== 'number') {
    return 0;
  }

  // Ensure that start is less than or equal to end
  if (start > end) {
    [start, end] = [end, start];
  }

  return Math.ceil(Math.random() * (end - start) + start);
}
