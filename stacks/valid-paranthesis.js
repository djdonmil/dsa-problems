// Problem Statement:
// Write a JavaScript function that takes a string containing only parentheses ('(', ')', '{', '}', '[', ']') and returns true if the parentheses are valid and balanced, and false otherwise.

// Implement the function to validate the parentheses string and use prompt to take input from the user.

function areParenthesesBalanced(str) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];

        if (currentChar === '(' || currentChar === '[' || currentChar === '{') {
            // Opening parenthesis encountered, push onto the stack
            stack.push(currentChar);
        } else if (currentChar === ')' || currentChar === ']' || currentChar === '}') {
            // Closing parenthesis encountered
            if (stack.length === 0) {
                // If stack is empty, no matching opening parenthesis found
                return false;
            }

            const topOfStack = stack.pop();

            // Check if the popped opening parenthesis matches the current closing parenthesis
            if (
                (currentChar === ')' && topOfStack !== '(') ||
                (currentChar === ']' && topOfStack !== '[') ||
                (currentChar === '}' && topOfStack !== '{')
            ) {
                return false;
            }
        }
    }

    // After iterating through the string, if the stack is empty, parentheses are balanced
    return stack.length === 0;
}

// Example usage:
const balancedString = "{[()]}";
const unbalancedString = "{[(])}";

console.log(areParenthesesBalanced(balancedString)); 
console.log(areParenthesesBalanced(unbalancedString)); 