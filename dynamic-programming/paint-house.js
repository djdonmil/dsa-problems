/**
 * Write a program to find the minimum cost to paint all the houses without painting any two adjacent houses with the same color. Given a matrix representing the cost of painting houses with different colors, your task is to calculate the minimum cost.
 */

function minCostToPaintHouses(costs) {
    if (costs.length === 0) {
        return 0;
    }

    const n = costs.length;

    // Create a 2D array to store the minimum cost of painting each house with a specific color
    const dp = new Array(n).fill(null).map(() => new Array(3).fill(0));

    // Initialize the first row with the costs of the first house
    dp[0][0] = costs[0][0];
    dp[0][1] = costs[0][1];
    dp[0][2] = costs[0][2];

    // Fill the dp array using dynamic programming
    for (let i = 1; i < n; i++) {
        dp[i][0] = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
        dp[i][1] = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
        dp[i][2] = costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
    }

    // The minimum cost is the minimum value in the last row of the dp array
    return Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]);
}

const costs = [
    [17, 2, 17],
    [16, 16, 5],
    [14, 3, 19],
];

const result = minCostToPaintHouses(costs);
console.log(result); 