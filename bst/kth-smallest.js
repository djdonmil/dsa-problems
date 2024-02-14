/**
 * Write a function to find the kth smallest element in a Binary Search Tree (BST)
 */

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class KthSmallest {
    constructor() {
      this.kth = null;
      this.count = 0;
    }
  }
  
  function kthSmallestElement(root, k) {
    const kthSmallestObj = new KthSmallest();
    inOrderTraversal(root, kthSmallestObj, k);
    return kthSmallestObj.kth;
  }
  
  function inOrderTraversal(node, kthSmallestObj, k) {
    if (node === null || kthSmallestObj.count >= k) {
      return;
    }
  
    // Traverse the left subtree
    inOrderTraversal(node.left, kthSmallestObj, k);
  
    // Process the current node
    kthSmallestObj.count++;
    if (kthSmallestObj.count === k) {
      kthSmallestObj.kth = node.value;
      return;
    }
  
    // Traverse the right subtree
    inOrderTraversal(node.right, kthSmallestObj, k);
  }
  
  // Example usage:
  // Construct a sample BST
  const root = new TreeNode(3);
  root.left = new TreeNode(1);
  root.right = new TreeNode(4);
  root.left.right = new TreeNode(2);
  
  // Find the 2nd smallest element in the BST
  const result = kthSmallestElement(root, 2);
  console.log(result); // Should output: 2
  