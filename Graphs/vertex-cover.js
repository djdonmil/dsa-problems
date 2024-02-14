/**
 * Write a program to find the minimum vertex cover in a graph. Given the graph as an adjacency list, your task is to determine the smallest set of vertices such that every edge in the graph is incident to at least one vertex in the set.
 */

class BipartiteGraph {
    constructor() {
        this.leftVertices = new Set();
        this.rightVertices = new Set();
        this.edges = [];
    }

    addLeftVertex(vertex) {
        this.leftVertices.add(vertex);
    }

    addRightVertex(vertex) {
        this.rightVertices.add(vertex);
    }

    addEdge(leftVertex, rightVertex) {
        this.edges.push({ left: leftVertex, right: rightVertex });
    }

    findMinimumVertexCover() {
        const matching = new Map();
        const visited = new Set();

        const dfs = (vertex, isLeft) => {
            visited.add(vertex);

            for (const edge of this.edges) {
                const { left, right } = edge;

                if (isLeft && left === vertex && !visited.has(right)) {
                    visited.add(right);

                    if (!matching.has(right) || dfs(matching.get(right), true)) {
                        matching.set(right, vertex);
                        return true;
                    }
                } else if (!isLeft && right === vertex && !visited.has(left)) {
                    visited.add(left);

                    if (!matching.has(left) || dfs(matching.get(left), false)) {
                        matching.set(left, vertex);
                        return true;
                    }
                }
            }

            return false;
        };

        for (const leftVertex of this.leftVertices) {
            visited.clear();
            dfs(leftVertex, true);
        }

        const minimumVertexCover = new Set();

        for (const [rightVertex, leftVertex] of matching) {
            minimumVertexCover.add(leftVertex);
            minimumVertexCover.add(rightVertex);
        }

        return Array.from(minimumVertexCover);
    }
}

const graph = new BipartiteGraph();
graph.addLeftVertex(0);
graph.addLeftVertex(1);
graph.addLeftVertex(2);
graph.addRightVertex(3);
graph.addRightVertex(4);

graph.addEdge(0, 3);
graph.addEdge(0, 4);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

const minimumVertexCover = graph.findMinimumVertexCover();
console.log("Minimum Vertex Cover:", minimumVertexCover);
