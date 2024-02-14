function findKthSmallest(arr1, arr2, k) {
    const totalLength = arr1.length + arr2.length;

    if (k < 1 || k > totalLength) {
        throw new Error("Invalid value of k");
    }

    let left = Math.max(0, k - arr2.length); // Minimum number of elements from arr1
    let right = Math.min(k, arr1.length); // Maximum number of elements from arr1

    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);

        const numOfElementsFromArr1 = mid;
        const numOfElementsFromArr2 = k - mid;

        const valueFromArr1 = numOfElementsFromArr1 < arr1.length ? arr1[numOfElementsFromArr1] : Infinity;
        const valueFromArr2 = numOfElementsFromArr2 < arr2.length ? arr2[numOfElementsFromArr2] : Infinity;

        if (valueFromArr1 < valueFromArr2) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return Math.min(
        left < arr1.length ? arr1[left] : Infinity,
        left - 1 >= 0 && left - 1 < arr2.length ? arr2[left - 1] : Infinity
    );
}

// Example usage:
const arr1 = [2, 4, 6, 8, 10];
const arr2 = [1, 3, 5, 7, 9, 11];
const k = 5;

console.log(findKthSmallest(arr1, arr2, k));

