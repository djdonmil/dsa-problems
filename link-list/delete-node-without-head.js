// Problem Statement:
// Delete a node without the head node in a linked list

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function deleteNodeWithoutHead(nodeToDelete) {
    // Check if the node and its next node are present
    if (nodeToDelete === null || nodeToDelete.next === null) {
      console.log("Cannot delete the node without the head or next node.");
      return;
    }
  
    // Copy the value of the next node to the current node
    nodeToDelete.value = nodeToDelete.next.value;
  
    // Update the next pointer to skip the next node
    nodeToDelete.next = nodeToDelete.next.next;
  
    console.log("Node deleted successfully.");
  }
  
  // Example Usage:
  
  // Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  
  // Deleting the node with value 3 (assuming you have a reference to this node)
  let nodeToDelete = head.next.next; // This points to the node with value 3
  deleteNodeWithoutHead(nodeToDelete);
  
  // Displaying the updated linked list: 1 -> 2 -> 4 -> 5
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
  