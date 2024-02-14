/**
 * Find the Smallest Range that includes at least one element from each of the given k sorted lists
 */

class MinHeapNode {
    constructor(value, listIndex, elementIndex) {
      this.value = value;
      this.listIndex = listIndex;
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
  
  function smallestRange(lists) {
    const minHeap = new MinHeap();
    let rangeStart = -Infinity;
    let rangeEnd = Infinity;
  
    // Initialize the min heap with the first element from each list
    for (let i = 0; i < lists.length; i++) {
      const node = new MinHeapNode(lists[i][0], i, 0);
      minHeap.insert(node);
    }
  
    while (true) {
      // Extract the minimum node from the heap
      const minNode = minHeap.extractMin();
  
      // Update the range
      const currentRange = minNode.value - minHeap.heap[0].value;
      if (currentRange < rangeEnd - rangeStart) {
        rangeStart = minHeap.heap[0].value;
        rangeEnd = minNode.value;
      }
  
      // Move to the next element in the same list
      if (minNode.elementIndex + 1 < lists[minNode.listIndex].length) {
        const nextNode = new MinHeapNode(
          lists[minNode.listIndex][minNode.elementIndex + 1],
          minNode.listIndex,
          minNode.elementIndex + 1
        );
        minHeap.insert(nextNode);
      } else {
        // If any list is exhausted, break the loop
        break;
      }
    }
  
    return [rangeStart, rangeEnd];
  }

  const lists = [
    [4, 10, 15, 24, 26],
    [0, 9, 12, 20],
    [5, 18, 22, 30],
  ];
  
  const result = smallestRange(lists);
  console.log(result); 
  