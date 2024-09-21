import supabase from "./initialize.js";
const { data: { session } = {} } = await supabase.auth.getSession(); //Gets Saved User Session
const id = window.location.hash.substring(1);
if (!session) {
  if (id) {
    window.location.href = "login.html#" + id;
  } else {
    if (!session) window.location.href = "login.html"; // If already loggedin Redirect to home page
  }
}
