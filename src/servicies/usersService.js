import http from "./httpService";

const apiEndpoint = "https://e-shopping-iti.herokuapp.com/auth/register";

export function register(user) {
  return http.post(apiEndpoint, user);
}
