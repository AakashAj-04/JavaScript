// Problem 1: Sum of natural numbers

function sumOfNaturalNumber(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
  //   return (num * (num + 1)) / 2;
}

console.log("Sum of natural numbers", sumOfNaturalNumber(5));

/* 
    Problem 2: Sum of digits of a number
    Eg : 1234 = 1+2+3+4
*/
function sumOfDigit(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log("Sum of Digit :", sumOfDigit(1234));

/*
Problem 3: Counts the number of digits of a number

34563 : 5
*/

function countDigit(num) {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

console.log("Count Digit in Number :", countDigit(-12345));
