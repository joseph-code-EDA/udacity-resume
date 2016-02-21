

// LOOPING A TRIANGLE
// My Attempt
for (var hashtag = "#"; hashtag <= 7; hashtag += "#")
  console.log(hashtag.length);
/*After comparing my block to the answer, I noticed that:
(1) .length should be with ...hashtag.length <= 7...
(2) ...hashtag.length <= 7... could be <8 due to zero-based indexing OR <=7 inclusive. */



// FIZZBUZZ
// My Attempt
for (var number = 1; number < 101; number ++) {
    if ((number % 3 === 0) && (number % 5 === 0)) {
    console.log("FizzBuzz");
  } if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}
/*Took a while to realize that "Fizzbuzz" had to be moved to the top of the order */




// CHESS BOARD
// My Attempt

/* */
