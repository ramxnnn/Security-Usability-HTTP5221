// Start writing your code below this line
function test__checkHumbrId(testValue, expectedResult) {
    var actualResult = checkHumbrId(testValue);
    var resultText = "Value tested: " + testValue + " Expected result: " + expectedResult;
    
    if (actualResult === expectedResult) {
        resultText += " <span style='color: green;'>==PASSED==</span>";
    } else {
        resultText += " <span style='color: red;'>==xxFAILEDxx</span>";
    }
    
    document.getElementById("data").innerHTML += `<p>${resultText}</p>`;
}

// Test cases
test__checkHumbrId("N12345678", true);   // Valid Humber ID
test__checkHumbrId("n12345678", true);   // Valid Humber lowercase ID
test__checkHumbrId("A12345678", false);  // Invalid A letter in front instead of N
test__checkHumbrId("N12345", false);     // Few digits instead of 8 digits
test__checkHumbrId("N123456789", false); // More than 8 digits
test__checkHumbrId("n1234567a", false);  // Not valid character at the end of the humber id
test__checkHumbrId("12345678", true); // There is no N at the front
