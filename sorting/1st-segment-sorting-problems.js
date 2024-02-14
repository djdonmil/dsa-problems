'use strict'

// Implement the Merge Sort algorithm to sort an array of numbers in ascending order.	The input should be taken from the user using the prompt. The user should provide a space-separated list of numbers.

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);

    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
// console.log(sortedArray);


// Write a JavaScript function that takes an array of numbers as input and sorts it in ascending order using the Bubble Sort algorithm. Implement the function with the name bubbleSort.

function bubbleSort(arr) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap elements
                sorted = false;
            }
        }
    }
    return arr;
}

//   Write a JavaScript function that takes an array of numbers as input and sorts it in ascending order using the Bubble Sort algorithm. Implement the function with the name bubbleSort.

function bubbleSort(arr) {
    let isSorted = false;

    for (let i = arr.length - 1; i > 0; i--) {
        isSorted = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
                isSorted = false;
            }
        }

        if (isSorted) {
            break;
        }
    }

    return arr;
}


// Write a JavaScript function that takes an array of numbers as input and sorts it in ascending order using the Bubble Sort algorithm. Implement the function with the name bubbleSort.

function bubbleSort(array) {
    let isSorted = true;

    for (let i = array.length - 1; i > 0 && isSorted; i--) {
        isSorted = false;
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap elements
                isSorted = true;
            }
        }
    }

    return array;
}


//   Write a JavaScript function that takes an array of numbers as input and sorts it in ascending order using the Bubble Sort algorithm. Implement the function with the name bubbleSort.

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) {
            continue;
        }
        if (arr[i] > pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat([pivot], quickSort(right));
}

const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = quickSort(unsortedArray);
//   console.log(sortedArray);


// Write a JavaScript function that takes an array of numbers as input and sorts it in descending
//  order using the heap Sort algorithm. Implement the function with the name heap Sort.

function heapSort(arr) {
    // TODO: Implement the heapSort function
    const n = arr.length;

    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // One by one extract an element from the heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call max heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, n, i) {
    // TODO: Implement the heapify function
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // left child = 2*i + 1
    const right = 2 * i + 2; // right child = 2*i + 2

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        // Swap arr[i] and arr[largest]
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

//   Sort Array of Strings by Number of Vowels

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

function sortByVowels(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (countVowels(arr[j]) < countVowels(arr[j + 1])) {
                // Swap elements if the number of vowels is greater in the next string
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

// const stringsArray = ["hello", "world", "javascript", "algorithm", "example"];
// const sortedArrayByVowels = sortByVowels(stringsArray.slice());

// console.log("Original array:", stringsArray);
// console.log("Sorted array by vowels:", sortedArrayByVowels);