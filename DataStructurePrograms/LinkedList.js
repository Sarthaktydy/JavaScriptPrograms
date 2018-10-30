/******************************************************************************
 *  Compilation:  node LinkedList.js
 *  
 *  Purpose: This is a helper class which has all the function which can be used
 *           to manipulate with a Linked List based on Linked List Data Structure.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   23-10-2018
 *
 ******************************************************************************/

/**
 * It is a class which represents a node of the Linked List.
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
 * It is the class which contains all the functions based on the Linked List 
 * Data Structure.
 */
class LinkedList {

    // Constructor to create a new LinkedList object when called.
    constructor() {

        /**
         * @var {Node}   head  It is a pointer/reference to the head of the linked list.
         * @var {Number} size  It contains the size of the linked list.
         */
        this.head = null;
        this.size = 0;
    }

    /**
     * It is the function to check if the list is empty or not.
     * 
     * @returns {Boolean} It returns true/false based on the condition.
     */
    isEmpty() {

        // Return the condition comparing size of the list to 0.
        return this.size == 0;
    }

    /**
     * It is the function to get the size of the list.
     * 
     * @returns {Number} It returns the size of the list.
     */
    getSize() {

        // Return the 'size' instance variable of this class.
        return this.size;
    }

    /**
     * It is a function to add a Node to the end of the Linked List.
     * 
     * @param {any} data  It contains the data passed by the function caller.
     * 
     * @returns {Boolean} It returns true/false if the new node is added or not.
     */
    addAppend(data) {

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
     * It is a function to add a Node to the start of the Linked List.
     * 
     * @param {any} data  It contains the data passed by the function caller.
     * 
     * @returns {Boolean} It returns true/false if the new node is added or not.
     */
    addFirst(data) {

        // Creating a new Node passing the data.
        var node = new Node1(data);

        // Validating if the list is empty or not.
        if (this.isEmpty()) {

            // If yes, then adding the node and marking it as head.
            this.head = node;

            // Incrementing the size of the list & returning true that the value has been added.
            this.size++;
            return true;
        }

        // Assigning next of node to head of the list.
        node.next = this.head;

        // Assigning head to the new node.
        this.head = node;

        // Incrementing the size of the list & returning true that the value has been added.        
        this.size++;
        return true;
    }

    /**
     * It is a function to add a Node at a particular position in the Linked List.
     * 
     * @param {*} data  It contains the data passed by the function caller.
     * @param {*} pos   It contains the position at which the new node should be placed.
     * 
     * @returns {Boolean} It returns true/false if the new node is added or not.
     */
    addAt(data, pos) {

        // Validating if the position is negative or greater than List size.
        if (pos < 0 || pos > this.size) {

            // If yes, then return false, as it's not possible to add node at this position.
            return false;
        }

        // Creating a new Node passing the data.
        var node = new Node1(data);

        // Validation if position is 0
        if (pos == 0) {

            // If yes, then adding the node at the head of the list & returning true.
            node.next = this.head;
            this.head = node;
            return true;

        } else {

            /**
             * If no, then initializing two variables prev & curr to head, which will 
             * hold the address/refernce of previous node & current node respectively.
             */
            var prev, curr = this.head;

            // Taking a count variable to be compared with position.
            var count = 0;

            // This loop will run till count is less than position.
            while (count < pos) {

                // Assigning prev node to current node.
                prev = curr;

                // Incrementing curr variable by assigning it its next node.
                curr = curr.next;

                // Incrementing the count variable.
                count++;
            }

            // After the loop, assigning the next of next to curr position.
            node.next = curr;

            // And assigning next of prev node to new node.
            prev.next = node;
        }

        // Incrementing the size of the list & returning true that the value has been added.        
        this.size++;
        return true;
    }

    /**
     * It is a function to add a Node in ascending order, at it's correct position 
     * in the list.
     * 
     * @param {any} data  It contains the data passed by the function caller.
     * 
     * @returns {Boolean} It returns true/false if the new node is added or not.
     */
    addByOrder(data) {


        // Creating a new Node passing the data.
        var node = new Node1(data);

        // Validating if the list is empty or not.
        if (this.isEmpty()) {

            // If yes, then adding the node and marking it as head.
            this.head = node;

            // Incrementing the size of the list & returning true that the value has been added.
            this.size++;
            return true;
        }

        // Checking if the data passed is smaller than the data at head of the list.
        if (data < this.head.data) {

            // If yes, then calling addFirst() function to add the node at the start.
            this.addFirst(data);
            return true;

        } else {

            // Assingning curr variable to the head of the list.
            var curr = this.head;

            // Initializing count variable to 0;
            var count = 0;

            // This loop will run till curr.next is not equal to null.
            while (curr.next != null) {

                // Valildating if the data passed is greater than or equal to curr.data.
                if (data >= curr.data) {

                    // Incrementing curr variable to its next node.
                    curr = curr.next;

                    // Incrementing the count variable.
                    count++;
                }

                // Validating if the data passed is smaller than curr.data.
                if (data < curr.data) {

                    // Incrementing the count variable and breaking the loop.
                    count++;
                    break;
                }
            }

            /**
             * Validating if count is equal to size-1, i.e. data passed is greater 
             * than all the data present in the list.
             */
            if (count == this.size - 1) {

                // If yes, then call addAppend() function to add the node to the end of list.
                this.addAppend(data);
                return true;
            }

            // Else add the data at count-1 position by calling addAt() function.
            this.addAt(data, count - 1);
            return true;
        }
    }

    /**
     * It is the function to remove the node from the list which contains the data 
     * which is passed.
     * 
     * @param {any} data  It contains the data passed by the function caller.
     * 
     * @returns {Boolean} It returns true/false if the node containing data is removed or not.
     */
    remove(data) {

        // Initializing prev & curr variable to head of the list.
        var prev, curr = this.head;

        // Intializing the count variabl to 0.
        var count = 0;

        // This loop will run till i is less than size-2.
        for (var i = 0; i < this.size - 2; i++) {

            // Finding if the data is present at curr node.
            if (curr.data == data) {

                // If yes, then break the loop.
                break;

            } else {

                // Assigning prev node to current node.
                prev = curr;

                // Incrementing curr variable by assigning it its next node.
                curr = curr.next;

                // Incrementing the count variable.
                count++;
            }
        }

        // Checking if count is zero, i.e the node is present at the head.
        if (count == 0) {

            // If yes, then remove the node at head, and point the head to the next node.
            curr = curr.next;
            this.head = curr;

            // Decrementing the size of the list and returning true.
            this.size--;
            return true;
        }

        // Validating if count is less than size of the list.
        else if (count < this.size) {

            // Assigning next of prev to next of curr node, this will remove curr node from the list.
            prev.next = curr.next;

            // Decrementing the size of the list and returning true.
            this.size--;
            return true;

        } else {

            // If neither of the condtion satisfies, then the element is not present in the list.
            console.log("Element not found.");
            return false;
        }
    }

    /**
     * It is a function which removes and returns the last item in the list.
     * 
     * @returns {any}  It returns the data of the node present at the end of the list.
     */
    pop() {

        // Validation if the list is empty or not.
        if (this.isEmpty()) {

            // If yes, then return back to the caller.
            return;
        }

        // Validation if the list size if 1 or not, i.e. list contains only one element.
        if (this.size == 1) {

            // If yes, then storing the data at head in data variable.
            var data = this.head.data;

            // Assigning head to null.
            this.head = null;

            // Decrementing the size of the list.
            this.size--;

            // And returning the data.
            return data;
        }


        // Assigning head's address/reference to temp variable.
        var temp = this.head;

        // This runs till the second last element of the list.
        for (var i = 0; i < this.size - 1; i++) {

            // Incrementing temp to it's next node.
            temp = temp.next;
        }

        // Storing temp's data in data variable.
        var data = temp.data;

        // Removing last element of the List.
        temp.next = null;
        this.size--;
        return data;
    }

    /**
     * Function to remove the node present an element present at a specifin position.
     * 
     * @param {Number} pos  It it the position at which the node is to be removed
     * @returns {any}  It returns the data present at 'pos' position in the list.
     */
    popAtPos(pos) {

        // Validation if position passed is valid or not.
        if (pos < 0 || pos > this.size) {

            // If not, return back to the caller;
            return;
        }

        // If the position specified is zero, then remove the element from head.
        if (pos == 0) {
            var data = this.head.data;
            this.head = this.head.next;
            this.size--;
            return data;
        }

        // If the position specified is for the last element, call the pop() function.
        if (pos == this.size - 1) {
            this.pop();
            return;
        }

        // Initializing two runner variables.
        var prev = this.head,
            curr = this.head;

        // This loop will run till the position mentioned.
        for (var i = 0; i < pos; i++) {

            // prev points previous node & curr points current node.
            prev = curr;
            curr = curr.next;
        }

        // Storing curr's data in data & removing that node from the list.
        var data = curr.data;
        prev.next = curr.next;

        // Reducing the size of the list & returning the data.
        this.size--;
        return data;
    }

    /**
     * It is the function to search for a given data in the list, if it is present or not.
     * 
     * @param {any} data  It contains the data passed by the function caller.
     * 
     * @returns {Boolean} It returns true/false if the node containing data is found or not.
     */
    search(data) {

        // Initializing a temp variable to the head of the list.
        var temp = this.head;

        // This loop will run through the entire list for searching.
        for (var i = 0; i < this.size; i++) {

            // Checking if the data is present at temp node.
            if (temp.data == data) {

                // If yes, then returning true as the data is found.
                return true;
            }

            // If not, incrementing the temp node to it's next node for checking.
            temp = temp.next;
        }

        // If data is not found, then return false.
        return false;
    }

    /**
     * It is the function to find the index/positon of the data passed in the list.
     * 
     * @param {any} data  It contains the data passed by the function caller.
     * 
     * @returns {Number}  It returns the index of the data passed in the list.
     */
    index(data) {

        // Initializing a temp variable to the head of the list.
        var temp = this.head;

        // This loop will run through the entire list for searching.
        for (var i = 0; i < this.size; i++) {

            // Checking if the data is present at temp node.
            if (temp.data == data) {

                // If yes, then return i as the index of.
                return i;
            }

            // If not, incrementing the temp node to it's next node for checking.
            temp = temp.next;
        }

        // If data is not found, then return -1.
        return -1;
    }

    /**
     * Function to display the Linked list.
     */
    show() {

        // Temporary variable which will run throught the list.
        var temp = this.head;

        // For loop will run throughout the list & print each node's data.
        for (var i = 0; i < this.size; i++) {
            console.log(temp.data + " ");
            temp = temp.next;
        }
    }

    /**
     * Function which will return the entire list in a String format with a single
     * space between them.
     * 
     * @returns {String}  It returns the string storing whole queue.
     */
    getList() {

        // Checking if the list is empty or not. If yes, return an empty string.
        if (this.isEmpty()) {
            return "";
        }

        // Temporary variable which will run throught the list.
        var temp = this.head;
        var str = ""; // Initializing an empty string.

        // This loop will run throughout the list & concatenate each node's data to 'str'.
        for (var i = 0; i < this.size; i++) {
            if (i == this.size - 1) {
                str = str + temp.data;
                break;
            }
            str = str + temp.data + " ";
            temp = temp.next;
        }

        // At last return the string 'str'.
        return str;
    }
}

// function main() {
// }
// main();

// Exporting LinkedList module to use it's properties in other projects.
module.exports = { LinkedList };