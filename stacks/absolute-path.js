
/*
// Given an absolute path for a file or directory, simplify it. The absolute path can contain multiple slashes '/', a single dot '.', and a double dot '..'. The simplified path should have the following properties:

// The path starts with a single slash '/'. Any two directories are separated by a single slash '/'. The path does not end with a trailing slash '/'. The path ".." means to move up one directory.
*/


function simplifyPath(path) {
    const parts = path.split('/');
    const stack = [];

    for (const part of parts) {
        if (part === '..') {
            // Move up one directory, pop from the stack if it's not empty
            if (stack.length > 0) {
                stack.pop();
            }
        } else if (part !== '' && part !== '.') {
            // Ignore empty parts and current directory references
            stack.push(part);
        }
    }

    // Construct the simplified path from the stack
    const simplifiedPath = '/' + stack.join('/');

    return simplifiedPath;
}

// Example usage:
const absolutePath = "/home//foo/./bar/../baz";
console.log(simplifyPath(absolutePath));