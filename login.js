document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    // Username dan password bawaan (Hardcoded)
    const validUser = "admin";
    const validPass = "admin123";

    if (user === validUser && pass === validPass) {
        errorMsg.style.display = "none";
        
        alert("Login berhasil! Selamat datang, " + user + ".");
        
        // Alihkan halaman ke dashboard.html setelah sukses login
        window.location.href = "dashboard.html"; 
    } else {
        errorMsg.style.display = "block";
    }
});