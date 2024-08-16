import supabase from "../utils/initialize.js";

const {
  data: { session },
  error,
} = await supabase.auth.getSession();

const { data, error1 } = await supabase
  .from("usernames")
  .select("*")
  .eq("id", session.user.id);
if (error1) {
  console.error("Error fetching data:", error);
}
console.log(session.user);
const user = session.user;
document.getElementById("email").innerHTML = "Email: " + user.email;
document.getElementById("id").innerHTML = "ID: " + user.id;
document.getElementById("username").innerHTML = "Username: " + data[0].username;
document.getElementById("ll").innerHTML =
  "last_sign_in_at: " + user.last_sign_in_at;
