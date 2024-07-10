document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("registerUsername").value;
            const password = document.getElementById("registerPassword").value;
            registerUser(username, password);
        });
    }

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;
            loginUser(username, password);
        });
    }
});

function registerUser(username, password) {
    if (localStorage.getItem(username)) {
        alert("Username already exists. Please choose another one.");
    } else {
        localStorage.setItem(username, password);
        alert("Registration successful! You can now log in.");
        window.location.href = "index.html";
    }
}

function loginUser(username, password) {
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        alert("Login successful!");
        window.location.href = "home.html"; // Redirect to home page after successful login
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

