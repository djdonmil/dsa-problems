/*
Problem Statement:
Write a function to serialize a binary tree into a string representation.
*/


class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function serialize(root) {
    if (root === null) {
        return 'null';
    }

    const serializedLeft = serialize(root.left);
    const serializedRight = serialize(root.right);

    return `${root.val},${serializedLeft},${serializedRight}`;
}

// Example usage:
// Construct a sample binary tree
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);

// Serialize the binary tree
const serializedTree = serialize(tree);

console.log(serializedTree);
