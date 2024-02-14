function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // The minimum is on the right side
            left = mid + 1;
        } else {
            // The minimum is on the left side or at the mid position
            right = mid;
        }
    }

    // At the end of the loop, left and right will be indicating the minimum element
    return nums[left];
}

const rotatedSortedArray = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(rotatedSortedArray));

