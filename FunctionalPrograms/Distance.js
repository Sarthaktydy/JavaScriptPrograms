/******************************************************************************
 *  Compilation:  node Distance.js
 *  
 *  Purpose: Taking User Input for (x,y) co-ordinates and finding it's 
 *           distance from (0,0).
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

// Taking user input for 'x' co-ordinate.
rl.question("Enter \'X\' co-ordinate: ", function(ans1) {

    // Taking user input for 'y' co-ordinate.
    rl.question("Enter \'Y\' co-ordinate:", function(ans2) {

        // taking input and converting them into Number type
        var x = Number(ans1),
            y = Number(ans2);

        // Calculating the distance b/w (x,y) & (0,0) by using this formula.
        var distance = Math.sqrt(x * x + y * y);

        // Printing the distance accordingly.
        console.log("{" + x + ", " + y + "}" + " is " + distance + " units far from {0, 0}\n");
        rl.close();
    });
});