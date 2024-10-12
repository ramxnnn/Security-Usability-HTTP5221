/**
 * Validates user input against a hardcoded username and password.
 * Returns true if both username and password match; otherwise, returns an error message.
 * @param {string} username - The username input by the user.
 * @param {string} password - The password input by the user.
 * @returns {boolean|string} - Returns true for a successful login or an error message for invalid input.
 */
function checkLogin(inputUsername, inputPassword, storedUsername, storedPasswordHash) {
    // Encrypt the input password
    const inputPasswordHash = md5Encrypt(inputPassword);

    // Check if the input username and password hash match the stored values
    return inputUsername === storedUsername && inputPasswordHash === storedPasswordHash;
}
