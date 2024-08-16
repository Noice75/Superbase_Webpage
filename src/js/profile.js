import supabase from "../utils/initialize.js";

const {
  data: { session },
  error,
} = await supabase.auth.getSession();

if (sessionStorage.getItem("username") === null) {
  const { data, error1 } = await supabase
    .from("usernames")
    .select("*")
    .eq("id", session.user.id);
  if (error1) {
    console.error("Error fetching data:", error);
  }
  sessionStorage.setItem("username", data[0].username);
}

console.log(session.user);
const user = session.user;
document.getElementById("email").innerHTML = "Email: " + user.email;
document.getElementById("id").innerHTML = "ID: " + user.id;
document.getElementById("username").innerHTML =
  "Username: " + sessionStorage.getItem("username");
document.getElementById("ll").innerHTML =
  "last_sign_in_at: " + user.last_sign_in_at;
