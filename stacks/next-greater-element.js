/*
Problem Name:
Next Greater Element
*/

/*
Problem Statement:
Given an array of integers, find the next greater element for each element in the array. The next greater element for an element num is the first greater element to its right. If no such element exists, consider it as -1.

Implement a JavaScript function that takes an array of integers and returns an array of the next greater elements.
*/



function nextGreaterElements(arr) {
    const result = [];
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
        // While the stack is not empty and the current element is greater than
        // the element at the index stored in the stack, update the result array
        while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
            const index = stack.pop();
            result[index] = arr[i];
        }

        // Push the current index onto the stack
        stack.push(i);
    }

    // For elements with no greater element to their right, set the result to -1
    while (stack.length > 0) {
        const index = stack.pop();
        result[index] = -1;
    }

    return result;
}

// Example usage:
const inputArray = [4, 5, 2, 10, 8];
const result = nextGreaterElements(inputArray);

console.log(result); 