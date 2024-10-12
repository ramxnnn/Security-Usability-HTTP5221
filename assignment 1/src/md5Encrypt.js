/**
 * MD5 Encryption function to encrypt provided string.
 * Returns string of MD5 hash.
 * @param {string} rawInput
 * @returns {string}
 */
function md5Encrypt(rawInput) {
    "use strict";
    const encryptedInput = CryptoJS.MD5(rawInput);
    return encryptedInput.toString();
}
