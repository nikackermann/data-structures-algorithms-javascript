// Linked list is most closesly related to arrays

class Node {
    next: Node | null;

    constructor(public value: any) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: Node;
    tail: Node;
    length: number;

    constructor(value: number) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value: number) {
        const newNode = new Node(value);

        // check if LinkedList is empty
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // set current tail.next to the new node
            this.tail = newNode; // set tail to new node
        }

        this.length++; // increment the LinkedList length
        return this; // return the entire LinkedList
    }

    pop() {
        // edge cases: some items, one item, or no items.

        // no items
        if (!this.head) return undefined;

        // multiple items
        let temp = this.head;
        let pre = this.head;

        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;

        // if only 1 item
        if (this.length === 0) {
            this.head = null as unknown as Node;
            this.tail = null as unknown as Node;
        }

        return temp;
    }

    unshift(value: number) {
        // create a new node
        let newNode = new Node(value);

        // put item into a list with no items
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // new node needs to point to head
            newNode.next = this.head;
            // head set equal to new node
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        // empty linked list
        if (!this.head) return undefined;

        // two or more items
        let temp = this.head;
        this.head = this.head.next as Node;
        temp.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null as unknown as Node;
        }
        return temp;
    }

    get(index: number) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next as Node;
        }
        return temp;
    }

    getLength() {
        console.log('Length: ' + this.length);
    }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(4);
myLinkedList.shift();
// --------------------------
console.log(myLinkedList);
myLinkedList.getLength();
