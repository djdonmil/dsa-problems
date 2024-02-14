function isTargetValuePresent(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = false;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        // Update result and continue searching on the right side
        result = true;
        break
        // left = mid + 1;
      } else if (arr[mid] > target) {
        // If the target is in the left half
        right = mid - 1;
      } else {
        // If the target is in the right half
        left = mid + 1;
      }
    }

    return result;
  }
  
  const sortedArray = [1, 2, 2, 2, 3, 4, 4, 5];
  const targetValue = 4;
  
  console.log(isTargetValuePresent(sortedArray, targetValue));
  
 
  