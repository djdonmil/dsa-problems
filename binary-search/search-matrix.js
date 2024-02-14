// Problem Statement:
// Write an efficient algorithm that searches for a value in an m x n matrix. The matrix has the following properties:

// Integers in each row are sorted in ascending order from left to right. The first integer of each row is greater than the last integer of the previous row.

function searchMatrix(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
      return false;
    }
  
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    let start = 0;
    let end = rows * cols - 1;
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const midValue = matrix[Math.floor(mid / cols)][mid % cols];
  
      if (midValue === target) {
        return true; // Target found
      } else if (midValue < target) {
        start = mid + 1; // Search in the right half
      } else {
        end = mid - 1; // Search in the left half
      }
    }
  
    return false; // Target not found
  }
  
  const matrix = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],
    [10, 13, 14, 17],
  ];
  
  const target = 5;
  console.log(searchMatrix(matrix, target));
  
  