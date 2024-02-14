
/*
Root to Leaf Path Sum

Problem Statement:
Determine if there is a root to leaf path with a given sum in a tree.
*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function hasPathSum(root, sum) {
    if (root === null) {
        return false;
    }

    // If the current node is a leaf, check if its value matches the remaining sum
    if (root.left === null && root.right === null) {
        return sum - root.val === 0;
    }

    // Recursively check the left and right subtrees
    const leftPath = hasPathSum(root.left, sum - root.val);
    const rightPath = hasPathSum(root.right, sum - root.val);

    // Return true if either subtree has a path with the given sum
    return leftPath || rightPath;
}

// Construct a sample binary tree
const tree = new TreeNode(5);
tree.left = new TreeNode(4);
tree.right = new TreeNode(8);
tree.left.left = new TreeNode(11);
tree.left.left.left = new TreeNode(7);
tree.left.left.right = new TreeNode(2);
tree.right.left = new TreeNode(13);
tree.right.right = new TreeNode(4);
tree.right.right.right = new TreeNode(1);

const targetSum = 22;
console.log(hasPathSum(tree, targetSum)); 
