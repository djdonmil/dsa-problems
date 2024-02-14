/*
Topological Sort algorithm
*/

/*
Implement the Topological Sort algorithm to sort a directed acyclic graph (DAG) represented by its adjacency matrix. Topological Sort finds a linear ordering of the vertices in a DAG such that for every directed edge (u, v), vertex u comes before vertex v in the ordering.
*/

/*
Hints:
- Use Depth-First Search (DFS) to perform the Topological Sort. Keep track of visited vertices to avoid cycles in the graph.
- Use a stack to store the vertices in the correct order after the DFS traversal.
*/
function topologicalSort(adjacencyMatrix) {
    const visited = new Array(adjacencyMatrix.length).fill(false);
    const stack = [];

    function dfs(vertex) {
        visited[vertex] = true;

        for (let neighbor = 0; neighbor < adjacencyMatrix.length; neighbor++) {
            if (adjacencyMatrix[vertex][neighbor] === 1 && !visited[neighbor]) {
                dfs(neighbor);
            }
        }

        stack.push(vertex); // Push vertices onto the stack in reverse order
    }

    for (let vertex = 0; vertex < adjacencyMatrix.length; vertex++) {
        if (!visited[vertex]) {
            dfs(vertex);
        }
    }

    // Reverse the stack to get the correct order
    const sortedOrder = stack.reverse();

    return sortedOrder;
}


//   const adjacencyMatrix = [
//     [0, 1, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 1, 1, 0],
//     [0, 0, 0, 0, 1, 1],
//     [0, 0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 0, 0],
//   ];
const adjacencyMatrix = [
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 0],
]


console.log(topologicalSort(adjacencyMatrix));
