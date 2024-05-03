document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Get form data
    var formData = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    // Store data in localStorage
    var userData = JSON.parse(localStorage.getItem("userData")) || [];
    userData.push(formData);
    localStorage.setItem("userData", JSON.stringify(userData));

    // Redirect to data page
    window.location.href = "data.html";
});
