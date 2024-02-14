// Problem Statement:
// Implement a function to find the lowest common ancestor of two nodes in a binary tree

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findLowestCommonAncestor(root, node1, node2) {
    if (!root || !node1 || !node2) {
        return null;
    }

    // If the root is one of the nodes, it is the LCA
    if (root === node1 || root === node2) {
        return root;
    }

    // Recursively search for the LCA in the left and right subtrees
    const leftLCA = findLowestCommonAncestor(root.left, node1, node2);
    const rightLCA = findLowestCommonAncestor(root.right, node1, node2);

    // If both nodes are found in different subtrees, the current root is the LCA
    if (leftLCA && rightLCA) {
        return root;
    }

    // If one node is found, return that node as a potential LCA
    return leftLCA || rightLCA;
}

// Example usage:
// Create a binary tree
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

// Find nodes in the tree
const node1 = root.left; // Node with value 5
const node2 = root.right.right; // Node with value 8

// Find the lowest common ancestor
const lca = findLowestCommonAncestor(root, node1, node2);

// Output the value of the lowest common ancestor
console.log("Lowest Common Ancestor:", lca ? lca.value : "Nodes not found in the tree");
