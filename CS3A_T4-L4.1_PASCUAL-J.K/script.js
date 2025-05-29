document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Variables
    const role = document.getElementById('role').value;
    const password = document.getElementById('password').value;
    let outputMessage = "";

    // Available Users and Corresponding Password
    const validCredentials = {
        "Department Head": "SiEsD3ptH34d",
        "Faculty": "SiEsF4cu1ty",
        "Student Officer": "#CCSOAko",
        "Student": "3SapatNa!"
    };

    // Check Password Validity
    if (validCredentials[role]) {
        switch (true) {
            case (password === validCredentials[role]):
                outputMessage = `Welcome, ${role}!`;
                console.log(outputMessage);
                break;
            default:
                outputMessage = `Invalid password for ${role}`;
                console.error(outputMessage);
                break;
        }
    } else {
        outputMessage = "Role does not exist.";
        console.warn(outputMessage);
    }

    // Display message
    document.getElementById('message').textContent = outputMessage;
});

