import http from "./httpService";

export function getCategories() {
  return http.get("https://e-shopping-iti.herokuapp.com/v1/categories");
}
