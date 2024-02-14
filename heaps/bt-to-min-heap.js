/**
 * Write a program to convert a given binary tree into a min heap. The binary tree is represented by its in-order traversal, where -1 represents null nodes. The program should perform an in-order traversal of the binary tree, store the node values in an array, sort the array in ascending order, and reconstruct a new binary tree that represents a min heap.
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(root, result) {
    if (root !== null) {
        inOrderTraversal(root.left, result);
        result.push(root.value);
        inOrderTraversal(root.right, result);
    }
}

function arrayToMinHeap(arr) {
    if (arr.length === 0) {
        return null;
    }

    // Sort the array in ascending order
    const sortedArr = arr.slice().sort((a, b) => a - b);

    // Reconstruct the min heap from the sorted array
    return constructMinHeapFromArray(sortedArr);
}

function constructMinHeapFromArray(arr) {
    if (arr.length === 0) {
        return null;
    }

    const midIndex = Math.floor(arr.length / 2);
    const root = new TreeNode(arr[midIndex]);

    root.left = constructMinHeapFromArray(arr.slice(0, midIndex));
    root.right = constructMinHeapFromArray(arr.slice(midIndex + 1));

    return root;
}

function printInOrder(root) {
    if (root !== null) {
        printInOrder(root.left);
        console.log(root.value);
        printInOrder(root.right);
    }
}

const binaryTree = new TreeNode(4);
binaryTree.left = new TreeNode(2);
binaryTree.right = new TreeNode(6);
binaryTree.left.left = new TreeNode(1);
binaryTree.left.right = new TreeNode(3);
binaryTree.right.left = new TreeNode(5);
binaryTree.right.right = new TreeNode(7);

const inOrderResult = [];
inOrderTraversal(binaryTree, inOrderResult);

console.log("In-order traversal of original binary tree:");
console.log(inOrderResult);

const minHeapRoot = arrayToMinHeap(inOrderResult);

console.log("\nIn-order traversal of binary tree converted to min heap:");
printInOrder(minHeapRoot);
