/**
 * You are given k sorted arrays of integers. Write a function to merge these k sorted arrays into a single sorted array using a heap.
 */

class MinHeapNode {
    constructor(value, arrayIndex, elementIndex) {
        this.value = value;
        this.arrayIndex = arrayIndex;
        this.elementIndex = elementIndex;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this.heapifyUp();
    }

    extractMin() {
        if (this.isEmpty()) {
            return null;
        }

        const minNode = this.heap[0];
        const lastNode = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastNode;
            this.heapifyDown();
        }

        return minNode;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.heap[parentIndex].value > this.heap[currentIndex].value) {
                this.swap(parentIndex, currentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let currentIndex = 0;

        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let smallestChildIndex = currentIndex;

            if (
                leftChildIndex < this.heap.length &&
                this.heap[leftChildIndex].value < this.heap[smallestChildIndex].value
            ) {
                smallestChildIndex = leftChildIndex;
            }

            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex].value < this.heap[smallestChildIndex].value
            ) {
                smallestChildIndex = rightChildIndex;
            }

            if (smallestChildIndex !== currentIndex) {
                this.swap(currentIndex, smallestChildIndex);
                currentIndex = smallestChildIndex;
            } else {
                break;
            }
        }
    }

    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }
}

function mergeKSortedArrays(arrays) {
    const result = [];
    const minHeap = new MinHeap();

    // Initialize the min heap with the first element from each array
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i].length > 0) {
            const node = new MinHeapNode(arrays[i][0], i, 0);
            minHeap.insert(node);
        }
    }

    // Continue extracting and inserting nodes until the min heap is empty
    while (!minHeap.isEmpty()) {
        const minNode = minHeap.extractMin();
        result.push(minNode.value);

        // Move to the next element in the same array
        if (minNode.elementIndex + 1 < arrays[minNode.arrayIndex].length) {
            const nextNode = new MinHeapNode(
                arrays[minNode.arrayIndex][minNode.elementIndex + 1],
                minNode.arrayIndex,
                minNode.elementIndex + 1
            );
            minHeap.insert(nextNode);
        }
    }

    return result;
}

const sortedArrays = [
    [1, 3, 5],
    [2, 4, 6],
    [0, 7, 8, 9],
];

const mergedArray = mergeKSortedArrays(sortedArrays);
console.log(mergedArray); // output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
