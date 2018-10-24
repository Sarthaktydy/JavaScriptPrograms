var req = require("./Node")
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    addAppend(data) {
        var node = new req.Node(data);
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
        var node = new req.Node(data);
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
    insertAt(data, pos) {
        if (pos < 0 || pos > this.size) {
            return false;
        }
        var node = new req.Node(data);
        if (pos == 0) {
            this.addFirst(data);
            return;
        } else if (pos == this.size) {
            this.addAppend(data);
            return;
        }

        var prev = this.head;
        var curr = prev.next;
        var count = 0;
        while (count < pos) {
            prev = curr;
            curr = curr.next;
            count++;
        }
        prev.next = node;
        node.next = curr;
        this.size++;
        return true;
    }

    remove(data) {
        var prev = this.head;
        var curr = prev.next;
        for (var i = 0; i < this.size - 1; i++) {
            if (prev.data == data) {
                break;
            }
            prev = curr;
            curr = curr.next;
        }
        if (curr.next != null) {
            prev.next = curr.next;
            curr = null;
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
        var temp = this.head;
        for (var i = 0; i < this.size; i++) {
            temp = temp.next;
        }
        var data = temp.data;
        temp = null;
        this.size--;
        return data;
    }

    pop(pos) {
        if (pos < 0 || pos > this.size) {
            return -1;
        }
        var prev = this.head;
        var curr = prev.next;
        var count = 0;
        while (count < pos) {
            prev = curr;
            curr = curr.next;
            count++;
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

}

function main() {
    var l = new LinkedList();
    l.addAppend(20);
    l.addAppend(30);
    l.addAppend(10);
    l.addAppend(50);
    l.addAppend(60);
    l.addAppend(20);
    l.addAppend(120);
    l.show();
}
main();