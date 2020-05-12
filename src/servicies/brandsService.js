import http from "./httpService";
import  axios  from 'axios';

export function getBrands() {
  return http.get("https://e-shopping-iti.herokuapp.com/v1/brands");
}

export function addBrand(brand) {
  return http.post("https://e-shopping-iti.herokuapp.com/v1/brands", {
    brand_name: brand,
  });
}

export function deleteBrand(brandID) {
  return axios.delete(
    `https://e-shopping-iti.herokuapp.com/v1/brands/${brandID}`
  );
}
