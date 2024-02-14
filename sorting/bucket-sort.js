function bucketSortEvenOdd(arr) {
  
    // Create two buckets for even and odd numbers
    const evenBucket = [];
    const oddBucket = [];
  
    // Place numbers into respective buckets
    for (let num of arr) {
      if (num % 2 === 0) {
        evenBucket.push(num);
      } else {
        oddBucket.push(num);
      }
    }
  
    // Sort the individual buckets
    evenBucket.sort((a, b) => a - b);
    oddBucket.sort((a, b) => a - b);
  
    // Merge both arrays
    return [...evenBucket,...oddBucket];
  }
  
  const unsortedArray = [4, 2, 7, 1, 9, 3, 5, 6, 8];
  const sortedArray = bucketSortEvenOdd(unsortedArray);
  
  console.log("Original array:", unsortedArray);
  console.log("Sorted array with even numbers first, then odd numbers:", sortedArray);
  