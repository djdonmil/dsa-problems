// Problem Statement:
// Check if a given tree is symmetric


class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function isSymmetric(root) {
    if (root === null) {
        return true;
    }

    return isMirror(root.left, root.right);
}

function isMirror(left, right) {
    if (left === null && right === null) {
        return true;
    }

    if (left === null || right === null) {
        return false;
    }

    return (
        left.val === right.val &&
        isMirror(left.left, right.right) &&
        isMirror(left.right, right.left)
    );
}

// Construct a sample symmetric binary tree
const symmetricTree = new TreeNode(1);
symmetricTree.left = new TreeNode(2);
symmetricTree.right = new TreeNode(2);
symmetricTree.left.left = new TreeNode(3);
symmetricTree.left.right = new TreeNode(4);
symmetricTree.right.left = new TreeNode(4);
symmetricTree.right.right = new TreeNode(3);

console.log(isSymmetric(symmetricTree)); 

// Construct a sample non-symmetric binary tree
const nonSymmetricTree = new TreeNode(1);
nonSymmetricTree.left = new TreeNode(2);
nonSymmetricTree.right = new TreeNode(2);
nonSymmetricTree.left.right = new TreeNode(3);
nonSymmetricTree.right.right = new TreeNode(3);

console.log(isSymmetric(nonSymmetricTree)); 
