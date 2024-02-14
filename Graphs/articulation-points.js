/**
 * Write a program to find all the articulation points in an undirected graph. Given the graph as an adjacency list, your task is to find and return a list of all the nodes that are articulation points in the graph.
 */

class ArticulationPoints {
    constructor(vertices) {
        this.vertices = vertices;
        this.graph = new Map();
        this.time = 0;
        this.articulationPoints = [];
    }

    addEdge(u, v) {
        if (!this.graph.has(u)) {
            this.graph.set(u, []);
        }
        if (!this.graph.has(v)) {
            this.graph.set(v, []);
        }

        this.graph.get(u).push(v);
        this.graph.get(v).push(u);
    }

    findArticulationPoints() {
        const visited = new Map();
        const disc = new Map();
        const low = new Map();
        const parent = new Map();

        for (const vertex of this.vertices) {
            visited.set(vertex, false);
            disc.set(vertex, -1);
            low.set(vertex, -1);
            parent.set(vertex, null);
        }

        for (const vertex of this.vertices) {
            if (!visited.get(vertex)) {
                this.dfs(vertex, visited, disc, low, parent);
            }
        }

        return this.articulationPoints;
    }

    dfs(u, visited, disc, low, parent) {
        let children = 0;
        visited.set(u, true);
        disc.set(u, this.time);
        low.set(u, this.time);
        this.time++;

        for (const v of this.graph.get(u)) {
            if (!visited.get(v)) {
                children++;
                parent.set(v, u);
                this.dfs(v, visited, disc, low, parent);

                low.set(u, Math.min(low.get(u), low.get(v)));

                if (low.get(v) >= disc.get(u) && parent.get(u) !== null) {
                    this.articulationPoints.push(u);
                }
            } else if (v !== parent.get(u)) {
                low.set(u, Math.min(low.get(u), disc.get(v)));
            }
        }

        if (parent.get(u) === null && children > 1) {
            this.articulationPoints.push(u);
        }
    }
}

const graph = new ArticulationPoints([0, 1, 2, 3, 4]);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(1, 3);
graph.addEdge(1, 4);

const articulationPoints = graph.findArticulationPoints();
console.log(articulationPoints);