// Problem Statement:
// You are given two linked lists, list1 and list2. Your task is to find the intersection point of these two linked lists, if it exists. The intersection point is defined as the node at which both lists merge and become common.

// Write a program that takes input for the elements of list1 and list2, and finds the intersection point. If there is no intersection point, the program should output "No Intersection Point".



class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findIntersection(head1, head2) {
    let set1 = new Set();
    let curr = head1;

    while (curr !== null) {
        set1.add(curr);
        curr = curr.next;
    }

    curr = head2;
    while (curr !== null) {
        if (set1.has(curr)) {
            return curr;
        }
        curr = curr.next;
    }

    return null;
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

const list1 = createLinkedList([3, 6, 9, 15, 30]);
const list2 = createLinkedList([10, 15, 30]);

const intersectionNode = findIntersection(list1, list2);

if (intersectionNode === null) {
    console.log("No Intersection Point");
} else {
    console.log("Intersection Point: ", intersectionNode.value);
}
