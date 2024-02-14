// Maze Maximum Binary Search

// Problem Statement:
// You are given a maze represented by a 2D grid. Each cell in the grid represents a room, and the value of the cell represents the number of gold coins in that room. You start from the top-left room (0, 0) and need to find the maximum number of coins you can collect while moving through the maze. You can only move down or right at any given point. Implement a binary search approach to solve this problem efficiently.

function maxCoinsInMaze(maze) {
    if (!maze || maze.length === 0 || maze[0].length === 0) {
      return 0;
    }
  
    const rows = maze.length;
    const cols = maze[0].length;
    let left = 0;
    let right = Math.pow(10, 9);
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (canCollectAtLeast(maze, mid, rows, cols)) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return left - 1;
  }
  
  function canCollectAtLeast(maze, targetCoins, rows, cols) {
    let i = 0;
    let j = 0;
    let currentCoins = maze[i][j];
    let dp = Array.from({ length: rows }, () => Array(cols).fill(0));
    dp[0][0] = maze[0][0];
  
    // Initialize the first row
    for (let col = 1; col < cols; col++) {
      currentCoins += maze[0][col];
      dp[0][col] = currentCoins;
    }
  
    // Initialize the first column
    currentCoins = maze[0][0];
    for (let row = 1; row < rows; row++) {
      currentCoins += maze[row][0];
      dp[row][0] = currentCoins;
    }
  
    for (let row = 1; row < rows; row++) {
      for (let col = 1; col < cols; col++) {
        dp[row][col] = maze[row][col] + Math.max(dp[row - 1][col], dp[row][col - 1]);
      }
    }
  
    return dp[rows - 1][cols - 1] >= targetCoins;
  }
  
  // Example usage:
  const maze = [
    [1, 3, 1],
    [2, 2, 4],
    [3, 1, 3],
  ];
  
console.log(maxCoinsInMaze(maze));
  
  