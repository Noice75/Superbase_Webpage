import { user } from "../utils/user.js";

document.getElementById("email").innerHTML = "Email: " + user.email;
document.getElementById("id").innerHTML = "ID: " + user.id;
document.getElementById("username").innerHTML = "Username: " + user.username;
document.getElementById("ll").innerHTML =
  "last_sign_in_at: " + user.last_sign_in_at;
