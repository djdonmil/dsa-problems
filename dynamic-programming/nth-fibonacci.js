/**
 * Write a program to calculate the nth Fibonacci number using dynamic programming. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. The sequence starts with 0 and 1. Your task is to calculate the nth Fibonacci number efficiently using dynamic programming.
 */

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

const n = 10;
const result = fibonacci(n);
console.log(result);