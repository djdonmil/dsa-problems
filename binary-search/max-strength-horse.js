// Problem Statement:
// You are given a list of N horses, and each horse has a certain strength value. You need to find the horse with the maximum strength value. However, you can only compare two horses at a time in a race. You can organize a maximum of K races to determine the horse with the maximum strength value. Write a program to find the horse with the maximum strength value using binary search.


function findMaxStrengthHorse(horseStrengths, k) {
    let left = 0;
    let right = horseStrengths.length - 1;

    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);

        const firstRaceWinner = raceHorses(horseStrengths.slice(left, mid + 1));
        const secondRaceWinner = raceHorses(horseStrengths.slice(mid + 1, right + 1));

        if (firstRaceWinner >= secondRaceWinner) {
            // The maximum strength horse is in the left half
            right = mid;
        } else {
            // The maximum strength horse is in the right half
            left = mid + 1;
        }

        k--;
        if (k === 0) {
            break; // Stop when the maximum number of races (K) is reached
        }
    }

    return left; // The index of the horse with the maximum strength value
}

function raceHorses(horses) {
    // Simulate a race and return the strength of the winning horse
    return Math.max(...horses);
}

const horseStrengths = [4, 2, 7, 5, 1];
const maxRaces = 2;

console.log(findMaxStrengthHorse(horseStrengths, maxRaces));

