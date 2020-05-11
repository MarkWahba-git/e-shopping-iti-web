import http from "./httpService";

export function getProducts() {
  return http.get("https://e-shopping-iti.herokuapp.com/products");
}
