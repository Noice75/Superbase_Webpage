import supabase from "./initialize.js";

// supabase.auth.onAuthStateChange((event, session) => {
//   if (session) {
//     console.log("User logged in:", session.user, event);
//   } else {
//     console.log("User logged out or session expired.");
//     window.location.href = "login.html"; // Redirect to login page
//   }
// });

async function logoutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Logout failed:", error.message);
  } else {
    sessionStorage.clear();
    localStorage.clear();
    console.log("User logged out");
    window.location.href = "login.html"; // Redirect to login page
  }
}

window.logoutUser = logoutUser;
