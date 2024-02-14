
/*
Write a function to check if a given binary tree is a Binary Search Tree (BST). A Binary Search Tree is a binary tree where the values of all nodes in the left subtree are less than or equal to the value of the root node, and the values of all nodes in the right subtree are greater than the value of the root node. Duplicate values are not allowed in a BST.
*/

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function isBST(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    // Base case: an empty tree is a BST
    if (root === null) {
      return true;
    }
  
    // Check if the current node's value is within the valid range
    if (root.value <= min || root.value >= max) {
      return false;
    }
  
    // Recursively check the left and right subtrees
    return (
      isBST(root.left, min, root.value) &&
      isBST(root.right, root.value, max)
    );
  }
  
  // Construct a sample BST
  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(5);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  
  // Check if the tree is a BST
  const result = isBST(root);
  console.log(result); 
  