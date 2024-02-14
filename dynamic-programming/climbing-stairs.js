/**
 * Write a program to determine the number of distinct ways to reach the top of a staircase with n steps, where a person can climb either 1 or 2 steps at a time. Your task is to calculate the number of distinct ways to reach the top step.
 */

function climbStairs(n) {
    if (n <= 1) {
        return 1;
    }

    const dp = new Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

const n = 4;
const result = climbStairs(n);
console.log(result); 