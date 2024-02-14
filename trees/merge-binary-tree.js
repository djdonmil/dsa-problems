//Merge binary trees

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function mergeTrees(t1, t2) {
    if (t1 === null) {
        return t2;
    }
    if (t2 === null) {
        return t1;
    }

    const mergedNode = new TreeNode(t1.val + t2.val);

    // Recursively merge the left and right subtrees
    mergedNode.left = mergeTrees(t1.left, t2.left);
    mergedNode.right = mergeTrees(t1.right, t2.right);

    return mergedNode;
}

// Example usage:
// Construct two sample binary trees
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(3);
tree1.right = new TreeNode(2);
tree1.left.left = new TreeNode(5);

const tree2 = new TreeNode(2);
tree2.left = new TreeNode(1);
tree2.right = new TreeNode(3);
tree2.left.right = new TreeNode(4);
tree2.right.right = new TreeNode(7);

console.log("Tree 1:");
console.log(JSON.stringify(tree1, null, 2));

console.log("\nTree 2:");
console.log(JSON.stringify(tree2, null, 2));

// Merge the two trees
const mergedTree = mergeTrees(tree1, tree2);

console.log("\nMerged Tree:");
console.log(JSON.stringify(mergedTree, null, 2));
