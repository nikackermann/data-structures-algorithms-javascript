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

    set(index: number, value: number) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            // return true b/c we were able to return value.
            return true;
        }
        return false;
    }

    insert(index: number, value: number) {
        // inserting at the beginning of the linked list
        if (index === 0) return this.unshift(value);

        // inserting at the end of the linked list
        if (index === this.length) return this.push(value);

        // for out of bounds
        if (index < 0 || index >= this.length) return false;

        // create a new node to be inserted
        const newNode = new Node(value);

        // create a temp pointer to get item at index - 1
        const temp = this.get(index - 1);

        // check if temp actually exists
        if (temp) {
            newNode.next = temp.next;
            temp.next = newNode;
            this.length++;
        }

        return true;
    }
}

let myLinkedList = new LinkedList(11);
myLinkedList.push(3);
myLinkedList.push(23);
myLinkedList.push(7);
// myLinkedList.set(2, 88);
// --------------------------
console.log(myLinkedList);
myLinkedList.getLength();
