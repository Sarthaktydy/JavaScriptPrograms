/******************************************************************************
 *  Compilation:  node Queue.js
 *  
 *  Purpose: This is a helper class which has all the function which can be used
 *           to manipulate with a Queue based on the Queue Data Structure.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   23-10-2018
 *
 ******************************************************************************/

/**
 * It is a class which represents a node of the Queue.
 */
class Node1 {

    // Constructor to call new node by passing the data.
    constructor(data) {

        /**
         * @var {any}  data  It contains data part of the Node.
         * @var {Node} next  It contains address/reference of the next Node.
         */
        this.data = data;
        this.next = null;
    }
}

/**
 * It is the class which contains all the functions based on the Queue 
 * Data Structure.
 */
class Queue {

    // Constructor to create a new LinkedList object when called.
    constructor() {

        /**
         * @var {Node}   head  It is a pointer/reference to the head of the Queue.
         * @var {Number} size  It contains the size of the Queue.
         */
        this.head = null;
        this.size = 0;
    }

    /**
     * It is the function to check if the Queue is empty or not.
     * 
     * @returns {Boolean} It returns true/false based on the condition.
     */
    isEmpty() {

        // Return the condition comparing size of the Queue to 0.
        return this.size == 0;
    }

    /**
     * It is the function to get the size of the Queue.
     * 
     * @returns {Number} It returns the size of the Queue.
     */
    getSize() {

        // Return the 'size' instance variable of this class.
        return this.size;
    }

    /**
     * It is a function to add a Node to the end of the Queue.
     * 
     * @param {any} data  It contains the data passed by the function caller.
     * 
     * @returns {Boolean} It returns true/false if the new node is added or not.
     */
    enqueue(data) {

        // Creating a new Node passing the data.
        var node = new Node1(data);

        // Declaration of current variable which will keep track of the current node.
        var current;

        // Validating if the Queue is empty or not.
        if (this.isEmpty()) {

            // If yes, then adding the node and marking it as head.
            this.head = node;

        } else {

            // If no, then initializing the current variable to the head.
            current = this.head;

            // This loop runs till 'currnt.next' is invalid/null.
            while (current.next) {

                // Assigning next node to the current till the condition satisfies.
                current = current.next;
            }

            // When current reaches the end of Queue, putting the node at current.next.
            current.next = node;
        }

        // Incrementing the size of the Queue & returning true that the value has been added.
        this.size++;
        return true;
    }

    /**
     * It is a function which removes and returns the last item in the Queue.
     * 
     * @returns {any}  It returns the data of the node present at the end of the Queue.
     */
    dequeue() {

        // Validation if the Queue is empty or not.
        if (this.isEmpty()) {

            // If yes, then return back to the caller.
            return;
        }

        // Storing the data of head in 'data' & pointing the head to it's next node.
        var data = this.head.data;
        this.head = this.head.next;

        // Decrementing the size of the Queue & returning true that the value has been added.
        this.size--;
        return data;
    }

    /**
     * Function which return the data of the node present at the Head of the Queue.
     * 
     * @returns {any}  It returns the data at last position.
     */
    peek() {

        // Return the data of the head of the Queue.
        return this.head.data;
    }

    /**
     * Function to display the Queue.
     */
    show() {

        // Temporary variable which will run throught the Queue.
        var temp = this.head;

        // For loop will run throughout the Queue & print each node's data.
        for (var i = 0; i < this.size; i++) {
            console.log(temp.data + " ");
            temp = temp.next;
        }
    }
}

// function main() {
// }
// main();

// Exporting Queue module to use it's properties in other projects.
module.exports = { Queue };