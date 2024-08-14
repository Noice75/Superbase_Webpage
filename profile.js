import supabase from "./initialize.js";

const {
  data: { session },
  error,
} = await supabase.auth.getSession();
console.log(session.user);
const user = session.user;
document.getElementById("email").innerHTML = "Email: " + user.email;
document.getElementById("id").innerHTML = "ID: " + user.id;
document.getElementById("ll").innerHTML =
  "last_sign_in_at: " + user.last_sign_in_at;
