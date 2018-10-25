class Node1 {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
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

    push(data) {
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

    pop() {
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

    peek() {
        if (this.isEmpty()) {
            return;
        }
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
//     var s = new Stack();
//     s.push(10);
//     s.push(12);
//     s.push(23);
//     s.push(1);
//     s.push(2);
//     s.push(6);
//     console.log(s.peek());
//     console.log(s.pop());
//     console.log(s.pop());
//     console.log(s.pop());
//     console.log(s.pop());
//     console.log(s.pop());
//     console.log(s.pop());

//     s.show();
// }

// main();

module.exports = { Stack };