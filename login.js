function togglePassword() {
    const passwordField = document.getElementById('password');
    const showPassword = document.getElementById('showPassword');
    if (showPassword.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

function checkDetail() {
    console.log("checkDetail function called");
    
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    
    const email = emailField.value;
    const password = passwordField.value;

    console.log("Email entered: " + email);
    console.log("Password entered: " + password);

    // Example hardcoded email and password for validation
    const validEmail = "shwezin@example.com";
    const validPassword = "szh";

    if (email === validEmail && password === validPassword) {
        console.log("Login successful");
       // alert("Login successful");
        // Redirect to another page or perform any other actions after successful login
        window.location.href = "acc.html"; // Example redirection
    } else {
        console.log("Invalid email or password");
        alert("Invalid email or password. Please try again.");
        // Optionally, you can clear the input fields
        passwordField.value = "";
    }
}
