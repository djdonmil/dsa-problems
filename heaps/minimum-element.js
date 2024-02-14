/**
 * Given a min heap, find the minimum element.
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    getMin() {
        if (this.isEmpty()) {
            return null; // The heap is empty
        }

        return this.heap[0]; // The minimum element is at the root
    }

    // Other min heap operations (insert, extractMin, etc.) can be implemented here

    isEmpty() {
        return this.heap.length === 0;
    }
}

const minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(5);
minHeap.insert(2);
minHeap.insert(8);

const minElement = minHeap.getMin();
console.log(minElement); 
