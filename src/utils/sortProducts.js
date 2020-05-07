export function sortProducts(products, element, path) {
  console.log(products);
  if (path === "asc") return products.sort(products[element]);
  return products.reverse(products[element]);
}
