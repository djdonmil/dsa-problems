/**
Problem Name:
Reverse a Queue

Problem Statement:
You are given a queue of integers. Your task is to reverse the order of elements in the queue using a stack.

Write a function reverseQueue() that reads a series of space-separated integers representing the elements of the queue from the user and prints the reversed queue.
 
*/

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Function to reverse the order of elements in a queue using a stack
  function reverseQueue(inputQueue) {
    let stack = new Stack();
  
    // Push elements from the queue to the stack
    while (!inputQueue.isEmpty()) {
      stack.push(inputQueue.dequeue());
    }
  
    // Pop elements from the stack and enqueue them back into the queue
    while (!stack.isEmpty()) {
      inputQueue.enqueue(stack.pop());
    }
  
    return inputQueue;
  }
  
  // Function to read input from the user
  function readInputFromUser() {
    let inputQueue = new Queue();
  
    // Reading space-separated integers from the user
    let userInput = prompt("Enter space-separated integers for the queue:");
    let inputArray = userInput.split(" ").map(Number);
  
    // Enqueue the integers into the queue
    for (let num of inputArray) {
      inputQueue.enqueue(num);
    }
  
    return inputQueue;
  }
  
  // Example Usage:
  
  // Reading input from the user
  let queue = readInputFromUser();
  
  // Reversing the order of elements in the queue
  let reversedQueue = reverseQueue(queue);
  
  // Displaying the reversed queue
  while (!reversedQueue.isEmpty()) {
    console.log(reversedQueue.dequeue());
  }
  