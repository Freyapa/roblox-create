document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const userData = JSON.parse(localStorage.getItem(username));

  if (userData && userData.password === password) {
    sessionStorage.setItem("loggedInUser", username);
    window.location.href = "home.html";
  } else {
    document.getElementById("statusMessage").textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
  }
});
