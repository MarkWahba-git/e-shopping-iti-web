import http from "./httpService";

export function getBrands() {
  return http.get("https://e-shopping-iti.herokuapp.com/v1/brands");
}

export function addBrand(brand) {
  console.log("brand", brand);
  
  return http.post("https://e-shopping-iti.herokuapp.com/v1/brands", {
    brand_name: brand.brand,
  });
}
