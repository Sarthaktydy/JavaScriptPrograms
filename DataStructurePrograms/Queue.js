class Node1 {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
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

    enqueue(data) {
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

    dequeue() {
        if (this.isEmpty()) {
            return;
        }
        var data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    }

    peek() {
        return this.head.data;
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
    var q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);
    q.enqueue(6);
    q.enqueue(7);
    q.enqueue(8);
    console.log(q.dequeue());
    console.log(q.peek());

    q.show();
}

main();