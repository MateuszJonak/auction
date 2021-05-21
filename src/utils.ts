export const round = (value: number, fractionDigits: number) =>
  Math.round(value * Math.pow(10, fractionDigits)) /
  Math.pow(10, fractionDigits);
export const netToGross = (value: number) => round(value * 0.23 + value, 2);
export const pricePerMeter = (value: number, meters: number) =>
  round(value / meters, 2);
export const percentOfMax = (
  value: number,
  maxPrice: number,
  originalPrice: number,
) => {
  const range = maxPrice - originalPrice;
  const diffOriginal = value - originalPrice;
  return round((diffOriginal / range) * 100, 2);
};
