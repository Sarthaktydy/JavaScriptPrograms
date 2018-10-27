//var = require("./Node1")

class Node1 {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    addAppend(data) {
        var node = new Node1(data);
        var current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
        return true;
    }

    addFirst(data) {
        var node = new Node1(data);
        if (this.isEmpty()) {
            this.head = node;
            return true;
        }
        node.next = this.head;
        this.head = node;
        this.size++;
        return true;
    }

    isEmpty() {
        return this.size == 0;
    }

    getSize() {
        return this.size;
    }


    addAt(data, pos) {
        if (pos < 0 || pos > this.size) {
            return false;
        }
        var node = new Node1(data);
        if (pos == 0) {
            node.next = this.head;
            this.head = node;
            return true;
        } else {

            var prev, curr = this.head;
            var count = 0;
            while (count < pos) {
                prev = curr;
                curr = curr.next;
                count++;
            }
            node.next = curr;
            prev.next = node;
        }
        this.size++;
        return true;
    }

    addByOrder(data) {
        var node = new Node1(data);
        if (this.isEmpty()) {
            this.head = node;
            this.size++;
            return true;
        }
        if (data < this.head.data) {
            this.addFirst(data);
            return true;
        } else {
            var curr = this.head;
            var count = 0;
            while (curr.next != null) {
                if (data >= curr.data) {
                    curr = curr.next;
                    count++;
                }
                if (data < curr.data) {
                    count++;
                    break;
                }
            }
            if (count == this.size - 1) {
                this.addAppend(data);
                return true;
            }
            this.addAt(data, count - 1);
            return true;
        }
    }

    remove(data) {
        var prev,
            curr = this.head;
        var count = 0;
        for (var i = 0; i < this.size - 2; i++) {
            if (curr.data == data) {
                break;
            } else {
                count++;
                prev = curr;
                curr = curr.next;
            }
        }
        if (count == 0) {
            curr = curr.next;
            this.head = curr;
            this.size--;
            return true;
        } else if (count < this.size) {
            prev.next = curr.next;
            this.size--;
            return true;
        } else {
            console.log("Element not found.");
            return false;
        }
    }

    search(data) {
        var temp = this.head;
        for (var i = 0; i < this.size; i++) {
            if (temp.data == data) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }

    index(data) {
        var temp = this.head;
        for (var i = 0; i < this.size; i++) {
            if (temp.data == data) {
                return i;
            }
            temp = temp.next;
        }
        return -1;
    }

    pop() {
        if (this.size == 0) {
            return;
        }
        if (this.size == 1) {
            var data = this.head.data;
            this.head = null;
            this.size--;
            return data;
        }
        var temp = this.head;
        for (var i = 0; i < this.size - 1; i++) {
            temp = temp.next;
        }
        var data = temp.data;
        temp.next = null;
        this.size--;
        return data;
    }

    popAtPos(pos) {
        if (pos < 0 || pos > this.size) {
            return -1;
        }
        if (pos == 0) {
            var data = this.head.data;
            this.head = this.head.next;
            this.size--;
            return data;
        }
        if (pos == this.size - 1) {
            this.pop();
            return;
        }
        //12345
        var prev = this.head,
            curr = this.head;

        for (var i = 0; i < pos; i++) {
            prev = curr;
            curr = curr.next;
        }
        var data = curr.data;
        prev.next = curr.next;
        this.size--;
        return data;
    }

    show() {
        var temp = this.head;
        for (var i = 0; i < this.size; i++) {
            console.log(temp.data + " ");
            temp = temp.next;
        }
    }

    getList() {
        if (this.isEmpty()) {
            return "";
        }
        var temp = this.head;
        var str = "";
        for (var i = 0; i < this.size; i++) {
            str = str + temp.data + " ";
            temp = temp.next;
        }
        return str;
    }
}

// function main() {
//     var l = new LinkedList();
//     l.addByOrder(10);
//     l.addByOrder(5);
//     l.addByOrder(7);
//     l.addByOrder(3);
//     l.addByOrder(12);
//     l.addByOrder(34);
//     l.addByOrder(1);
//     l.addByOrder(8);
//     l.addByOrder(35);
//     l.addByOrder(10);
//     l.addByOrder(1);
//     l.addByOrder(3);
//     l.show();
//     //console.log(l.getSize());
//     console.log(l.getList());
// }
// main();


module.exports = { LinkedList };