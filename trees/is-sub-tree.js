/*
Problem Statement:
Check if a given tree is a subtree of another tree?
*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function isSubtree(s, t) {
    if (s === null) {
        return false;
    }

    if (isSameTree(s, t)) {
        return true;
    }

    return isSubtree(s.left, t) || isSubtree(s.right, t);
}

function isSameTree(tree1, tree2) {
    if (tree1 === null && tree2 === null) {
        return true;
    }

    if (tree1 === null || tree2 === null) {
        return false;
    }

    return (
        tree1.val === tree2.val &&
        isSameTree(tree1.left, tree2.left) &&
        isSameTree(tree1.right, tree2.right)
    );
}

// Construct two sample binary trees
const mainTree = new TreeNode(3);
mainTree.left = new TreeNode(4);
mainTree.right = new TreeNode(5);
mainTree.left.left = new TreeNode(1);
mainTree.left.right = new TreeNode(2);

const subtree = new TreeNode(4);
subtree.left = new TreeNode(1);
subtree.right = new TreeNode(2);

console.log(isSubtree(mainTree, subtree)); // Output: true
