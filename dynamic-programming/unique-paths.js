/**
 * Write a program to find the number of unique paths to reach the bottom-right corner of an m x n grid, starting from the top-left corner and moving only right or down. Your task is to calculate the number of unique paths.
 */

function uniquePaths(m, n) {
    // Create a 2D array to store the number of unique paths for each cell
    const dp = new Array(m).fill(null).map(() => new Array(n).fill(0));

    // Initialize the first row and column with 1, as there is only one way to reach any cell in the first row or column
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }

    // Fill the dp array using dynamic programming
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    // The number of unique paths to the bottom-right corner is stored in dp[m-1][n-1]
    return dp[m - 1][n - 1];
}

const m = 3;
const n = 7;

const result = uniquePaths(m, n);
console.log(result); 