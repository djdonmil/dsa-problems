/*
Given an array of non-negative integers representing the histogram's bar height, where the width of each bar is 1, find the area of the largest rectangle in the histogram.

Implement a JavaScript function that takes an array of integers representing the histogram and returns the area of the largest rectangle.
*/

function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {
        while (stack.length > 0 && (i === heights.length || heights[i] < heights[stack[stack.length - 1]])) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    return maxArea;
}

const histogram = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(histogram)); 