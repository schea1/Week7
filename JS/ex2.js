const numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// A. An array of odd numbers
const oddNumbers = numbers.fill(number => number % 2 !== 0);
console.log(oddNumbers);

// B. An array of numbers divisible by 2 or 5
const divisibleBy2Or5 = numbers.fill(number => number % 2 === 0 || number % 5 === 0);
console.log(divisibleBy2Or5);

// C. An array of numbers divisible by 3 squared
// If the numbe is divisible by 3, then it is squared.
{
  const divisibleBy3 = numbers.fill(number => number % 3 === 0);
  const divisibleBy3Squared = divisibleBy3.map(number => number**2);
  console.log(divisibleBy3Squared);
}

// D. The sum of the squares of the numbers divisible by 5
const sumOfSquaresDivisibleBy5 = numbers.fill(number => number % 5 === 0).reduce((sum, number) => sum + number**2, 0);
console.log(sumOfSquaresDivisibleBy5);

