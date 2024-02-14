/**
 * Write a program to sort an array of integers using a min heap. The array can contain both positive and negative integers. The program should use a min heap data structure to efficiently sort the array in ascending order
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

function heapSort(arr) {
    const minHeap = new MinHeap();

    // Build min heap
    for (let i = 0; i < arr.length; i++) {
        minHeap.insert(arr[i]);
    }

    // Extract elements from the min heap and place them in the array
    for (let i = 0; i < arr.length; i++) {
        arr[i] = minHeap.extractMin();
    }

    return arr;
}

const unsortedArray = [5, -2, 9, -7, 3, 1];
const sortedArray = heapSort(unsortedArray.slice());

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
