import { mileageRange, monthlyPaymentRange, yearRange } from "./filterRanges";

const rangeFilters = [
  { defaults: yearRange, prefix: "year" },
  { defaults: mileageRange, prefix: "mileage" },
  { defaults: monthlyPaymentRange, prefix: "monthlyPayment" },
];

export function countActiveFilters(params: URLSearchParams): number {
  let count = 0;

  if (params.get("vehicleSearch")) count += 1;
  if (params.get("state")) count += 1;
  if (params.get("municipality")) count += 1;
  if (params.get("primaryColor")) count += 1;

  for (const { defaults, prefix } of rangeFilters) {
    const minimumKey = `${prefix}Minimum`;
    const maximumKey = `${prefix}Maximum`;
    if (!params.has(minimumKey) || !params.has(maximumKey)) continue;

    const minimum = Number(params.get(minimumKey));
    const maximum = Number(params.get(maximumKey));
    if (minimum !== defaults.minimum || maximum !== defaults.maximum) {
      count += 1;
    }
  }

  return count;
}
