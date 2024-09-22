// Start writing your code below this line
/**
 * test__checkHumbrId Function
 * Test the checkHumbrId function by comparing the expected result with the actual result.
 * Outputs the test results to the HTML page.
 * @param {string} testValue - The value to test.
 * @param {boolean} expectedResult - The expected result of the test.
 */
function test__checkHumbrId(testValue, expectedResult) {
    var actualResult = checkHumbrId(testValue);
    var resultText = "Value tested: " + testValue + " Expected result: " + expectedResult;
    
    if (actualResult === expectedResult) {
        resultText += " <span style='color: green;'>==PASSED==</span>";
    } else {
        resultText += " <span style='color: red;'>xxFAILEDxx</span>";
    }
    
    document.getElementById("data").innerHTML += `<p>${resultText}</p>`;
}

// Test cases
test__checkHumbrId("N12345678", true);   // Valid ID
test__checkHumbrId("n12345678", true);   // Valid lowercase ID
test__checkHumbrId("A12345678", false);  // Invalid letter
test__checkHumbrId("N12345", false);     // Too few digits
test__checkHumbrId("N123456789", false); // Too many digits
test__checkHumbrId("n1234567a", false);  // Invalid character in ID
