/**
 * Write a program to determine if a given string can be segmented into a space-separated sequence of words from a dictionary. You are given a dictionary of words, and your task is to determine if the string can be split into multiple words, such that each word is present in the dictionary.
 */

function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict);
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true; // Empty string can always be segmented
  
    for (let end = 1; end <= n; end++) {
      for (let start = 0; start < end; start++) {
        const currentWord = s.substring(start, end);
        if (dp[start] && wordSet.has(currentWord)) {
          dp[end] = true;
          break;
        }
      }
    }
  
    return dp[n];
  }
  
  const s = "leetcode";
  const wordDict = ["leet", "code"];
  
  const result = wordBreak(s, wordDict);
  console.log(result); 