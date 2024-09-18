var profileButton = document.getElementById("profileButton");
var Gossip = document.getElementById("Gossip");
profileButton.addEventListener("click", function () {
  window.location.href = "profile.html";
});
Gossip.addEventListener("click", function () {
  window.location.href = "../src/views/gossip.html";
});
