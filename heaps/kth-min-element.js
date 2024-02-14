/**
 * Find the kth Smallest Element in a Row-wise and Column-wise Sorted Matrix using a Min Heap
 */

class MinHeapNode {
    constructor(value, row, col) {
        this.value = value;
        this.row = row;
        this.col = col;
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
                this.heap[leftChildIndex].value <
                this.heap[smallestChildIndex].value
            ) {
                smallestChildIndex = leftChildIndex;
            }

            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex].value <
                this.heap[smallestChildIndex].value
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

function kthSmallest(matrix, k) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const minHeap = new MinHeap();

    // Insert the first element of each row into the min heap
    for (let i = 0; i < rows; i++) {
        const node = new MinHeapNode(matrix[i][0], i, 0);
        minHeap.insert(node);
    }

    // Extract the minimum element k times
    for (let i = 0; i < k - 1; i++) {
        const minNode = minHeap.extractMin();

        // If there is a valid element in the same row, insert it into the min heap
        if (minNode.col + 1 < cols) {
            const nextNode = new MinHeapNode(
                matrix[minNode.row][minNode.col + 1],
                minNode.row,
                minNode.col + 1
            );
            minHeap.insert(nextNode);
        }
    }

    // The root of the heap contains the kth smallest element
    return minHeap.heap[0].value;
}

const matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
];
const k = 8;

const kthSmallestElement = kthSmallest(matrix, k);
console.log(kthSmallestElement); 
