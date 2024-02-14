// Problem Statement:
// You are given two linked lists that represent two non-negative integers. The digits are stored in reverse order, and each node of the linked list contains a single digit. Your task is to subtract the second linked list from the first linked list and return the result as a new linked list.

// Write a JavaScript program that takes input for the two linked lists and performs the subtraction operation.


class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Function to subtract two linked lists representing non-negative integers
  function subtractLinkedLists(list1, list2) {
    let resultHead = null;
    let resultTail = null;
    let borrow = 0;
  
    while (list1 !== null || list2 !== null) {
      // Get the values of the current nodes or default to 0 if the node is null
      let value1 = list1 ? list1.value : 0;
      let value2 = list2 ? list2.value : 0;
  
      // Perform subtraction with borrow
      let diff = value1 - value2 - borrow;
  
      // Update borrow for the next iteration
      borrow = diff < 0 ? 1 : 0;
  
      // Adjust diff for negative results
      if (diff < 0) {
        diff += 10;
      }
  
      // Create a new node for the result
      let newNode = new Node(diff);
  
      // Update the result linked list
      if (resultHead === null) {
        resultHead = newNode;
        resultTail = newNode;
      } else {
        resultTail.next = newNode;
        resultTail = newNode;
      }
  
      // Move to the next nodes in both linked lists
      if (list1 !== null) {
        list1 = list1.next;
      }
      if (list2 !== null) {
        list2 = list2.next;
      }
    }
  
    return resultHead;
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
  
  // Creating linked list 1: 7 -> 1 -> 6 (represents the number 617)
  let list1 = new Node(7);
  list1.next = new Node(1);
  list1.next.next = new Node(6);
  
  // Creating linked list 2: 5 -> 9 -> 2 (represents the number 295)
  let list2 = new Node(5);
  list2.next = new Node(9);
  list2.next.next = new Node(2);
  
  // Subtracting the linked lists
  let result = subtractLinkedLists(list1, list2);
  
  // Displaying the result linked list
  printLinkedList(result);
  