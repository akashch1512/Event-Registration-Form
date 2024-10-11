export function priceFormatter(price: number): string {
  return `₹${price}`; // Format price as Indian Rupees without yearly/monthly distinction
}
