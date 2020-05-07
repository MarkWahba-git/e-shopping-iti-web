export function productFilter(products, category, brand) {
  if (category === "All Categories")
    return products.filter((product) => product.brand === brand);
  else if (brand === "All Brnads")
    return products.filter((product) => product.category === category);
  else
    return products.filter(
      (product) => product.category === category && product.brand === brand
    );
}
