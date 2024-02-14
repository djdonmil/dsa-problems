/**
 * Write a program to solve the Traveling Salesman Problem (TSP). Given a list of cities and the distances between each pair of cities, your task is to find the shortest possible route that visits each city exactly once and returns to the starting city.
 */

function calculateTotalDistance(path, distances) {
    let totalDistance = 0;

    for (let i = 0; i < path.length - 1; i++) {
        const currentCity = path[i];
        const nextCity = path[i + 1];
        totalDistance += distances[currentCity][nextCity];
    }

    // Add the distance from the last city back to the starting city
    totalDistance += distances[path[path.length - 1]][path[0]];

    return totalDistance;
}

function generatePermutations(arr, permutations, start, end) {
    if (start === end) {
        permutations.push([...arr]);
    } else {
        for (let i = start; i <= end; i++) {
            [arr[start], arr[i]] = [arr[i], arr[start]]; // Swap
            generatePermutations(arr, permutations, start + 1, end);
            [arr[start], arr[i]] = [arr[i], arr[start]]; // Backtrack
        }
    }
}

function travelingSalesmanProblem(cities, distances) {
    const n = cities.length;

    if (n <= 1) {
        return cities; // Only one or no city, no need to calculate
    }

    const indices = cities.map((_, index) => index);
    const allPermutations = [];
    generatePermutations(indices, allPermutations, 0, n - 1);

    let minDistance = Infinity;
    let optimalPath = [];

    for (const permutation of allPermutations) {
        const currentDistance = calculateTotalDistance(permutation, distances);
        if (currentDistance < minDistance) {
            minDistance = currentDistance;
            optimalPath = permutation;
        }
    }

    return optimalPath.map((index) => cities[index]);
}

const cities = ['A', 'B', 'C', 'D'];
const distances = {
    A: { A: 0, B: 2, C: 9, D: 10 },
    B: { A: 1, B: 0, C: 6, D: 4 },
    C: { A: 15, B: 7, C: 0, D: 8 },
    D: { A: 6, B: 3, C: 12, D: 0 },
};

const optimalPath = travelingSalesmanProblem(cities, distances);
console.log('Optimal Path:', optimalPath);
