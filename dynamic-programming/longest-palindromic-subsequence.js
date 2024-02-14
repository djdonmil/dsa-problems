/**
 * Write a program to find the length of the longest palindromic subsequence in a given string. A palindromic subsequence is a subsequence that reads the same forwards and backwards. Your task is to calculate the length of the longest palindromic subsequence.
 */

function longestPalindromeSubsequence(s) {
    const n = s.length;
    const dp = new Array(n).fill(null).map(() => new Array(n).fill(0));
  
    // A single character is a palindrome of length 1
    for (let i = 0; i < n; i++) {
      dp[i][i] = 1;
    }
  
    // Fill the table using dynamic programming
    for (let len = 2; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        const j = i + len - 1;
  
        if (s[i] === s[j] && len === 2) {
          dp[i][j] = 2;
        } else if (s[i] === s[j]) {
          dp[i][j] = dp[i + 1][j - 1] + 2;
        } else {
          dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
        }
      }
    }
  
    return dp[0][n - 1];
  }
  
  const inputString = "bbbab";
  const result = longestPalindromeSubsequence(inputString);
  console.log(result); 