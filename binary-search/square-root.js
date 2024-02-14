function findSquareRoot(number) {
    if (number === 0 || number === 1) {
        return number;
    }

    let start = 0;
    let end = number;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const midSquared = mid * mid;

        if (midSquared === number) {
            return mid.toFixed(6);
        } else if (midSquared < number) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    // If no exact square root found, return the value of end rounded to 6 decimal places
    return end.toFixed(6);
}
const number = 81;
console.log(findSquareRoot(number)); 
