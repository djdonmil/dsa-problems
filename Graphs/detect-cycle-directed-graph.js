/**
 * Write a program to detect whether a directed graph contains a cycle or not. Given the graph as an adjacency list, your task is to determine if there is a cycle present in the graph.
 */

class DirectedGraph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(from, to) {
        this.adjacencyList.get(from).push(to);
    }

    hasCycle() {
        const visited = new Set();
        const pathSet = new Set();

        const dfs = (vertex) => {
            visited.add(vertex);
            pathSet.add(vertex);

            for (const neighbor of this.adjacencyList.get(vertex)) {
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor)) {
                        return true;
                    }
                } else if (pathSet.has(neighbor)) {
                    return true; // Cycle detected
                }
            }

            pathSet.delete(vertex); // Remove vertex from the current path
            return false;
        };

        for (const vertex of this.adjacencyList.keys()) {
            if (!visited.has(vertex)) {
                if (dfs(vertex)) {
                    return true; // Cycle detected
                }
            }
        }

        return false; // No cycle found
    }
}

const graph = new DirectedGraph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);

graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(1, 3);

const hasCycle = graph.hasCycle();
console.log("Graph contains cycle:", hasCycle);
