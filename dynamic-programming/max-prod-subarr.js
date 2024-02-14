/**
 * Write a program to find the contiguous subarray within an array of integers that has the largest product. Your task is to calculate the maximum product of the subarray.
 */

function maxProduct(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            // Swap maxProduct and minProduct when encountering a negative number
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        // Update maxProduct and minProduct for the current element
        maxProduct = Math.max(nums[i], maxProduct * nums[i]);
        minProduct = Math.min(nums[i], minProduct * nums[i]);

        // Update the overall result
        result = Math.max(result, maxProduct);
    }

    return result;
}

const nums = [2, 3, -2, 4];
const result = maxProduct(nums);
console.log(result); 