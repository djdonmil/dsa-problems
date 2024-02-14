// Evaluate Reverse Polish Notation

// Problem Statement:
// Evaluate the value of an arithmetic expression in Reverse Polish Notation (RPN). The expression is given as an array of tokens where each token can be an operator or an integer operand.

// The valid operators are +, -, *, and /. Each operand and operator is separated by a space.




function evalRPN(tokens) {
    const stack = [];

    for (const token of tokens) {
        if (isOperator(token)) {
            // Operator encountered, pop operands, perform operation, and push result back onto the stack
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            const result = performOperation(operand1, operand2, token);
            stack.push(result);
        } else {
            // Operand encountered, push onto the stack
            stack.push(parseInt(token, 10));
        }
    }

    // The final result should be the only element in the stack
    return stack[0];
}

function isOperator(token) {
    return token === '+' || token === '-' || token === '*' || token === '/';
}

function performOperation(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            // Handle division by zero
            return Math.trunc(operand1 / operand2);
        default:
            throw new Error(`Invalid operator: ${operator}`);
    }
}

// Example usage:
const tokens = ["2", "1", "+", "3", "*"];
console.log(evalRPN(tokens)); 

const tokens2 = ["4", "13", "5", "/", "+"];
console.log(evalRPN(tokens2)); 
