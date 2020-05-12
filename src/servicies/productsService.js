import http from "./httpService";
import { getJwt } from "./authService";

const endpointUrl = "https://e-shopping-iti.herokuapp.com/products";

export function getZ() {

  return http.get(endpointUrl);
}
