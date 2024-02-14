// Problem Statement:
// You are given a linked list. Your task is to rearrange its elements in a zig-zag fashion. The zig-zag fashion means rearranging the elements such that every other element is greater than its previous and next elements. The order of the elements should be maintained.

// Write a JavaScript program that takes input for the elements of the linked list and rearranges them in a zig-zag fashion.

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Function to rearrange a linked list in zig-zag fashion
  function zigZagRearrange(head) {
    let current = head;
  
    while (current !== null && current.next !== null) {
      if ((current.next !== null) && (current.value < current.next.value)) {
        // Swap the current node with its next node
        let temp = current.value;
        current.value = current.next.value;
        current.next.value = temp;
      }
  
      if ((current.next !== null) && (current.next.next !== null) && (current.next.value < current.next.next.value)) {
        // Swap the next node with its next next node
        let temp = current.next.value;
        current.next.value = current.next.next.value;
        current.next.next.value = temp;
      }
  
      current = current.next.next; // Move to the next pair of nodes
    }
  }
  
  // Function to print a linked list
  function printLinkedList(head) {
    let current = head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
  
  // Example Usage:
  
  // Creating a linked list: 1 -> 3 -> 2 -> 5 -> 4 -> 6
  let linkedList = new Node(1);
  linkedList.next = new Node(3);
  linkedList.next.next = new Node(2);
  linkedList.next.next.next = new Node(5);
  linkedList.next.next.next.next = new Node(4);
  linkedList.next.next.next.next.next = new Node(6);
  
  // Rearrange the linked list in zig-zag fashion
  zigZagRearrange(linkedList);
  
  // Displaying the rearranged linked list
  printLinkedList(linkedList);
  