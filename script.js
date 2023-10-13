document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // You would typically send this data to the server for validation
        // and database lookup. For simplicity, we'll just do a basic check here.
        if (username === "nitishsng" && password === "1234") {
            // Successful login, redirect or show a success message.
            window.location.href = "dashboard.html"; // Redirect to a dashboard page
        } else {
            errorMessage.textContent = "Invalid username or password.";
        }
    });
});
