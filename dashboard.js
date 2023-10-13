document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logout-button");

    logoutButton.addEventListener("click", function () {
        // Perform logout actions here if needed
        // For simplicity, we'll just redirect to the login page
        window.location.href = "index.html"; // Redirect to the login page
    });
});
