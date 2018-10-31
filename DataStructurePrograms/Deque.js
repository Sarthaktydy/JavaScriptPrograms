/******************************************************************************
 *  Compilation:  node Deque.js
 *  
 *  Purpose: This is a helper class which has all the function which can be used
 *           to manipulate with a Deque based on the Deque Data Structure.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   23-10-2018
 *
 ******************************************************************************/

/**
 * It is a class which represents a node of the Deque.
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
 * It is the class which contains all the functions based on the Deque 
 * Data Structure.
 */
class Deque {

    // Constructor to create a new LinkedList object when called.
    constructor() {

        /**
         * @var {Node}   head  It is a pointer/reference to the head of the Deque.
         * @var {Number} size  It contains the size of the Deque.
         */
        this.head = null;
        this.size = 0;
    }

    /**
     * It is the function to check if the Deque is empty or not.
     * 
     * @returns {Boolean} It returns true/false based on the condition.
     */
    isEmpty() {

        // Return the condition comparing size of the Deque to 0.
        return this.size == 0;
    }

    /**
     * It is the function to get the size of the Deque.
     * 
     * @returns {Number} It returns the size of the Deque.
     */
    getSize() {

        // Return the 'size' instance variable of this class.
        return this.size;
    }

    /**
     * It is a function to add a Node to the start of the Deque.
     * 
     * @param {any} data  It contains the data passed by the function caller.
     * 
     * @returns {Boolean} It returns true/false if the new node is added or not.
     */
    addFront(data) {

        // Creating a new Node passing the data.
        var node = new Node1(data);

        // Validating if the deque is empty or not.
        if (this.isEmpty()) {

            // If yes, then adding the node and marking it as head.
            this.head = node;

            // Incrementing the size of the deque & returning true that the value has been added.
            this.size++;
            return true;
        }

        // Assigning next of node to head of the deque.
        node.next = this.head;

        // Assigning head to the new node.
        this.head = node;

        // Incrementing the size of the deque & returning true that the value has been added.        
        this.size++;
        return true;
    }

    /**
     * It is a function to add a Node to the end of the Deque.
     * 
     * @param {any} data  It contains the data passed by the function caller.
     * 
     * @returns {Boolean} It returns true/false if the new node is added or not.
     */
    addRear(data) {

        // Creating a new Node passing the data.
        var node = new Node1(data);

        // Declaration of current variable which will keep track of the current node.
        var current;

        // Validating if the list is empty or not.
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

            // When current reaches the end of node, putting the node at current.next.
            current.next = node;
        }

        // Incrementing the size of the list & returning true that the value has been added.
        this.size++;
        return true;
    }

    /**
     * It is a function which removes and returns the last item in the Deque.
     * 
     * @returns {any}  It returns the data of the node present at the end of the Deque.
     */
    removeFront() {

        // Validation if the Deque is empty or not.
        if (this.isEmpty()) {

            // If yes, then return back to the caller.
            return;
        }

        // Storing the data of head in 'data' & pointing the head to it's next node.
        var data = this.head.data;
        this.head = this.head.next;

        // Decrementing the size of the Deque & returning true that the value has been added.
        this.size--;
        return data;
    }

    /**
     * It is a function which removes and returns the last item in the Deque.
     * 
     * @returns {any}  It returns the data of the node present at the end of the Deque.
     */
    removeRear() {

        // Validation if the Deque is empty or not.
        if (this.isEmpty()) {

            // If yes, then return back to the caller.
            return;
        }

        // Validation if the Deque size if 1, i.e. Deque contains only one element.
        if (this.size == 1) {

            // If yes, then storing the data at head in data variable.
            var data = this.head.data;

            // Assigning head to null.
            this.head = null;

            // Decrementing the size of the Deque.
            this.size--;

            // And returning the data.
            return data;
        }


        // Assigning head's address/reference to temp variable.
        var temp = this.head;

        // This runs till the second last element of the Deque.
        for (var i = 0; i < this.size - 1; i++) {

            // Incrementing temp to it's next node.
            temp = temp.next;
        }

        // Storing temp's data in data variable.
        var data = temp.data;

        // Removing last element of the Deque.
        temp.next = null;

        // Decrementing the size of the Deque & returning true that the value has been added.
        this.size--;
        return data;
    }

    /**
     * Function to display the Deque.
     */
    show() {

        // Temporary variable which will run throught the Deque.
        var temp = this.head;

        // For loop will run throughout the Deque & print each node's data.
        for (var i = 0; i < this.size; i++) {
            console.log(temp.data + " ");
            temp = temp.next;
        }
    }
}

// function main() {
// }
// main();

// Exporting Deque module to use it's properties in other projects.
module.exports = { Deque };