/**
 * Given an array of integers, write a function to determine whether the array represents a min heap or not. A min heap is a complete binary tree where the value of each node is less than or equal to the values of its children.
 */

function isMinHeap(arr) {
    const n = arr.length;
  
    // Helper function to check the min-heap property
    function isMinHeapUtil(index) {
      // If the node is a leaf, it satisfies the min-heap property
      if (index >= n || 2 * index + 1 >= n) {
        return true;
      }
  
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
  
      // Check if the current node is less than or equal to its children
      if (arr[index] <= arr[leftChild] && arr[index] <= arr[rightChild]) {
        // Recursively check the left and right subtrees
        return (
          isMinHeapUtil(leftChild) &&
          isMinHeapUtil(rightChild)
        );
      }
  
      return false;
    }
  
    // Start the check from the root (index 0)
    return isMinHeapUtil(0);
  }
  
  const minHeapArray = [2, 7, 8, 8, 10, 11, 13];
  const notMinHeapArray = [2, 7, 4, 8, 10, 11, 13];
  
  console.log(isMinHeap(minHeapArray)); 
  console.log(isMinHeap(notMinHeapArray)); 