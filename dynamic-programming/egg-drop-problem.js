/**
 * Write a program to solve the Egg Drop Problem and determine the minimum number of attempts needed to find the highest floor from which an egg can be dropped without breaking. You are given a certain number of eggs and a certain number of floors. Your task is to find the minimum number of attempts required to determine the highest floor from which an egg can be dropped without breaking.
 */

function eggDrop(eggs, floors) {
    // Initialize a 2D array to store the results
    const dp = new Array(eggs + 1).fill(null).map(() => new Array(floors + 1).fill(0));
  
    // Base case: If there is only one egg, the number of attempts equals the number of floors
    for (let i = 1; i <= floors; i++) {
      dp[1][i] = i;
    }
  
    // Iterate over the number of eggs and floors to fill the dp array
    for (let egg = 2; egg <= eggs; egg++) {
      for (let floor = 1; floor <= floors; floor++) {
        dp[egg][floor] = Infinity;
  
        // Drop the egg from each floor and find the minimum attempts
        for (let dropFloor = 1; dropFloor <= floor; dropFloor++) {
          const attempts = 1 + Math.max(dp[egg - 1][dropFloor - 1], dp[egg][floor - dropFloor]);
          dp[egg][floor] = Math.min(dp[egg][floor], attempts);
        }
      }
    }
  
    return dp[eggs][floors];
  }

  const eggs = 2;
  const floors = 10;
  
  const result = eggDrop(eggs, floors);
  console.log(result); 
  