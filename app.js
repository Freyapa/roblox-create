// เล่นเสียงคลิก
function playClickSound() {
    const clickSound = document.getElementById('clickSound');
    if (clickSound) clickSound.play();
}

// ฟังอีเวนต์ submit
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    playClickSound(); // เล่นเสียงเมื่อกดปุ่ม

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && email && password) {
        const user = {
            username,
            email,
            password
        };

        localStorage.setItem(username, JSON.stringify(user));
        alert('ลงทะเบียนสำเร็จ! กำลังพาไปยังหน้าเข้าสู่ระบบ...');
        window.location.href = 'login.html';
    } else {
        document.getElementById('statusMessage').innerText = 'กรุณากรอกข้อมูลให้ครบถ้วน';
    }
});
