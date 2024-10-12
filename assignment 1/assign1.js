// This function runs when the page is fully loaded
function onLoad() {
    // Get the login form using its ID
    const form = document.getElementById('loginForm');

    // Set up the form to call onSubmit when it's submitted
    form.onsubmit = onSubmit;
}

function onSubmit() {
    // Get the username and password from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Find the place to show the login result
    const resultDiv = document.getElementById('loginResult');

    // Check if the username is empty
    if (!username) {
        resultDiv.innerHTML = `<p>Login Failed: Please enter your username.</p>`;
        return false; // Stop the form from submitting
    }

    // Check if the password is empty
    if (!password) {
        resultDiv.innerHTML = `<p>Login Failed: Please enter your password.</p>`;
        return false; // Stop the form from submitting
    }

    // Set the correct username and password for checking
    const storedUsername = 'testuser';
    const storedPasswordHash = md5Encrypt('password123'); // Encrypt the right password

    // Check if the entered username and password match the stored ones
    const isValidLogin = checkLogin(username, password, storedUsername, storedPasswordHash);

    // Show the login result to the user
    if (isValidLogin) {
        resultDiv.innerHTML = `<p>Login Successful! Welcome back, ${username}.</p>`;
    } else {
        resultDiv.innerHTML = `<p>Login Failed. Please try again.</p>`;
    }

    // Stop the form from refreshing the page
    return false;
}

// Call onLoad when the window has finished loading
window.onload = onLoad;
