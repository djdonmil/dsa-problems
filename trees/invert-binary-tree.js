/*
Invert Binary Tree

Problem Statement:
Implement a function to invert a binary tree. Given the root of a binary tree, the function should modify the tree by swapping each node's left and right children.

*/


class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function invertBinaryTree(root) {
    if (root === null) {
        return null;
    }

    // Swap left and right children
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recursively invert the left and right subtrees
    invertBinaryTree(root.left);
    invertBinaryTree(root.right);

    return root;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("Original Tree:");
console.log(JSON.stringify(root, null, 2));

// Invert the binary tree
invertBinaryTree(root);

console.log("\nInverted Tree:");
console.log(JSON.stringify(root, null, 2));
