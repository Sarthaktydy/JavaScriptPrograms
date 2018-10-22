// Declaration & initialization of some static variables needed for
// vendingMachine() method.
var notes[] = { 1000, 500, 100, 50, 10, 5, 2, 1 };
var i;
var sum = 0;

/**
 * Static method to take amount as an input and print how many of each notes
 * you'll get. e.g. 1000,500,100,etc.
 * 
 * @param amt is the amount entered in the machine
 */
function vendingMachine(amt) {

    // will check if amt is greater than amount present at i index in notes array.
    // if yes, then it will print no. of notes for that particular amount.
    if (amt > notes[i]) {
        sum += amt / notes[i];
        System.out.println(amt / notes[i] + " Rs." + notes[i] + " Notes");
        amt = amt % notes[i];
    }

    i++;

    // if amt is zero, then it will print minimum number of notes required to
    // provide you the money of amt
    if (amt == 0) {
        System.out.println("Minimum number of notes required: " + sum);
        return;
    }

    // calling vendingMachine() method recursively
    vendingMachine(amt);
}