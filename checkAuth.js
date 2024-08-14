import supabase from "./initialize.js";
const { data: { session } = {} } = await supabase.auth.getSession(); //Gets Saved User Session
if (!session) window.location.href = "login.html"; // If already loggedin Redirect to home page
