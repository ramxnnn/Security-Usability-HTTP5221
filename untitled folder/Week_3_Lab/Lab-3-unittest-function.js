/** checkHumbrId Function
 * Validate input as a Humber College Student number (n or N followed by 8 digits).
 * Returns true if input validates, otherwise returns false.
 * @param {string} idIn
 */
// Start writing your code below this line
function checkHumbrId(idIn) {
    // Regular expression to match 'n' or 'N' followed by exactly 8 digits
    let regex = /^[nN]\d{8}$/;
    return regex.test(idIn); // Return true if it matches, otherwise false
}