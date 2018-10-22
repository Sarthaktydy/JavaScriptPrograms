/******************************************************************************
 *  Compilation:  node HelloUser.js 
 *  
 *  Purpose: Take User Input and Replace String with the user name provided by 
 *           the user.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   16-10-2018
 *
 ******************************************************************************/


// Implementing the Readline module in this application.
var readline = require('readline');

// Creating an Interface object of Readline Module by passing 'stdin' & 'stdout' as parameters.
var rl = readline.createInterface(process.stdin, process.stdout);

// Initializing String 'str' to be replaced with the username.
var str = "Hello <username> , How are you??";

// Taking user input asking for his name.
rl.question("What is your name? ", function(answer) {

    // Replacing '<username>' in 'str' String & Printing it to the console.
    console.log(str.replace("<username>", answer));
});