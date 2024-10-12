// This function runs when the page has fully loaded
function onLoad() {
    // Get the form element by its ID
    const form = document.getElementById('loginForm');

    // Set the onsubmit event for the form to call onSubmit function
    form.onsubmit = onSubmit;
}

function onSubmit() {
    // Get the username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Find the area to show the login result
    const resultDiv = document.getElementById('loginResult');

    // Check if the username is empty
    if (!username) {
        resultDiv.innerHTML = `<p>Login Failed: Please enter your username.</p>`;
        return false; // Stop the form from submitting and refreshing
    }

    // Check if the password is empty
    if (!password) {
        resultDiv.innerHTML = `<p>Login Failed: Please enter your password.</p>`;
        return false; // Stop the form from submitting and refreshing
    }

    // Set the correct username and password for checking
    const storedUsername = 'testuser';
    const storedPasswordHash = md5Encrypt('password123'); // Encrypt the correct password

    // Check if the input username and password are correct
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

// Call onLoad when the window finishes loading
window.onload = onLoad;
