import http from "./httpService";

const apiEndpoint = "https://e-shopping-iti.herokuapp.com/v1/brands";

export function getBrands() {
  return http.get(apiEndpoint);
}

export function addBrand(brand) {
  return http.post(apiEndpoint, {
    brand_name: brand,
  });
}

export function deleteBrand(brandID) {
  const apiEndpoint = `${apiEndpoint}/${brandID}`;
  console.log(apiEndpoint);

  const config = {};
  return http.delete(apiEndpoint, {});
}

export function editBrand(brandID, newBrand) {
  console.log(newBrand);

  return http.put(`${apiEndpoint}/${brandID}`, newBrand);
}
