/**
 * Write a function to check if two binary trees are identical. Two binary trees are considered identical if they have the same structure and the same values at each corresponding node.
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function areIdenticalTrees(tree1, tree2) {
    // Base case: If both trees are empty, they are identical
    if (!tree1 && !tree2) {
        return true;
    }

    // If one tree is empty and the other is not, they are not identical
    if (!tree1 || !tree2) {
        return false;
    }

    // Check if the values of the current nodes are equal
    if (tree1.value !== tree2.value) {
        return false;
    }

    // Recursively check the left and right subtrees
    return (
        areIdenticalTrees(tree1.left, tree2.left) &&
        areIdenticalTrees(tree1.right, tree2.right)
    );
}

// Construct two identical trees
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

// Check if the trees are identical
const result = areIdenticalTrees(tree1, tree2);
console.log(result); 
