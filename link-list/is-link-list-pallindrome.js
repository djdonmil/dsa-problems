// Problem Statement:
// Implement a JavaScript function to check if a given linked list is a palindrome.

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function isPalindromeLinkedList(head) {
    // Step 1: Traverse the linked list and store values in an array
    let values = [];
    let current = head;
  
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
  
    // Step 2: Use two pointers to compare elements from the beginning and end
    let left = 0;
    let right = values.length - 1;
  
    while (left < right) {
      if (values[left] !== values[right]) {
        return false; // Not a palindrome
      }
      left++;
      right--;
    }
  
    return true; // It's a palindrome
  }
  
  // Example Usage:
  
  // Creating a palindrome linked list: 1 -> 2 -> 3 -> 3 -> 2 -> 1
  let palindromeList = new Node(1);
  palindromeList.next = new Node(2);
  palindromeList.next.next = new Node(3);
  palindromeList.next.next.next = new Node(3);
  palindromeList.next.next.next.next = new Node(2);
  palindromeList.next.next.next.next.next = new Node(1);
  
  // Checking if it's a palindrome
  console.log(isPalindromeLinkedList(palindromeList)); 
  
  // Creating a non-palindrome linked list: 1 -> 2 -> 3 -> 4 -> 5
  let nonPalindromeList = new Node(1);
  nonPalindromeList.next = new Node(2);
  nonPalindromeList.next.next = new Node(3);
  nonPalindromeList.next.next.next = new Node(4);
  nonPalindromeList.next.next.next.next = new Node(5);
  
  // Checking if it's a palindrome
  console.log(isPalindromeLinkedList(nonPalindromeList)); 