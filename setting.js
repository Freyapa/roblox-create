document.addEventListener("DOMContentLoaded", function() {
  // ตรวจสอบว่าผู้ใช้ล็อกอินหรือไม่
  const loggedInUser = sessionStorage.getItem("loggedInUser");

  if (!loggedInUser) {
    window.location.href = "login.html"; // ถ้าไม่ได้ล็อกอินให้ไปที่หน้าล็อกอิน
  }

  // เพิ่มฟังก์ชันการเปลี่ยนรหัสผ่าน
  document.getElementById("changePasswordForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;

    // สมมุติว่าเราเช็คกับข้อมูลผู้ใช้
    if (currentPassword === "12345" && newPassword) {
      alert("เปลี่ยนรหัสผ่านสำเร็จ");
      // บันทึกรหัสผ่านใหม่ (ในที่นี้จะเป็นการแค่แจ้งเตือน)
    } else {
      alert("กรุณาตรวจสอบรหัสผ่านอีกครั้ง");
    }
  });
});
// โหลดข้อมูลผู้ใช้จาก sessionStorage
document.addEventListener("DOMContentLoaded", function () {
  const user = sessionStorage.getItem("loggedInUser");
  if (user) {
    document.getElementById("userName").textContent = user;
  }

  // โหลดภาษาเดิมที่เคยเลือกไว้ (ถ้ามี)
  const savedLang = localStorage.getItem("language");
  if (savedLang) {
    document.getElementById("languageSelect").value = savedLang;
  }

  // ตั้งค่าการเปลี่ยนภาษา
  document.getElementById("languageSelect").addEventListener("change", function () {
    const selectedLang = this.value;
    localStorage.setItem("language", selectedLang);
    alert("เปลี่ยนภาษาเป็น: " + selectedLang + " (ยังไม่รองรับเต็มรูปแบบ)");
    // * ถ้าคุณมีระบบแปลภาษาให้โหลดหน้าหรือเปลี่ยนภาษาในเว็บต่อจากนี้
  });
});

// ฟังก์ชันออกจากระบบ
function logout() {
  sessionStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
