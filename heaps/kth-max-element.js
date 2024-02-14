/**
 * Given an unsorted array of integers, write a function to find the kth largest element in the array using a heap.
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    extractMin() {
        if (this.isEmpty()) {
            return null;
        }

        const minElement = this.heap[0];
        const lastElement = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastElement;
            this.heapifyDown();
        }

        return minElement;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.heap[parentIndex] > this.heap[currentIndex]) {
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
                this.heap[leftChildIndex] < this.heap[smallestChildIndex]
            ) {
                smallestChildIndex = leftChildIndex;
            }

            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex] < this.heap[smallestChildIndex]
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

function findKthLargest(nums, k) {
    const minHeap = new MinHeap();

    // Build a min-heap of the first k elements
    for (let i = 0; i < k; i++) {
        minHeap.insert(nums[i]);
    }

    // Update the heap with larger elements from the remaining array
    for (let i = k; i < nums.length; i++) {
        if (nums[i] > minHeap.heap[0]) {
            minHeap.extractMin();
            minHeap.insert(nums[i]);
        }
    }

    // The root of the heap contains the kth largest element
    return minHeap.heap[0];
}

const nums = [3, 1, 4, 2, 5];
const k = 2;

const kthLargest = findKthLargest(nums, k);
console.log(kthLargest); 