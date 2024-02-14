function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            // If the element at mid is greater than its right neighbor, a peak is on the left half
            right = mid;
        } else {
            // If the element at mid is less than its right neighbor, a peak is on the right half
            left = mid + 1;
        }
    }

    return left;
}

const nums = [1, 2, 3, 4, 5];
console.log(findPeakElement(nums));

