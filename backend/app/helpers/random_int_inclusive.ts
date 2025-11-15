export const randomIntInclusive = (min: number, max: number): number => {
  // handle non-integer number inputs
  min = Math.ceil(min)
  max = Math.floor(max)
  if (max < min) throw new Error('max must be >= min')
  return Math.floor(Math.random() * (max - min + 1)) + min
}
