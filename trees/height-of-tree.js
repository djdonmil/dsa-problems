class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    height() {
        return this._heightRec(this.root);
    }

    _heightRec(node) {
        if (!node) {
            return 0; // Height of an empty tree is 0
        }

        const leftHeight = this._heightRec(node.left);
        const rightHeight = this._heightRec(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }
}

// Create a binary tree
const tree = new BinaryTree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);

// Calculate the height of the tree
const treeHeight = tree.height();
console.log("Height of the tree:", treeHeight); // Output: 3