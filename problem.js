/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/


///compare password
function passwordCheck (password, userInput) {
    if (password === userInput) {
        console.log("Access Granted!");
    }

    if (password !== userInput) {
        console.log("Access Denied!");
    }

    if (userInput==="forgot") {
        console.log("Here is a hint");
    }

    if (userInput==="reset") {
        console.log("Let's reset your account");
    }
}

///Examples///

passwordCheck ("Lovelycat", "Lovelycat")

passwordCheck ("Lovelycat", "Lovelydog")

passwordCheck ("Lovelycat", "forgot")

passwordCheck ("Lovelycat", "reset")

///CHALLENGE///
function passwordfinalcheck (userInput) {
    if (userInput.length <5) {
    console.log("Your password is too short!");
}

if(userInput==="forgot" || userInput==="reset") {
    console.log("Access Granted");
    console.log("This password you set should not be used because it glitches the system");
}
}
passwordfinalcheck ("Cat")
