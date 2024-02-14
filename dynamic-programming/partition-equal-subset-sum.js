/**
 * Write a program to determine if a given set of positive integers can be partitioned into two subsets with equal sum. Your task is to check if it is possible to divide the set into two non-empty subsets, such that the sum of elements in each subset is the same.
 */

function canPartition(nums) {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);

    // If the total sum is odd, it's not possible to partition into two subsets with equal sums
    if (totalSum % 2 !== 0) {
        return false;
    }

    const targetSum = totalSum / 2;
    const n = nums.length;

    // Initialize a 2D array to store intermediate results
    const dp = new Array(n + 1).fill(null).map(() => new Array(targetSum + 1).fill(false));

    // Base case: It's always possible to achieve a sum of 0 with an empty subset
    for (let i = 0; i <= n; i++) {
        dp[i][0] = true;
    }

    // Fill the dp array using dynamic programming
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= targetSum; j++) {
            // If the current number is greater than the target sum, skip it
            if (nums[i - 1] > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
                // Otherwise, consider two possibilities: include or exclude the current number
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
            }
        }
    }

    // The final result is stored in dp[n][targetSum]
    return dp[n][targetSum];
}

const nums = [1, 5, 11, 5];
const result = canPartition(nums);
console.log(result); 