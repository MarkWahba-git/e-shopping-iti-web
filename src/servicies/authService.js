import http from "./httpService";


const apiEndpoint = "https://e-shopping-iti.herokuapp.com/auth/login";

export async function login(email, password) {
  const response = await http.post(apiEndpoint, { email, password });
  const jwt = response.data.access_token;
  localStorage.setItem("token", jwt);
}

export function logout() {
  localStorage.removeItem("token");
}
