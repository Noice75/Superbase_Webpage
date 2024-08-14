import supabase from "./initialize.js";

const { data: { session } = {} } = await supabase.auth.getSession(); //Gets Saved User Session
if (session) window.location.href = "index.html"; // If already loggedin Redirect to home page

async function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert("Login failed: " + error.message);
  } else {
    //TODO: ADD LOADING SCREEN
    localStorage.setItem("userSession", JSON.stringify(data.session));
    const session = localStorage.getItem("userSession");
    console.log(session);
    window.location.href = "index.html";
  }
}

// Function to sign up
async function signUp() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    alert("Sign up failed: " + error.message);
  } else {
    alert(
      "Signed up successfully! Please check your email to confirm your account."
    );
    showLogin();
  }
}

// Function to reset password
async function forgotPassword() {
  const email = document.getElementById("forgot-password-email").value;

  const { data, error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    alert("Password reset failed: " + error.message);
  } else {
    alert("Password reset email sent!");
    showLogin();
  }
}

// Functions to toggle forms
function showLogin() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("forgot-password-form").style.display = "none";
}

function showSignup() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
  document.getElementById("forgot-password-form").style.display = "none";
}

function showForgotPassword() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("forgot-password-form").style.display = "block";
}

// Expose functions to global scope so they can be used in HTML
window.login = login;
window.signUp = signUp;
window.forgotPassword = forgotPassword;
window.showLogin = showLogin;
window.showSignup = showSignup;
window.showForgotPassword = showForgotPassword;
