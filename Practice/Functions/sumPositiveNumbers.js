  // Implement a function that takes an array of numbers and returns the sum of all positive numbers in the array using a loop.
  function sumOfPositiveNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    return sum;
}

// Example usage:
let numbers = [1, -2, 3, -4, 5];
console.log(sumOfPositiveNumbers(numbers)); // Output will be 9 (1 + 3 + 5)
