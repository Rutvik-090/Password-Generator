document.getElementById("generateButton").addEventListener("click", createPassword);
document.getElementById("copyIcon").addEventListener("click", copyPassword);

function createPassword() {
    // Initialize the password variable first
    let Password = "";

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "@#$&~^";
    const allChars = upperCase + lowerCase + numbers + symbols;
    const length = 12;

    // Ensure at least one character from each character set
    Password += upperCase[Math.floor(Math.random() * upperCase.length)];
    Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    Password += numbers[Math.floor(Math.random() * numbers.length)];
    Password += symbols[Math.floor(Math.random() * symbols.length)];

    // Fill the remaining length with random characters from all sets
    while (Password.length < length) {
        Password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Set the generated password to the input box
    document.getElementById("password").value = Password;
}

function copyPassword(){
    const passwordInput=document.getElementById("password");

    passwordInput.select();
    passwordInput.setSelectionRange(0,99999);

    document.execCommand("copy");

    // Optionally, show a message that the password was copied
    alert("Password copied to clipboard: " + passwordInput.value);
}