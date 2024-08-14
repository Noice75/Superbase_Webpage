import supabase from "auth.js";

async function checkAuth() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    // User is logged in, allow access to the page
    console.log("User is logged in:", session.user);
  } else {
    // User is not logged in, redirect to the login page
    window.location.href = "login.html";
  }
}
window.load = checkAuth;
