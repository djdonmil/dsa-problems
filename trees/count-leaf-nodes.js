// Problem Statement:
// Write a function to count the number of leaf nodes in a binary tree.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function countLeafNodes(root) {
    if (!root) {
        return 0;
    }

    if (!root.left && !root.right) {
        // Node is a leaf node
        return 1;
    }

    // Recursively count leaf nodes in the left and right subtrees
    const leftLeafCount = countLeafNodes(root.left);
    const rightLeafCount = countLeafNodes(root.right);

    // Total leaf nodes in the current subtree
    return leftLeafCount + rightLeafCount;
}

// Example usage:
// Create a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Count the number of leaf nodes
const leafCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafCount);