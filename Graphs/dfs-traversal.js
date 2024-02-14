/**
 * Write a program to perform a depth-first search (DFS) traversal on a given graph. Given the graph as an adjacency list, your task is to traverse the graph using DFS and process or print each visited node in the order it is visited.
 */

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
    }

    dfs(startVertex, processVertex) {
        const visited = new Map();

        const dfsHelper = (vertex) => {
            visited.set(vertex, true);
            processVertex(vertex);

            for (const neighbor of this.adjacencyList.get(vertex)) {
                if (!visited.has(neighbor)) {
                    dfsHelper(neighbor);
                }
            }
        };

        dfsHelper(startVertex);
    }
}

const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.addEdge(3, 3);
graph.addEdge(1, 4);
graph.addEdge(4, 0);

console.log("DFS Traversal:");
graph.dfs(2, (vertex) => {
    console.log(vertex);
});
