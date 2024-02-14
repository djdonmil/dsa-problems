// Problem Statement:
// You are given a queue of integers and a positive integer K. Your task is to reverse the order of the first K elements in the queue, while keeping the remaining elements in the same order.

// Write a function reverseKElements(queue, K) that takes two parameters:

// queue: An array representing the queue of integers. K: A positive integer indicating the number of elements to be reversed. The function should return the modified queue after reversing the first K elements.



function reverseKElements(queue, K) {
    if (!Array.isArray(queue) || K <= 0 || K > queue.length) {
        // Invalid input, return the original queue
        return queue;
    }

    // Reverse the first K elements using array slice and reverse
    const reversedKElements = queue.slice(0, K).reverse();

    // Concatenate the reversed K elements with the remaining elements
    const modifiedQueue = reversedKElements.concat(queue.slice(K));

    return modifiedQueue;
}

// Example usage:
const inputQueue = [1, 2, 3, 4, 5, 6, 7];
const K = 3;
const result = reverseKElements(inputQueue, K);

console.log(result); 