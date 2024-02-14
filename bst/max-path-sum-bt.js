/*
Write a function to find the maximum path sum in a binary tree.
*/

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class MaxPathSum {
    constructor() {
        this.maxSum = Number.MIN_SAFE_INTEGER;
    }
}

function findMaxPathSum(root) {
    const maxPathSum = new MaxPathSum();
    calculateMaxPathSum(root, maxPathSum);
    return maxPathSum.maxSum;
}

function calculateMaxPathSum(node, maxPathSum) {
    // Base case: an empty tree contributes 0 to the path sum
    if (node === null) {
        return 0;
    }

    // Calculate the maximum path sum for the left and right subtrees
    const leftMax = Math.max(0, calculateMaxPathSum(node.left, maxPathSum));
    const rightMax = Math.max(0, calculateMaxPathSum(node.right, maxPathSum));

    // Update the maximum path sum considering the current node
    const currentMaxPathSum = node.value + leftMax + rightMax;
    maxPathSum.maxSum = Math.max(maxPathSum.maxSum, currentMaxPathSum);

    // Return the maximum path sum including the current node for the upper level
    return node.value + Math.max(leftMax, rightMax);
}

// Construct a sample binary tree
const root = new TreeNode(10);
root.left = new TreeNode(2);
root.right = new TreeNode(10);
root.left.left = new TreeNode(20);
root.left.right = new TreeNode(1);
root.right.right = new TreeNode(-25);
root.right.right.left = new TreeNode(3);
root.right.right.right = new TreeNode(4);

// Find the maximum path sum
const result = findMaxPathSum(root);
console.log(result); 
