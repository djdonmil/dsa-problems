/**
 * Write a program to determine if a given directed graph has an Eulerian path or circuit. Given the graph as an adjacency list, your task is to check if the graph has an Eulerian path or circuit and return the corresponding result.
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

    addEdge(startVertex, endVertex) {
        this.adjacencyList.get(startVertex).push(endVertex);
    }

    calculateInDegrees() {
        const inDegrees = new Map();

        for (const [vertex, neighbors] of this.adjacencyList) {
            if (!inDegrees.has(vertex)) {
                inDegrees.set(vertex, 0);
            }

            for (const neighbor of neighbors) {
                if (!inDegrees.has(neighbor)) {
                    inDegrees.set(neighbor, 1);
                } else {
                    inDegrees.set(neighbor, inDegrees.get(neighbor) + 1);
                }
            }
        }

        return inDegrees;
    }

    hasEulerianPathOrCircuit() {
        const inDegrees = this.calculateInDegrees();
        let oddDegreeCount = 0;
        let startVertex = null;

        for (const [vertex, inDegree] of inDegrees) {
            if (inDegree % 2 !== 0) {
                oddDegreeCount++;
                startVertex = vertex;
            }
        }

        if (oddDegreeCount === 0) {
            return "The graph has an Eulerian Circuit (Cycle).";
        } else if (oddDegreeCount === 2) {
            return `The graph has an Eulerian Path. Starting from vertex ${startVertex}.`;
        } else {
            return "The graph does not have an Eulerian Path or Circuit.";
        }
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
graph.addEdge(3, 2);

const result = graph.hasEulerianPathOrCircuit();
console.log(result);
