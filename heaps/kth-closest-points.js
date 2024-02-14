/**
Write a program to find the K closest points to the origin (0, 0) in a 2D plane using a max heap. Given a list of points in the form (x, y), your task is to find the K points closest to the origin. The distance between two points (x1, y1) and (x2, y2) is calculated using the Euclidean distance formula: sqrt((x2 - x1)^2 + (y2 - y1)^2).
*/

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(point) {
        this.heap.push(point);
        this.heapifyUp();
    }

    extractMax() {
        if (this.isEmpty()) {
            return null;
        }

        const maxElement = this.heap[0];
        const lastElement = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastElement;
            this.heapifyDown();
        }

        return maxElement;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.compare(this.heap[parentIndex], this.heap[currentIndex]) < 0) {
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
            let largestChildIndex = currentIndex;

            if (
                leftChildIndex < this.heap.length &&
                this.compare(this.heap[leftChildIndex], this.heap[largestChildIndex]) > 0
            ) {
                largestChildIndex = leftChildIndex;
            }

            if (
                rightChildIndex < this.heap.length &&
                this.compare(this.heap[rightChildIndex], this.heap[largestChildIndex]) > 0
            ) {
                largestChildIndex = rightChildIndex;
            }

            if (largestChildIndex !== currentIndex) {
                this.swap(currentIndex, largestChildIndex);
                currentIndex = largestChildIndex;
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

    compare(point1, point2) {
        // Custom comparison function based on Euclidean distance
        const distance1 = Math.sqrt(point1[0] ** 2 + point1[1] ** 2);
        const distance2 = Math.sqrt(point2[0] ** 2 + point2[1] ** 2);

        return distance1 - distance2;
    }
}

function kClosestPoints(points, k) {
    const maxHeap = new MaxHeap();

    for (const point of points) {
        maxHeap.insert(point);

        if (maxHeap.heap.length > k) {
            maxHeap.extractMax();
        }
    }

    // Extract the K closest points from the max heap
    const result = [];
    while (!maxHeap.isEmpty()) {
        result.push(maxHeap.extractMax());
    }

    return result.reverse(); // Reverse the result to get the points in ascending order of distance
}

const points = [
    [1, 3],
    [-2, 2],
    [5, 8],
    [0, 1],
];
const k = 2;

const closestPoints = kClosestPoints(points, k);
console.log(closestPoints); 