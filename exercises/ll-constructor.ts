class Node {
    // next can be a Node or it can be null
    next: Node | null;

    // intial value = value and intial next is null
    constructor(public value: any) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: Node;
    tail: Node;
    length: number;

    constructor(public value: any) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    printList() {
        let temp: Node | null = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log('Head: null');
        } else {
            console.log('Head: ' + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log('Tail: null');
        } else {
            console.log('Tail: ' + this.tail.value);
        }
    }

    getLength() {
        console.log('Length: ' + this.length);
    }
}

function test() {
    let myLinkedList = new LinkedList(4);

    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log('\nLinked List:');
    myLinkedList.printList();
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/
