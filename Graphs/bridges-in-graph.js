/**
 * Write a program to find all the bridges (or cut edges) in an undirected graph. Given the graph as an adjacency list, your task is to identify the edges whose removal would increase the number of connected components in the graph.
 */

class UndirectedGraph {
    constructor() {
        this.adjacencyList = new Map();
        this.time = 0;
        this.bridges = [];
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

    findBridges() {
        const visited = new Map();
        const disc = new Map();
        const low = new Map();
        const parent = new Map();

        for (const vertex of this.adjacencyList.keys()) {
            visited.set(vertex, false);
            disc.set(vertex, -1);
            low.set(vertex, -1);
            parent.set(vertex, null);
        }

        for (const vertex of this.adjacencyList.keys()) {
            if (!visited.get(vertex)) {
                this.dfs(vertex, visited, disc, low, parent);
            }
        }

        return this.bridges;
    }

    dfs(u, visited, disc, low, parent) {
        visited.set(u, true);
        disc.set(u, this.time);
        low.set(u, this.time);
        this.time++;

        for (const v of this.adjacencyList.get(u)) {
            if (!visited.get(v)) {
                parent.set(v, u);
                this.dfs(v, visited, disc, low, parent);

                low.set(u, Math.min(low.get(u), low.get(v)));

                if (low.get(v) > disc.get(u)) {
                    this.bridges.push([u, v]);
                }
            } else if (v !== parent.get(u)) {
                low.set(u, Math.min(low.get(u), disc.get(v)));
            }
        }
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

const bridges = graph.findBridges();
console.log("Bridges:", bridges);
