/**
 * 
 * Problem Name:
Circular Tour of Petrol Pumps

Problem Statement:
You are given a circular route containing N petrol pumps, where the amount of petrol at each pump and the distance to the next pump is given. You have to find the first petrol pump from where a circular tour can b e completed, visiting all the petrol pumps. It is guaranteed that there is always a solution possible.

*/


     // A petrol pump has petrol and distance to next petrol pump
    class petrolPump {
        constructor(petrol, distance) {
            this.petrol = petrol;
            this.distance = distance;
        }
    };
 
    // The function returns starting point if there is a possible solution,
    // otherwise returns -1
    const printTour = (arr, n) => {
        // Consider first petrol pump as a starting point
        let start = 0;
        let end = 1;
 
        let curr_petrol = arr[start].petrol - arr[start].distance;
 
        /* Run a loop while all petrol pumps are not visited.
        And we have reached first petrol pump again with 0 or more petrol */
        while (end != start || curr_petrol < 0) {
            // If current amount of petrol in truck becomes less than 0, then
            // remove the starting petrol pump from tour
            while (curr_petrol < 0 && start != end) {
                // Remove starting petrol pump. Change start
                curr_petrol -= arr[start].petrol - arr[start].distance;
                start = (start + 1) % n;
 
                // If 0 is being considered as start again, then there is no
                // possible solution
                if (start == 0)
                    return -1;
            }
 
            // Add a petrol pump to current tour
            curr_petrol += arr[end].petrol - arr[end].distance;
 
            end = (end + 1) % n;
        }
 
        // Return starting point
        return start;
    }
 
    // Driver code
 
    let arr = [new petrolPump(6, 4), new petrolPump(3, 6), new petrolPump(7, 3)];
    let n = arr.length;
    let start = printTour(arr, n);
 
    (start == -1) ? console.log("No solution") : console.log(`Start = ${start}`);
 
