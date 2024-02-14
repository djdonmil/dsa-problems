/**
 * Write a program to determine whether an undirected graph is bipartite or not. Given the graph as an adjacency list, your task is to check if the graph can be divided into two sets of nodes such that there are no edges between nodes of the same set.
 */

class UndirectedGraph {
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

    isBipartite() {
        const colors = new Map();

        const dfs = (vertex, color) => {
            colors.set(vertex, color);

            for (const neighbor of this.adjacencyList.get(vertex)) {
                if (!colors.has(neighbor)) {
                    if (!dfs(neighbor, 1 - color)) {
                        return false;
                    }
                } else if (colors.get(neighbor) === color) {
                    return false; // Not bipartite, as adjacent nodes have the same color
                }
            }

            return true;
        };

        for (const vertex of this.adjacencyList.keys()) {
            if (!colors.has(vertex)) {
                if (!dfs(vertex, 0)) {
                    return false;
                }
            }
        }

        return true; // Graph is bipartite
    }
}

const graph = new UndirectedGraph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);

graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(1, 3);

const isBipartite = graph.isBipartite();
console.log("Graph is bipartite:", isBipartite);
