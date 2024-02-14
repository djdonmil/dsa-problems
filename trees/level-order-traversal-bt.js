// Problem Statement:
// Write a function to print the nodes of a binary tree in a level order traversal

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function levelOrderTraversal(root) {
    if (root === null) {
        return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift();
        result.push(current.val);

        if (current.left !== null) {
            queue.push(current.left);
        }

        if (current.right !== null) {
            queue.push(current.right);
        }
    }

    return result;
}

// Construct a sample binary tree
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);

// Print nodes in level order
const levelOrderResult = levelOrderTraversal(tree);
console.log(levelOrderResult); 
