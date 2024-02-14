function findMedianSortedArrays(nums1, nums2) {
    const mergedArray = mergeSortedArrays(nums1, nums2);
  
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
  
    if (length % 2 === 0) {
      // If the length is even
      return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
      // If the length is odd
      return mergedArray[mid];
    }
  }
  
  function mergeSortedArrays(nums1, nums2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
  
    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] <= nums2[j]) {
        mergedArray.push(nums1[i]);
        i++;
      } else {
        mergedArray.push(nums2[j]);
        j++;
      }
    }
  
    // Add pending elements from nums1
    while (i < nums1.length) {
      mergedArray.push(nums1[i]);
      i++;
    }
  
    // Add pending elements from nums2
    while (j < nums2.length) {
      mergedArray.push(nums2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  const nums1 = [1, 3];
  const nums2 = [2];
  console.log(findMedianSortedArrays(nums1, nums2));
  
  