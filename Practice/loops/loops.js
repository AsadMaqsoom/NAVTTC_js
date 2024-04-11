// Q.1: Write a loop that prints numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    // console.log(i);    
};

// Q.2: Write a loop that prints even numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        // console.log(i)
    }

}
// With Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i <= numbers.length; i++) {
    if (i % 2 == 0) {
        // console.log(i)
    }
}

// Q.3: Write a loop that prints odd numbers from 1 to 20.
for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        // console.log(i)
    }
}

// Q.4: Write a loop that calculates the sum of numbers from 1 to 10.
let sum = 0;
for (let i = 0; i <= 10; i++) {
    sum += i;
    // console.log(sum);
}

// With Array
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let sumNumbers = 0;
for (let i = 0; i <= Numbers.length; i++) {
    sumNumbers += i;
}
// console.log("Sum of All Numbers is"+" "+sumNumbers);  


// Q.5: Write a loop that calculates the factorial of a number (e.g., factorial of 5 is 5 * 4 * 3 * 2 * 1).
//    let number = prompt("Enter Number")
let number = 5;
factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
// console.log(factorial);

// Q.6: Write a loop that prints the multiplication table of a number up to 10 (e.g., multiplication table of 5: 5 * 1, 5 * 2, ..., 5 * 10).

function Table() {
    for (let i = 2; i <=10; i++) {
        for (let j = 1; j <=10; j++) {
            console.log(`${i} x ${j} = ${i*j}`)
        }
        
    }
}
// Table()

// Q.7: Write a loop that generates and prints Fibonacci series up to a certain limit (e.g., limit = 50: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34).
// program to generate fibonacci series up to a certain number

// take input from the user
// const number1 = parseInt(prompt('Enter a positive number: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number1) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}

// Write a loop that reverses a given string.

// let string = "Asad Maqsoom";
// const arrayStrings = string.split("");
// console.log(arrayStrings);
// const reverseArray = arrayStrings.reverse();
// console.log(reverseArray);
// const joinArray = reverseArray.join("");
// console.log(joinArray); 


// Write a loop that counts the number of vowels in a given string.

