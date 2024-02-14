/**
 * 
 * Problem Name:
Queue Rearrangement

Problem Statement:
You are given a queue containing a series of integers. Rearrange the queue in such a way that all even numbers are moved to the front, while odd numbers remain in their original order. Maintain the relative order of the even numbers and the odd numbers.
*/

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Function to rearrange a queue with even numbers moved to the front
function rearrangeQueue(queue) {
    let evenQueue = new Queue();
    let oddQueue = new Queue();

    // Enqueue elements into even or odd queues
    while (!queue.isEmpty()) {
        const element = queue.dequeue();
        if (element % 2 === 0) {
            evenQueue.enqueue(element);
        } else {
            oddQueue.enqueue(element);
        }
    }

    // Enqueue elements from the even queue first, followed by the odd queue
    while (!evenQueue.isEmpty()) {
        queue.enqueue(evenQueue.dequeue());
    }
    while (!oddQueue.isEmpty()) {
        queue.enqueue(oddQueue.dequeue());
    }

    return queue;
}

// Creating a queue: 1, 2, 3, 4, 5
let originalQueue = new Queue();
originalQueue.enqueue(1);
originalQueue.enqueue(2);
originalQueue.enqueue(3);
originalQueue.enqueue(4);
originalQueue.enqueue(5);

// Rearranging the queue
let rearrangedQueue = rearrangeQueue(originalQueue);

// Displaying the rearranged queue
while (!rearrangedQueue.isEmpty()) {
    console.log(rearrangedQueue.dequeue());
}
