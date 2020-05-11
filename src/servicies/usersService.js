import http from "./httpService";

export function register(user) {
    console.log(user);
    
  return http.post("https://e-shopping-iti.herokuapp.com/auth/register", {
    email: user.email,
    password: user.password,
    name: user.username,
  });
}
