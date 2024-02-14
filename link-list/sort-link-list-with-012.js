// Problem Statement:
// Given a linked list of 0s, 1s and 2s, The task is to sort and print it.


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function sortList(head) {
    let zeroCount = 0;
    let oneCount = 0;
    let twoCount = 0;

    let curr = head;
    while (curr !== null) {
        if (curr.value === 0) {
            zeroCount++;
        } else if (curr.value === 1) {
            oneCount++;
        } else {
            twoCount++;
        }
        curr = curr.next;
    }

    curr = head;
    while (zeroCount > 0) {
        curr.value = 0;
        curr = curr.next;
        zeroCount--;
    }

    while (oneCount > 0) {
        curr.value = 1;
        curr = curr.next;
        oneCount--;
    }

    while (twoCount > 0) {
        curr.value = 2;
        curr = curr.next;
        twoCount--;
    }

    return head;
}

const createLinkedList = (arr) => {
    let head = null;
    let tail = null;

    for (let i = 0; i < arr.length; i++) {
        const node = new Node(arr[i]);

        if (head === null) {
            head = node;
        } else {
            tail.next = node;
        }

        tail = node;
    }

    return head;
};

const printLinkedList = (head) => {
    let curr = head;

    while (curr !== null) {
        console.log(curr.value);
        curr = curr.next;
    }
};

const arr = [2, 1, 0, 2, 1, 0];

const head = createLinkedList(arr);
const sortedHead = sortList(head);
printLinkedList(sortedHead);
