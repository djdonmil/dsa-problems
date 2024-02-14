// Problem Statement:
// Write a JavaScript function to perform quicksort on a linked list and return a single-level sorted linked list.


class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function quicksortLinkedList(head) {
    // Base case: if the list is empty or has only one element, it is already sorted
    if (head === null || head.next === null) {
      return head;
    }
  
    // Choose the pivot (in this implementation, we choose the head as the pivot)
    const pivot = head;
    let less = null;
    let equal = null;
    let greater = null;
  
    // Partition the list into three sublists: less, equal, and greater
    let current = head;
    while (current !== null) {
      if (current.value < pivot.value) {
        if (!less) {
          less = current;
          current = current.next;
          less.next = null;
        } else {
          const temp = current;
          current = current.next;
          temp.next = less;
          less = temp;
        }
      } else if (current.value === pivot.value) {
        if (!equal) {
          equal = current;
          current = current.next;
          equal.next = null;
        } else {
          const temp = current;
          current = current.next;
          temp.next = equal;
          equal = temp;
        }
      } else {
        if (!greater) {
          greater = current;
          current = current.next;
          greater.next = null;
        } else {
          const temp = current;
          current = current.next;
          temp.next = greater;
          greater = temp;
        }
      }
    }
  
    // Recursively sort the less and greater sublists
    const sortedLess = quicksortLinkedList(less);
    const sortedGreater = quicksortLinkedList(greater);
  
    // Concatenate the sorted less, equal (pivot), and sorted greater sublists
    return concatenateLinkedList(sortedLess, equal, sortedGreater);
  }
  
  function concatenateLinkedList(left, middle, right) {
    let resultHead = left || middle || right;
  
    let current = resultHead;
  
    if (left) {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = middle || right;
    }
  
    if (middle) {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = right;
    }
  
    return resultHead;
  }
  
  // Example Usage:
  
  // Creating an unsorted linked list: 3 -> 1 -> 4 -> 2 -> 5
  let unsortedList = new Node(3);
  unsortedList.next = new Node(1);
  unsortedList.next.next = new Node(4);
  unsortedList.next.next.next = new Node(2);
  unsortedList.next.next.next.next = new Node(5);
  
  // Sorting the linked list using quicksort
  let sortedList = quicksortLinkedList(unsortedList);
  
  // Displaying the sorted linked list
  while (sortedList !== null) {
    console.log(sortedList.value);
    sortedList = sortedList.next;
  }
  