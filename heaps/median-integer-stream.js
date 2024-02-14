/**
 * Write a program to find the median of a stream of integers using two heaps. The program should maintain two heaps, a max heap and a min heap, to efficiently calculate the median as new integers are added to the stream. The median is the middle value of a set of numbers, which divides the set into two equal halves.
 */

class MedianFinder {
    constructor() {
      this.maxHeap = new MaxHeap();
      this.minHeap = new MinHeap();
    }
  
    addNum(num) {
      if (this.maxHeap.isEmpty() || num < this.maxHeap.peek()) {
        this.maxHeap.insert(num);
      } else {
        this.minHeap.insert(num);
      }
  
      // Balance the heaps
      if (this.maxHeap.size() > this.minHeap.size() + 1) {
        this.minHeap.insert(this.maxHeap.extractMax());
      } else if (this.minHeap.size() > this.maxHeap.size()) {
        this.maxHeap.insert(this.minHeap.extractMin());
      }
    }
  
    findMedian() {
      if (this.maxHeap.size() === this.minHeap.size()) {
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
      } else {
        return this.maxHeap.peek();
      }
    }
  }
  
  class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
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
  
    peek() {
      return this.isEmpty() ? null : this.heap[0];
    }
  
    size() {
      return this.heap.length;
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    heapifyUp() {
      let currentIndex = this.heap.length - 1;
  
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
  
        if (this.heap[parentIndex] < this.heap[currentIndex]) {
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
          this.heap[leftChildIndex] > this.heap[largestChildIndex]
        ) {
          largestChildIndex = leftChildIndex;
        }
  
        if (
          rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex] > this.heap[largestChildIndex]
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
  }
  
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
  
    peek() {
      return this.isEmpty() ? null : this.heap[0];
    }
  
    size() {
      return this.heap.length;
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
  
  const medianFinder = new MedianFinder();
  medianFinder.addNum(1);
  console.log(medianFinder.findMedian()); // Should output: 1
  medianFinder.addNum(2);
  console.log(medianFinder.findMedian()); // Should output: 1.5
  medianFinder.addNum(3);
  console.log(medianFinder.findMedian()); // Should output: 2
  medianFinder.addNum(4);
  console.log(medianFinder.findMedian()); // Should output: 2.5
  medianFinder.addNum(5);
  console.log(medianFinder.findMedian()); // Should output: 3
  