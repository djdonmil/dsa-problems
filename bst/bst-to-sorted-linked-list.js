/**
 * Convert a Binary Search Tree (BST) to a sorted linked list.
 */
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function bstToSortedLinkedList(root) {
    // Helper function for in-order traversal
    function inOrderTraversal(node) {
      if (node !== null) {
        inOrderTraversal(node.left);
  
        // Create a new ListNode for the current node in the BST
        const newNode = new ListNode(node.value);
  
        // Connect the new node to the last node in the linked list
        if (!inOrderTraversal.sortedList) {
          inOrderTraversal.sortedList = newNode;
        } else {
          let current = inOrderTraversal.sortedList;
          while (current.next) {
            current = current.next;
          }
          current.next = newNode;
        }
  
        inOrderTraversal(node.right);
      }
    }
  
    // Initialize the result as an empty linked list
    inOrderTraversal.sortedList = null;
  
    // Start in-order traversal
    inOrderTraversal(root);
  
    return inOrderTraversal.sortedList;
  }
  
  // Example usage:
  // Construct a sample BST
  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(5);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  
  // Convert the BST to a sorted linked list
  const sortedLinkedList = bstToSortedLinkedList(root);
  
  // Print the values of the sorted linked list
  let current = sortedLinkedList;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
  