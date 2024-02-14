'use strict';

/******************RECURSION ASSIGNMENTS STARTED HERE ******************************/


// String Reversal using Recursion
// Write a recursive function to reverse a given string.

/**
 * @param {string} str
 * @return {string}
 */
let resStr = ''
function reverseString(str, i, n) {
    // TODO: Implement your code here
    if (i === n) {
        return;
    }

    let temp = str[i];

    reverseString(str, i + 1, n);

    resStr = resStr + temp
    return resStr
}


// console.log(reverseString("hello", 0, 5))

// Exponentiation using Recursion
// Write a recursive function to calculate the value of x raised to the power of p (x^p).

/**
 * @param {number} x
 * @param {number} p
 * @return {number}
 */
function exponentiation(x, p) {
    // TODO: Implement your code here


    if (p == 0)
        return 1;

    if (x == 0)
        return 0;

    return x * exponentiation(x, p - 1);

}
// console.log(exponentiation(2,3))

// Power Set using Recursion
// Given a set of distinct integers, write a function to generate all possible subsets (power set) using recursion.

/**
 * Generate the power set of a given array.
 *
 * @param {number[]} nums - The input array.
 * @return {number[][]} The power set of the input array.
 */
function powerSetRecursive(nums, index, subset, powerSet) {
    // TODO: Implement the recursive power set generation

    //base case
    if (index >= nums.length) {
        powerSet.push(subset);
        return;
    }

    //to take it
    powerSetRecursive(nums, index + 1, [...subset, nums[index]], powerSet);

    //not to take it
    powerSetRecursive(nums, index + 1, subset, powerSet);

    return powerSet
}

/**
 * Main function to generate the power set of a given array.
 *
 * @param {string} input - The input array elements (space-separated).
 * @return {number[][]} The power set of the input array.
 */
function powerSetMain(input) {
    // TODO: Implement the main function to generate the power set
    return powerSetRecursive(input, 0, [], [])
}

// console.log(powerSetMain([1, 2, 3]))

// First Index of Occurrence using Recursion
// Given an array of integers and a target value, write a recursive function to find the first index of occurrence of the target value in the array.

function firstIndexOfOccurrenceRecursive(arr, target, index) {
    // TODO: Implement the recursive function
    if (index >= arr.length) {
        return -1
    }

    if (arr[index] == target) {
        return index;
    }

    return firstIndexOfOccurrenceRecursive(arr, target, index + 1)


}


function firstIndexOfOccurrenceMain(arr, target) {
    // TODO: Implement the main function
    return firstIndexOfOccurrenceRecursive(arr, target, 0)
}
// console.log(firstIndexOfOccurrenceMain([2,4,6,8,10], 10))


// ## Problem Statement:
// Subsequence using Recursion


// ## Problem Statement:
// Given a string, write a recursive function to find all possible subsequences of the string.


function subsequenceRecursive(strs, index, subset, returnSet) {
    //TODO: Implement the subsequenceRecursive function

    //base case
    if (index >= strs.length) {
        returnSet.push(subset);

        return;
    }

    //not to take it
    subsequenceRecursive(strs, index + 1, subset, returnSet);

    //to take it
    subsequenceRecursive(strs, index + 1, subset + strs[index], returnSet);


    return returnSet
}

function subsequenceMain(str) {
    //TODO: Implement the subsequenceMain function
    return subsequenceRecursive(str, 0, '', [])
}

//  console.log(subsequenceMain('hello'))

// ## Problem Statement:
// All Indices in Array using Recursion


// ## Problem Statement:
// Given an array and a target element, write a recursive function to find all the indices of the target element in the array.

function indicesRecursive(arr, target, index, resArr) {
    //TODO: Implement the indicesRecursive funtion

    if (index >= arr.length) {
        return;
    }

    if (arr[index] == target) {
        resArr.push(index)
    }

    indicesRecursive(arr, target, index + 1, resArr)

    return resArr

}

function indicesMain(arr, target) {
    //TODO: Implement the indicesMain funtion
    return indicesRecursive(arr, target, 0, [])

}

// console.log(indicesMain([1, 2, 3, 2, 4, 2, 5], 2))



// ## Problem Statement:
// Maze Path using Recursion


// ## Problem Statement:
// Given a maze with obstacles, write a recursive function to find all possible paths from the top-left corner to the bottom-right corner. You can only move down or right.

function mazePathRecursive(row, col, numRows, numCols, currentPath, result) {
    //TODO: Implement the mazePathRecursive function 

    if (row === numRows - 1 && col === numCols - 1) {
        // Reached the bottom-right corner, add the path to the result
        result.push(currentPath);
        return;
    }

    if (row < numRows - 1) {
        // Move down if it's a valid move

        mazePathRecursive(row + 1, col, numRows, numCols, currentPath + 'D', result);
    }

    if (col < numCols - 1) {
        // Move right if it's a valid move

        mazePathRecursive(row, col + 1, numRows, numCols, currentPath + 'R', result);
    }
    return result
}

function mazePathMain(numRows, numCols) {
    //TODO: Implement the mazePathMain funtion

    return mazePathRecursive(0, 0, numRows, numCols, '', [])
}

// console.log(mazePathMain(3, 3))

// ## Problem Statement:
// N-Queens


// ## Problem Statement:
// Given a chessboard of size NÃ—N, write a recursive function to place N queens on the board such that no two queens threaten each other. A queen can move horizontally, vertically, and diagonally in any direction. Find all possible arrangements of queens on the board.

function solveNQueens(N) {
    const result = [];
    const board = new Array(N).fill(0).map(() => new Array(N).fill('.'));

    function isSafe(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
            if (col + (row - i) < N && board[i][col + (row - i)] === 'Q') return false;
        }
        return true;
    }

    function placeQueens(row) {
        if (row === N) {
            const solution = [];
            for (let i = 0; i < N; i++) {
                solution.push([i, board[i].indexOf('Q')]);
            }
            result.push(solution);
            return;
        }

        for (let col = 0; col < N; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                placeQueens(row + 1);
                board[row][col] = '.';
            }
        }
    }

    placeQueens(0);
    return result;
}

const N = 4; // Change N to the desired size of the chessboard
const solutions = solveNQueens(N);
//   console.log(solutions);


// ## Problem Statement:
// Maze Path using Recursion


// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.


const floodFill = function (image, sr, sc, color) {


    if (image[sr][sc] == color) return image;

    fill(image, sr, sc, color, image[sr][sc]);
    return image;

}
const fill = function (image, sr, sc, color, cur) {

    // If sr is less than 0 or greater equals to the length of image or, sc is less than 0 or greater equals to the length of image[0]

    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return;

    // When image[sr][sc] is not equal to previous color
    if (cur != image[sr][sc]) return;

    // Updating image[sr][sc] as a color
    image[sr][sc] = color;
    // Make four recursive calls to the function with (sr-1, sc), (sr+1, sc), (sr, sc-1) and (sr, sc+1)...
    fill(image, sr - 1, sc, color, cur);
    fill(image, sr + 1, sc, color, cur);
    fill(image, sr, sc - 1, color, cur);
    fill(image, sr, sc + 1, color, cur);
};

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2))