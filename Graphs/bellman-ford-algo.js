/**
 * Write a program to find the shortest path in a weighted, directed graph that may contain negative edge weights using the Bellman-Ford algorithm. Given the graph as an adjacency list with weights, your task is to determine the shortest path from a given source node to all other nodes in the graph.
 */

class WeightedDirectedGraph {
    constructor() {
        this.vertices = new Set();
        this.edges = [];
    }

    addVertex(vertex) {
        this.vertices.add(vertex);
    }

    addEdge(from, to, weight) {
        this.edges.push({ from, to, weight });
    }

    bellmanFord(source) {
        const distances = new Map();
        const predecessors = new Map();

        // Step 1: Initialize distances and predecessors
        for (const vertex of this.vertices) {
            distances.set(vertex, Infinity);
            predecessors.set(vertex, null);
        }
        distances.set(source, 0);

        // Step 2: Relax edges repeatedly
        for (let i = 1; i <= this.vertices.size - 1; i++) {
            for (const edge of this.edges) {
                const { from, to, weight } = edge;
                if (distances.get(from) + weight < distances.get(to)) {
                    distances.set(to, distances.get(from) + weight);
                    predecessors.set(to, from);
                }
            }
        }

        // Step 3: Check for negative cycles
        for (const edge of this.edges) {
            const { from, to, weight } = edge;
            if (distances.get(from) + weight < distances.get(to)) {
                throw new Error("Graph contains a negative cycle.");
            }
        }

        return { distances, predecessors };
    }
}

const graph = new WeightedDirectedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B", 1);
graph.addEdge("B", "C", -2);
graph.addEdge("C", "D", 3);
graph.addEdge("D", "A", 4);
graph.addEdge("B", "D", 2);

const sourceNode = "A";
const result = graph.bellmanFord(sourceNode);

console.log("Shortest Distances:", result.distances);
console.log("Predecessors:", result.predecessors);
