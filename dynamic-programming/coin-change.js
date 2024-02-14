/**
 * Write a program to find the minimum number of coins required to make the change for a given target amount using a set of coin denominations. You have an unlimited supply of coins of each denomination. Your task is to determine the minimum number of coins needed to make the change, or return -1 if it is not possible to make the change using the given denominations.
 */

function minCoins(coins, target) {
    const dp = new Array(target + 1).fill(Infinity);
    dp[0] = 0;
  
    for (let i = 1; i <= target; i++) {
      for (const coin of coins) {
        if (i >= coin) {
          dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
      }
    }
  
    return dp[target] === Infinity ? -1 : dp[target];
  }
  
  const coins = [1, 2, 5];
  const target = 11;
  
  const result = minCoins(coins, target);
  console.log(result); // Should output: 3 (as 11 = 5 + 5 + 1)
  