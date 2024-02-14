'use strict';
// Find non duplicate element in an array.
// Write a function that takes an array of integers as input and returns the non-duplicate element in the array. It is guaranteed that there is exactly one element that does not have a duplicate in the array.

// Example1
// Input:
// 5,2,3,2,5
// Output:
// 3
// Explanation:
// The function should return the non-duplicate element in the array

/**
 * @param {number[]} arr
 * @return {number}
 */
function findNonDuplicateElement(arr) {
    let nonRepeatedNum
    // PLACEHOLDER_JAVASCRIPT_FIND_NON_DUPLICATE_ELEMENT_BODY
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false

        for (let j = 0; j < arr.length; j++) {
            if (j != i && arr[i] === arr[j]) {
                isDuplicate = true
            }
        }
        if (!isDuplicate) {
            nonRepeatedNum = arr[i]
        }
    }
    return nonRepeatedNum
}

// Intersection of Two Arrays
// Take 2 arrays from as an input and return theintersection of the two arrays.Intersection is the common elements in boththe arrays.

// Example1
// Input:

// 1,2,3,4,5
// 4,5,6,7,8
// Output:
// [4, 5]
// Explanation:
// 4 and 5 are common in both the elements

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function findIntersection(arr1, arr2) {
    // PLACEHOLDER_JAVASCRIPT_FIND_INTERSECTION_BODY

    let intersectionArray = []

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !intersectionArray.includes(arr1[i])) {
            intersectionArray.push(arr1[i])
        }
    }
    return intersectionArray
}



// Get the sum of the maximum and minimum values in an array
// Write a function to return the sum of max and min values in an array.

// Example1
// Input:
// 5,2,9,1,7
// Output:
// 10
// Explanation:
// The function should return the sum of the maximum and minimum values in the array.

/**
 * @param {number[]} arr
 * @return {number}
 */
function findSumOfMaxAndMin(arr) {
    // PLACEHOLDER_JAVASCRIPT_FIND_SUM_OF_MAX_AND_MIN_BODY
    let minNum = arr[0]
    let maxNum = arr[0]


    for (let i = 1; i < arr.length; i++) {
        if (minNum > arr[i]) {
            minNum = arr[i]
        }

        if (maxNum < arr[i]) {
            maxNum = arr[i]
        }
    }

    return minNum + maxNum
}



// Old Key New Key
// Take array as an input from the user andreplace occurrences of an old key with a new key in an array

// Example1
// Input:

// 1,2,3,2,4,2,5
// 2
// 6
// Output:
// [1, 6, 3, 6, 4, 6, 5]
// Explanation:
// There are total 3 2s presenting a array which is replaced by 6

/**
 * @param {string[]} arr
 * @param {string} oldKey
 * @param {string} newKey
 * @return {string[]}
 */
function replaceKey(arr, oldKey, newKey) {
    // PLACEHOLDER_JAVASCRIPT_REPLACE_KEY_BODY
    for (let a in arr) {
        if (arr[a] === oldKey) {
            arr[a] = newKey
        }
    }
    return arr
}


// Delete elements in anarray
// Take an array input from the user and delete all the elements which are divisible by 2 and 3

// Example1
// Input:

// 1,2,3,4,5,6,7,8,9
// Output:
// [1, 5, 7]
// Explanation:
// 1 , 5 and 7 are not divisible by 2 and 3.

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function deleteDivisibleElements(arr) {
    // PLACEHOLDER_JAVASCRIPT_DELETE_DIVISIBLE_ELEMENTS_BODY
    let newArr = []
    for (let a in arr) {
        if (!arr[a] % 2 == 0 && !arr[a] % 3 == 0) {
            newArr.push(arr[a])
        }
    }
    return newArr
}


// Take 2 2d arrays from the user and return a 2d array as their sum. Note - rows and cols must be the same of both the input matrix else throw an error message "Arrays must have the same dimensions"

function sumOfTwoMatrices(matrixA, matrixB, N) {
    let sumMatrix = []
    for (let i = 0; i < N; i++) {
        let tempArr = []

        for (let j = 0; j < N; j++) {
            tempArr.push(matrixA[i][j] + matrixB[i][j])
        }
        sumMatrix.push(tempArr)
    }
    return sumMatrix
}

// Transpose a matrix
// Take a 2d array as input and return the tranposeof that 2d Matrix

function transposeMatrix(matrix, rows, columns) {
    // PLACEHOLDER_JAVASCRIPT_TRANSPOSE_MATRIX_BODY
    let transposedMatrix = []
    for (let i = 0; i < columns; i++) {
        let tempArr = []

        for (let j = 0; j < rows; j++) {
            tempArr.push(matrix[j][i])

        }
        transposedMatrix.push(tempArr)
    }
    return transposedMatrix
}

//   Spiral Order Traversal in Array
// Given a 2D array of integers, implement an algorithm to print its elements in spiral order.

/**
 * @param {number[][]} matrix
 * @return {string}
 */
function spiralOrderTraversal(matrix) {
    // PLACEHOLDER_JAVASCRIPT_SPIRAL_ORDER_TRAVERSAL_BODY
    let row = currentRow = matrix.length, column = currentColumn = matrix[0].length;

    while (currentRow > row / 2) {

        // traverse row forward
        for (let i = (column - currentColumn); i < currentColumn; i++) {
            console.log(matrix[row - currentRow][i]);
        }

        // traverse column downward
        for (let i = (row - currentRow + 1); i < currentRow; i++) {
            console.log(matrix[i][currentColumn - 1])
        }

        // traverse row backward
        for (let i = currentColumn - 1; i > (column - currentColumn); i--) {
            console.log(matrix[currentRow - 1][i - 1]);
        }

        // traverse column upward
        for (let i = currentRow - 1; i > (row - currentRow + 1); i--) {
            console.log(matrix[i - 1][column - currentColumn])
        }

        currentRow--;
        currentColumn--;
    }
}

// console.log(spiralOrderTraversal([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))


// Trapping Rain Water
// Given an array representing the heights of bars, find the total amount of rainwater that can be trapped between the bars. 

/**
 * @param {number[]} heights
 * @return {number}
 */
function trapRainWater(heights) {
    // PLACEHOLDER_JAVASCRIPT_TRAP_RAIN_WATER_BODY
    const n = heights.length;
    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);

    leftMax[0] = heights[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], heights[i]);
    }

    rightMax[n - 1] = heights[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], heights[i]);
    }

    let trappedWater = 0;
    for (let i = 0; i < n; i++) {
        trappedWater += Math.min(leftMax[i], rightMax[i]) - heights[i];
    }

    return trappedWater;
}


/**
 * @param {string} elements
 * @return {number}
 */
function maxProductSubarray(elements) {
    // PLACEHOLDER_JAVASCRIPT_MAX_PRODUCT_SUBARRAY_BODY
    const n = elements.length;
    let maxProduct = (-Number.MAX_VALUE) * 2
    let maxProductRev = (-Number.MAX_VALUE) * 2
    let product = 1

    for (let i = 0; i < n; i++) {
        product *= elements[i]
        maxProduct = Math.max(product, maxProduct)
        if (product == 0) {
            product = 1

        }

    }
    product = 1
    for (let i = n - 1; i > 0; i--) {
        product *= elements[i]
        maxProductRev = Math.max(product, maxProductRev)
        if (product == 0) {
            product = 1

        }
    }

    return Math.max(maxProduct, maxProductRev)


}



// console.log(maxProductSubarray([2, 3, -2, 4]))