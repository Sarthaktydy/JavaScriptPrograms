class Node1 {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Deque {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size == 0;
    }

    getSize() {
        return this.size;
    }

    addFront(data) {
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

    addRear(data) {
        var node = new Node1(data);
        var curr;
        if (this.head == null) {
            this.head = node;
        } else {
            curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
        return true;
    }

    removeFront() {
        if (this.isEmpty()) {
            return;
        }
        if (this.size == 1) {
            var data = this.head.data;
            this.head = null;
            this.size--;
            return data;
        }

        var data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    }

    removeRear() {
        if (this.isEmpty()) {
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

    peekFront() {
        return this.head.data;
    }
    peekRear() {
        var temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        return temp.data;
    }

    show() {
        var temp = this.head;
        for (var i = 0; i < this.size; i++) {
            console.log(temp.data + " ");
            temp = temp.next;
        }
    }
}

// function main() {
//     var d = new Deque();
//     d.addRear(20);
//     d.addRear(20);
//     d.addRear(20);
//     d.addRear(20);
//     d.addRear(20);
//     d.addRear(20);
//     d.addRear(20);
//     d.addRear(20);
// }
module.exports = { Deque };