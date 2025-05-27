document.addEventListener("DOMContentLoaded", function () {
  const loggedInUser = sessionStorage.getItem("loggedInUser");

  if (loggedInUser) {
    document.getElementById("userName").textContent = loggedInUser;
  } else {
    window.location.href = "login.html";
  }
});

// เล่นเสียงคลิก
function playClickSound() {
  const clickSound = document.getElementById("clickSound");
  if (clickSound) clickSound.play();
}

function toggleProfile() {
  playClickSound(); // 👉 เพิ่มตรงนี้
  const profileInfo = document.getElementById("profileInfo");
  profileInfo.style.display = profileInfo.style.display === "block" ? "none" : "block";
}

function logout() {
  playClickSound(); // 👉 เพิ่มตรงนี้
  sessionStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
