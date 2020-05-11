import http from "./httpService";

export function getBrands() {
  return http.get("https://e-shopping-iti.herokuapp.com/v1/brnads");
}
